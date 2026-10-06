import pandas as pd

from sklearn.model_selection import train_test_split

from app.services.dataset_validation_service import (
    validate_target_column,
    validate_training_dataset,
)


COMMON_TARGET_NAMES = [
    "target",
    "label",
    "class",
    "outcome",
    "response",
    "y",
]


def detect_target_column(
    df: pd.DataFrame,
) -> tuple[str, str]:
    """
    Automatically detect the target column.

    Strategy:
        1. Look for common target column names.
        2. Otherwise use the last column as a fallback.

    Returns:
        Tuple containing:
            - target column name
            - detection method
    """

    if df.empty:
        raise ValueError("Dataset is empty.")

    normalized_columns = {
        str(column).strip().lower(): column
        for column in df.columns
    }

    for target_name in COMMON_TARGET_NAMES:
        if target_name in normalized_columns:
            return (
                normalized_columns[target_name],
                "common_target_name",
            )

    return (
        df.columns[-1],
        "last_column_fallback",
    )


def remove_constant_features(
    X: pd.DataFrame,
) -> pd.DataFrame:
    """
    Remove feature columns containing only one unique value.
    """

    constant_columns = [
        column
        for column in X.columns
        if X[column].nunique(dropna=False) <= 1
    ]

    if constant_columns:
        X = X.drop(columns=constant_columns)

    if X.shape[1] == 0:
        raise ValueError(
            "Dataset contains no usable feature columns after "
            "removing constant features."
        )

    return X


def prepare_training_data(
    file_path: str,
    test_size: float = 0.2,
    random_state: int = 42,
):
    """
    Load, validate, clean, and split a classification dataset.

    Preprocessing is fitted later on training data only.
    """

    df = pd.read_csv(file_path)

    validate_training_dataset(df)

    target_column, target_detection_method = detect_target_column(df)

    validate_target_column(
        df,
        target_column,
    )

    X = df.drop(columns=[target_column])
    X = remove_constant_features(X)

    y = df[target_column]

    stratify = None

    class_counts = y.value_counts()
    number_of_classes = len(class_counts)

    test_rows = int(len(df) * test_size)
    train_rows = len(df) - test_rows

    if (
        class_counts.min() >= 2
        and test_rows >= number_of_classes
        and train_rows >= number_of_classes
    ):
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
        "target_detection_method": target_detection_method,
        "training_features": X.columns.tolist(),
        "training_rows": len(X_train),
        "testing_rows": len(X_test),
        "X_train": X_train,
        "X_test": X_test,
        "y_train": y_train,
        "y_test": y_test,
    }