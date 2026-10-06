from langgraph.graph import StateGraph, START, END

from app.orchestration.state import AgentState


def planning_agent(state: AgentState):
    return {
        "status": "planning",
        "problem_description": "Analyze dataset and determine ML workflow",
    }


def dataset_agent(state: AgentState):
    return {
        "status": "dataset_analysis",
        "dataset_info": {
            "path": state.get("dataset_path"),
            "loaded": True,
        },
    }


def quality_agent(state: AgentState):
    return {
        "status": "quality_check",
        "quality_report": {
            "checked": True,
            "duplicates_checked": True,
            "data_types_checked": True,
        },
    }


def missing_agent(state: AgentState):
    return {
        "status": "missing_value_analysis",
        "missing_report": {
            "checked": True,
        },
    }


def feature_agent(state: AgentState):
    return {
        "status": "feature_engineering",
        "feature_report": {
            "processed": True,
        },
    }


def model_selection_agent(state: AgentState):
    return {
        "status": "model_selection",
        "selected_models": [
            "LogisticRegression",
            "RandomForest",
            "GradientBoosting",
        ],
    }


def training_agent(state: AgentState):
    return {
        "status": "training",
        "training_results": {
            "trained": True,
        },
    }


def evaluation_agent(state: AgentState):
    return {
        "status": "evaluation",
        "evaluation_results": {
            "evaluated": True,
        },
    }


def explainability_agent(state: AgentState):
    return {
        "status": "explainability",
        "explainability": {
            "generated": True,
        },
    }


def insight_agent(state: AgentState):
    return {
        "status": "insights",
        "insights": {
            "generated": True,
        },
    }


def business_agent(state: AgentState):
    return {
        "status": "business_analysis",
        "business_summary": {
            "generated": True,
        },
    }


def report_agent(state: AgentState):
    return {
        "status": "completed",
        "final_report": {
            "generated": True,
        },
    }


def build_ml_graph():

    graph = StateGraph(AgentState)

    graph.add_node("planning", planning_agent)
    graph.add_node("dataset", dataset_agent)
    graph.add_node("quality", quality_agent)
    graph.add_node("missing", missing_agent)
    graph.add_node("feature", feature_agent)
    graph.add_node("model_selection", model_selection_agent)
    graph.add_node("training", training_agent)
    graph.add_node("evaluation", evaluation_agent)
    graph.add_node("explainability", explainability_agent)
    graph.add_node("insight", insight_agent)
    graph.add_node("business", business_agent)
    graph.add_node("report", report_agent)

    graph.add_edge(START, "planning")
    graph.add_edge("planning", "dataset")
    graph.add_edge("dataset", "quality")
    graph.add_edge("quality", "missing")
    graph.add_edge("missing", "feature")
    graph.add_edge("feature", "model_selection")
    graph.add_edge("model_selection", "training")
    graph.add_edge("training", "evaluation")
    graph.add_edge("evaluation", "explainability")
    graph.add_edge("explainability", "insight")
    graph.add_edge("insight", "business")
    graph.add_edge("business", "report")
    graph.add_edge("report", END)

    return graph.compile()


ml_graph = build_ml_graph()