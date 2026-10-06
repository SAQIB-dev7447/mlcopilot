from pathlib import Path
import shutil

from fastapi import APIRouter, File, UploadFile, HTTPException

from app.services.training_service import train_classification_pipeline


router = APIRouter(
    prefix="/api/train",
    tags=["Training"],
)


UPLOAD_DIR = Path("data/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/classification")
async def train_classification(file: UploadFile = File(...)):
    """
    Upload a CSV dataset and run the automated
    classification training pipeline.
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

        results = train_classification_pipeline(
            str(file_path)
        )

        return {
            "filename": file.filename,
            "results": results,
        }

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"Could not train classification models: {str(exc)}",
        )

    finally:
        file.file.close()