from typing import Any, Dict, List, Optional
from typing_extensions import TypedDict


class AgentState(TypedDict, total=False):
    dataset_path: str
    target_column: Optional[str]

    task_type: Optional[str]
    problem_description: Optional[str]

    dataset_info: Dict[str, Any]
    quality_report: Dict[str, Any]
    missing_report: Dict[str, Any]
    feature_report: Dict[str, Any]

    selected_models: List[str]
    training_results: Dict[str, Any]
    evaluation_results: Dict[str, Any]

    explainability: Dict[str, Any]
    insights: Dict[str, Any]
    business_summary: Dict[str, Any]
    final_report: Dict[str, Any]

    errors: List[str]
    status: str