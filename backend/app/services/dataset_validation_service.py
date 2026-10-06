import pandas as pd


def validate_training_dataset(df: pd.DataFrame) -> None:
    """
    Validate a dataset before model training.

    Raises:
        ValueError: If the dataset cannot safely be used for training.
    """

    if df.empty:
        raise ValueError("Dataset is empty.")

    if df.shape[1] < 2:
        raise ValueError(
            "Dataset must contain at least one feature column "
            "and one target column."
        )

    if len(df) < 10:
        raise ValueError(
            "Dataset must contain at least 10 rows for model training."
        )

    if df.columns.duplicated().any():
        duplicated_columns = (
            df.columns[df.columns.duplicated()].tolist()
        )

        raise ValueError(
            "Dataset contains duplicate column names: "
            f"{duplicated_columns}"
        )

    if df.isna().all(axis=0).any():
        empty_columns = (
            df.columns[df.isna().all(axis=0)].tolist()
        )

        raise ValueError(
            "Dataset contains completely empty columns: "
            f"{empty_columns}"
        )

    if df.isna().all(axis=1).any():
        raise ValueError(
            "Dataset contains rows where every value is missing."
        )


def validate_target_column(
    df: pd.DataFrame,
    target_column: str,
) -> None:
    """
    Validate the detected target column for classification.

    Raises:
        ValueError: If the target cannot be used for classification.
    """

    if target_column not in df.columns:
        raise ValueError(
            f"Target column '{target_column}' does not exist."
        )

    target = df[target_column]

    if target.isna().any():
        raise ValueError(
            "Target column contains missing values."
        )

    unique_values = target.nunique()

    if unique_values < 2:
        raise ValueError(
            "Target column must contain at least two unique classes."
        )

    if unique_values == len(df):
        raise ValueError(
            "Target column contains a unique value for every row. "
            "It does not appear to be a classification target."
        )