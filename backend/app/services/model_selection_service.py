from typing import Any, Dict


def select_best_classification_model(
    model_results: Dict[str, Dict[str, float]],
) -> Dict[str, Any]:
    """
    Automatically select the best classification model.

    Selection priority:
        1. Highest F1 score
        2. Highest recall if F1 scores are tied
        3. Highest accuracy if F1 and recall are tied

    Args:
        model_results:
            Evaluation metrics for each trained model.

    Returns:
        Dictionary containing the selected model and its metrics.
    """

    if not model_results:
        raise ValueError("No model results were provided.")

    best_model_name = max(
        model_results,
        key=lambda model_name: (
            model_results[model_name]["f1"],
            model_results[model_name]["recall"],
            model_results[model_name]["accuracy"],
        ),
    )

    return {
        "best_model": best_model_name,
        "best_metrics": model_results[best_model_name],
    }