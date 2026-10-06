from pathlib import Path
import shutil

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.services.file_service import create_safe_upload_path
from app.services.training_service import train_classification_pipeline


router = APIRouter(
    prefix="/api/train",
    tags=["Training"],
)


UPLOAD_DIR = Path("data/uploads")


@router.post("/classification")
async def train_classification(
    file: UploadFile = File(...),
):
    """
    Upload a CSV dataset and run the automated
    classification training pipeline.
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

        results = train_classification_pipeline(
            str(file_path)
        )

        return {
            "filename": file.filename,
            "results": results,
        }

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        )

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=(
                "Could not train classification models: "
                f"{str(exc)}"
            ),
        )

    finally:
        file.file.close()