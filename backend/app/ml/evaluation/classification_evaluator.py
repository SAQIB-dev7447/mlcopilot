from typing import Dict, Any

import pandas as pd

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
)


def evaluate_classification_models(
    trained_models: Dict[str, Any],
    X_test: pd.DataFrame,
    y_test: pd.Series,
) -> Dict[str, Any]:
    """
    Evaluate all trained classification models.

    Metrics:
        - Accuracy
        - Precision
        - Recall
        - F1 score

    The best model is selected using the highest F1 score.

    Args:
        trained_models: Dictionary of fitted model pipelines.
        X_test: Test feature data.
        y_test: Test target values.

    Returns:
        Dictionary containing metrics for every model and
        the automatically selected best model.
    """

    results = {}

    for model_name, model in trained_models.items():
        predictions = model.predict(X_test)

        results[model_name] = {
            "accuracy": round(
                accuracy_score(y_test, predictions),
                4,
            ),
            "precision": round(
                precision_score(
                    y_test,
                    predictions,
                    average="weighted",
                    zero_division=0,
                ),
                4,
            ),
            "recall": round(
                recall_score(
                    y_test,
                    predictions,
                    average="weighted",
                    zero_division=0,
                ),
                4,
            ),
            "f1": round(
                f1_score(
                    y_test,
                    predictions,
                    average="weighted",
                    zero_division=0,
                ),
                4,
            ),
        }

    if not results:
        raise ValueError("No trained models were provided for evaluation.")

    best_model_name = max(
        results,
        key=lambda model_name: results[model_name]["f1"],
    )

    return {
        "models": results,
        "best_model": best_model_name,
        "best_metrics": results[best_model_name],
    }