\# MLCopilot Backend



Agentic AutoML backend powered by FastAPI and LangGraph.



\## Architecture



The backend uses a multi-agent workflow:



Planning Agent

→ Dataset Agent

→ Quality Agent

→ Missing Value Agent

→ Feature Engineering Agent

→ Model Selection Agent

→ Training Agent

→ Evaluation Agent

→ Explainability Agent

→ Insight Agent

→ Business Agent

→ Report Agent



\## Backend Layers



\- `agents/` - Agentic ML workflow components

\- `orchestration/` - LangGraph workflow and shared state

\- `api/` - FastAPI routes

\- `services/` - ML business services

\- `ml/` - Trainers, evaluators and explainability

\- `models/` - Application models

\- `schemas/` - API schemas

\- `core/` - Configuration and infrastructure

\- `utils/` - Utility functions

\- `data/` - Demo and uploaded datasets

\- `reports/` - Generated reports

\- `saved\_models/` - Trained models



\## Workflow



The LangGraph orchestrator coordinates the specialized agents while the existing ML service layer performs the actual ML operations.

