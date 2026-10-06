from pathlib import Path
from uuid import uuid4


def create_safe_upload_path(
    upload_dir: Path,
    original_filename: str,
) -> Path:
    """
    Create a safe unique path for an uploaded CSV file.

    The original filename is not used directly as the filesystem path.
    A generated UUID prevents filename collisions and path traversal.
    """

    suffix = Path(original_filename).suffix.lower()

    if suffix != ".csv":
        raise ValueError("Only CSV files are supported.")

    upload_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    safe_filename = f"{uuid4().hex}.csv"

    return upload_dir / safe_filename