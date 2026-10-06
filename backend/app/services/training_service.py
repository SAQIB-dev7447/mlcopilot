from app.ml.evaluation.classification_evaluator import (
    evaluate_classification_models,
)
from app.ml.trainers.classification_trainer import (
    train_classification_models,
)
from app.services.training_data_service import (
    prepare_training_data,
)


def train_classification_pipeline(file_path: str) -> dict:
    """
    Run the complete automated classification pipeline.

    Steps:
        1. Load and prepare the dataset.
        2. Detect the target column.
        3. Split data into training and testing sets.
        4. Train multiple classification models.
        5. Evaluate all models.
        6. Select the best model automatically.

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
        "target_column": training_data["target_column"],
        "training_rows": len(training_data["X_train"]),
        "testing_rows": len(training_data["X_test"]),
        "models": evaluation["models"],
        "best_model": evaluation["best_model"],
        "best_metrics": evaluation["best_metrics"],
    }