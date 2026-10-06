from typing import Any, Dict

import pandas as pd

from sklearn.metrics import (
    accuracy_score,
    f1_score,
    precision_score,
    recall_score,
)

from app.services.model_selection_service import (
    select_best_classification_model,
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

    Args:
        trained_models:
            Dictionary of fitted classification pipelines.

        X_test:
            Test feature data.

        y_test:
            Test target values.

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
        raise ValueError(
            "No trained models were provided for evaluation."
        )

    selection = select_best_classification_model(results)

    return {
        "models": results,
        "best_model": selection["best_model"],
        "best_metrics": selection["best_metrics"],
    }