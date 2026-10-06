from app.ml.evaluation.classification_evaluator import (
    evaluate_classification_models,
)
from app.ml.trainers.classification_trainer import (
    train_classification_models,
)
from app.services.training_data_service import (
    prepare_training_data,
)


def train_classification_pipeline(
    file_path: str,
) -> dict:
    """
    Run the complete automated classification pipeline.

    Steps:
        1. Load and validate the dataset.
        2. Detect the target column.
        3. Remove unusable constant features.
        4. Split data into training and testing sets.
        5. Train multiple classification models.
        6. Evaluate all models.
        7. Select the best model automatically.

    Args:
        file_path: Path to the CSV dataset.

    Returns:
        Structured training and evaluation results.
    """

    training_data = prepare_training_data(file_path)

    trained_models = train_classification_models(
        X_train=training_data["X_train"],
        y_train=training_data["y_train"],
    )

    evaluation = evaluate_classification_models(
        trained_models=trained_models,
        X_test=training_data["X_test"],
        y_test=training_data["y_test"],
    )

    return {
        "task": "classification",
        "target_column": training_data["target_column"],
        "target_detection_method": training_data[
            "target_detection_method"
        ],
        "features_used": training_data["training_features"],
        "training_rows": training_data["training_rows"],
        "testing_rows": training_data["testing_rows"],
        "models_evaluated": list(
            evaluation["models"].keys()
        ),
        "models": evaluation["models"],
        "best_model": evaluation["best_model"],
        "best_metrics": evaluation["best_metrics"],
    }