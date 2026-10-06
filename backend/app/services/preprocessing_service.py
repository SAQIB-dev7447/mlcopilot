import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import (
    OneHotEncoder,
    StandardScaler,
)


HIGH_CARDINALITY_THRESHOLD = 0.50
MIN_CATEGORY_FREQUENCY = 10
MAX_CATEGORIES = 100


def build_preprocessor(
    df: pd.DataFrame,
) -> ColumnTransformer:
    """
    Build an automatic preprocessing pipeline.

    Numerical columns:
        - Missing values → median
        - Standard scaling

    Categorical columns:
        - Missing values → most frequent
        - Rare categories grouped
        - Maximum number of encoded categories limited
        - Sparse one-hot encoding

    Extremely high-cardinality categorical columns are excluded
    because they are commonly identifiers such as customer IDs,
    transaction IDs, emails, or other unique values.
    """

    numerical_columns = df.select_dtypes(
        include=["number"]
    ).columns.tolist()

    categorical_columns = df.select_dtypes(
        include=["object", "category", "bool"]
    ).columns.tolist()

    usable_categorical_columns = []

    for column in categorical_columns:
        unique_ratio = (
            df[column].nunique(dropna=True)
            / max(len(df), 1)
        )

        if unique_ratio < HIGH_CARDINALITY_THRESHOLD:
            usable_categorical_columns.append(column)

    numerical_pipeline = Pipeline(
        steps=[
            (
                "imputer",
                SimpleImputer(strategy="median"),
            ),
            (
                "scaler",
                StandardScaler(),
            ),
        ]
    )

    categorical_pipeline = Pipeline(
        steps=[
            (
                "imputer",
                SimpleImputer(strategy="most_frequent"),
            ),
            (
                "encoder",
                OneHotEncoder(
                    handle_unknown="ignore",
                    sparse_output=True,
                    min_frequency=MIN_CATEGORY_FREQUENCY,
                    max_categories=MAX_CATEGORIES,
                ),
            ),
        ]
    )

    transformers = []

    if numerical_columns:
        transformers.append(
            (
                "numerical",
                numerical_pipeline,
                numerical_columns,
            )
        )

    if usable_categorical_columns:
        transformers.append(
            (
                "categorical",
                categorical_pipeline,
                usable_categorical_columns,
            )
        )

    return ColumnTransformer(
        transformers=transformers,
        remainder="drop",
    )