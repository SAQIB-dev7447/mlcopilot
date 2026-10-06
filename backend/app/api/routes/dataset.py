from pathlib import Path
import shutil

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.services.dataset_service import analyze_dataset
from app.services.file_service import create_safe_upload_path


router = APIRouter(
    prefix="/api/dataset",
    tags=["Dataset"],
)


UPLOAD_DIR = Path("data/uploads")


@router.post("/analyze")
async def analyze_uploaded_dataset(
    file: UploadFile = File(...),
):
    """
    Upload a CSV file and return an automatic dataset analysis.
    """

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="A filename is required.",
        )

    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are supported.",
        )

    try:
        file_path = create_safe_upload_path(
            UPLOAD_DIR,
            file.filename,
        )

        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        analysis = analyze_dataset(str(file_path))

        return {
            "filename": file.filename,
            "analysis": analysis,
        }

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        )

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"Could not analyze dataset: {str(exc)}",
        )

    finally:
        file.file.close()