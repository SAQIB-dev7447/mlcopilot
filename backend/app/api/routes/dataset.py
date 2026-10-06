from fastapi import APIRouter, File, UploadFile, HTTPException
from pathlib import Path
import shutil

from app.services.dataset_service import analyze_dataset


router = APIRouter(
    prefix="/api/dataset",
    tags=["Dataset"],
)


UPLOAD_DIR = Path("data/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/analyze")
async def analyze_uploaded_dataset(file: UploadFile = File(...)):
    """
    Upload a CSV file and return an automatic dataset analysis.
    """

    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are supported.",
        )

    file_path = UPLOAD_DIR / file.filename

    try:
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        analysis = analyze_dataset(str(file_path))

        return {
            "filename": file.filename,
            "analysis": analysis,
        }

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"Could not analyze dataset: {str(exc)}",
        )

    finally:
        file.file.close()