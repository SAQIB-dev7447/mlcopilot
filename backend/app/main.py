from fastapi import FastAPI

from app.api.routes.dataset import router as dataset_router
from app.api.routes.training import router as training_router


app = FastAPI(
    title="MLCopilot Backend",
    description="Backend API for the MLCopilot AutoML platform.",
    version="0.1.0",
)


app.include_router(dataset_router)
app.include_router(training_router)


@app.get("/")
def root():
    return {
        "message": "MLCopilot backend is running",
        "version": "0.1.0",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }