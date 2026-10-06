import pandas as pd


def analyze_dataset(file_path: str) -> dict:
    """
    Analyze a CSV dataset and return a structured summary.

    Args:
        file_path: Path to the CSV file.

    Returns:
        Dictionary containing dataset statistics and column information.
    """

    df = pd.read_csv(file_path)

    numerical_columns = df.select_dtypes(
        include=["number"]
    ).columns.tolist()

    categorical_columns = df.select_dtypes(
        include=["object", "category", "bool"]
    ).columns.tolist()

    column_details = []

    for column in df.columns:
        column_details.append(
            {
                "name": column,
                "dtype": str(df[column].dtype),
                "missing_values": int(df[column].isna().sum()),
            }
        )

    return {
        "rows": int(df.shape[0]),
        "columns": int(df.shape[1]),
        "column_names": df.columns.tolist(),
        "numerical_columns": numerical_columns,
        "categorical_columns": categorical_columns,
        "column_details": column_details,
    }