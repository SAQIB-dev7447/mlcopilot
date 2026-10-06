from typing import Dict

import pandas as pd

from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier

from app.services.preprocessing_service import build_preprocessor


def build_classification_models() -> Dict[str, object]:
    """
    Create the classification models used by the AutoML pipeline.

    Returns:
        Dictionary mapping model names to unfitted estimators.
    """

    return {
        "Logistic Regression": LogisticRegression(
            max_iter=1000,
            random_state=42,
        ),
        "Random Forest": RandomForestClassifier(
            n_estimators=100,
            random_state=42,
        ),
        "Decision Tree": DecisionTreeClassifier(
            random_state=42,
        ),
    }


def train_classification_models(
    X_train: pd.DataFrame,
    y_train: pd.Series,
) -> Dict[str, Pipeline]:
    """
    Train multiple classification models using automatic preprocessing.

    A separate preprocessing pipeline is created for each model so that
    preprocessing is fitted only on the training data.

    Args:
        X_train: Training feature data.
        y_train: Training target values.

    Returns:
        Dictionary containing fitted pipelines.
    """

    models = build_classification_models()
    trained_models = {}

    for model_name, model in models.items():
        preprocessor = build_preprocessor(X_train)

        pipeline = Pipeline(
            steps=[
                ("preprocessing", preprocessor),
                ("model", model),
            ]
        )

        pipeline.fit(X_train, y_train)

        trained_models[model_name] = pipeline

    return trained_models