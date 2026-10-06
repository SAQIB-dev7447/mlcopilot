import pandas as pd

from sklearn.model_selection import train_test_split


COMMON_TARGET_NAMES = [
    "target",
    "label",
    "class",
    "outcome",
    "response",
    "y",
]


def detect_target_column(df: pd.DataFrame) -> str:
    """
    Automatically detect the target column.

    Strategy:
    1. Look for common target column names.
    2. If none are found, use the last column.

    Args:
        df: Input dataset.

    Returns:
        Name of the detected target column.
    """

    if df.empty:
        raise ValueError("Dataset is empty.")

    normalized_columns = {
        str(column).strip().lower(): column
        for column in df.columns
    }

    for target_name in COMMON_TARGET_NAMES:
        if target_name in normalized_columns:
            return normalized_columns[target_name]

    return df.columns[-1]


def prepare_training_data(
    file_path: str,
    test_size: float = 0.2,
    random_state: int = 42,
):
    """
    Load a dataset, detect its target column, and split it into
    training and testing data.

    Args:
        file_path: Path to the CSV dataset.
        test_size: Fraction of data reserved for testing.
        random_state: Seed for reproducible splitting.

    Returns:
        Dictionary containing:
            - target_column
            - X_train
            - X_test
            - y_train
            - y_test
    """

    df = pd.read_csv(file_path)

    if df.empty:
        raise ValueError("Dataset is empty.")

    target_column = detect_target_column(df)

    X = df.drop(columns=[target_column])
    y = df[target_column]

    if y.isna().any():
        raise ValueError(
            "Target column contains missing values. "
            "Please clean the target column before training."
        )

    if y.nunique() < 2:
        raise ValueError(
            "Target column must contain at least two unique values."
        )

    stratify = None

    # Stratification is useful for classification datasets,
    # but it cannot be used when a class has fewer than two samples.
    value_counts = y.value_counts()

    if value_counts.min() >= 2:
        stratify = y

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=test_size,
        random_state=random_state,
        stratify=stratify,
    )

    return {
        "target_column": target_column,
        "X_train": X_train,
        "X_test": X_test,
        "y_train": y_train,
        "y_test": y_test,
    }