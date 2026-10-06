const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface PredictionData {
  [key: string]: any;
}

export interface TrainingParams {
  filepath: string;
  query: string;
  target_column: string;
  tune: boolean;
}

export interface CrossValidationParams {
  filepath: string;
  target_column: string;
  cv_type: string;
  n_splits: number;
}

export const api = {
  getLeaderboard: async (sortBy: string = "f1", ascending: boolean = false, limit: number = 50) => {
    const url = new URL(`${API_URL}/leaderboard`);
    url.searchParams.append("sort_by", sortBy);
    url.searchParams.append("ascending", String(ascending));
    url.searchParams.append("limit", String(limit));
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch leaderboard");
    return response.json();
  },

  evaluateModel: async (params: TrainingParams) => {
    const url = new URL(`${API_URL}/evaluate`);
    url.searchParams.append("filepath", params.filepath);
    url.searchParams.append("query", params.query);
    url.searchParams.append("target_column", params.target_column);
    url.searchParams.append("tune", String(params.tune));
    
    const response = await fetch(url.toString(), {
      method: "POST",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to start training");
    return response.json();
  },

  crossValidation: async (params: CrossValidationParams) => {
    const url = new URL(`${API_URL}/cross-validation`);
    url.searchParams.append("filepath", params.filepath);
    url.searchParams.append("target_column", params.target_column);
    url.searchParams.append("cv_type", params.cv_type);
    url.searchParams.append("n_splits", String(params.n_splits));

    const response = await fetch(url.toString(), {
      method: "POST",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to run cross validation");
    return response.json();
  },

  predict: async (data: PredictionData) => {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to make prediction");
    return response.json();
  },

  getOverview: async () => {
    // For dashboard overview. Currently we can aggregate from leaderboard.
    const lb = await api.getLeaderboard();
    return lb;
  }
};
