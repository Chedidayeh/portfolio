# 🌍 Air Quality Analysis & Prediction

A complete machine learning pipeline for analyzing and predicting air quality (AQI) in Indian cities using multiple modeling approaches: regression, classification, and LSTM time-series forecasting.

## 📋 Overview

This project implements an end-to-end data science workflow:

- **Data Processing**: Load, clean, and preprocess air quality data
- **Feature Engineering**: Extract temporal features and encode categorical variables
- **EDA**: Visualize data distributions and relationships
- **Modeling**: Train 3 regression models, 1 classifier, and 1 LSTM forecaster
- **Evaluation**: Compare models and generate forecasts

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip or conda

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Create environment:
```bash
# Using pip
pip install -r requirements.txt

# Or using conda
conda env create -f environment.yml
```


### Run Pipeline

```bash
python run_pipeline.py
```

This executes all 9 stages and generates:
- Cleaned datasets
- Trained models (in `models/`)

## 📊 Project Structure

```

├── src/
│   ├── data/         # Data loading & cleaning
│   ├── features/     # Feature engineering
│   ├── models/       # Model training & predictions
│   │   ├── train_model.py        # Regression
│   │   ├── predict_model.py      # Classification
│   │   └── time_series_model.py  # LSTM forecasting
│   └── visualization/  # EDA plots
├── models/           # Saved model artifacts
├── notebooks/        # Jupyter notebook
├── requirements.txt  # Python dependencies
└── run_pipeline.py   # Main execution script
```

## 🔄 Pipeline Stages

| Stage | Task | Output |
|-------|------|--------|
| 1 | Download dataset from Kaggle | Raw data |
| 2 | Clean data (handle missing values, outliers) | Cleaned data |
| 3 | Extract temporal & encoded features | Feature-rich data |
| 4 | Exploratory Data Analysis | Visualizations |
| 5 | Prepare features for modeling | Scaled train/test sets |
| 6A | Train regression models | Best model selected |
| 6B | Train classification model | Category predictions |
| 6C | Train LSTM forecaster | Time-series predictions |
| 7 | Compare all models | Results & metrics |
| 8 | Save models | Model artifacts |

## 🧠 Models Implemented

### Regression (Predict AQI values)
- Linear Regression
- Random Forest
- LightGBM

**Best model selected by R² Score**

### Classification (Predict AQI category)
- Random Forest Classifier
- Categories: Good → Moderate → Poor → Very Poor → Severe

### Time-Series (7-day forecast)
- LSTM Neural Network
- 30-day lookback window
- Generates multi-step forecasts

## 📈 Key Metrics

- **Regression**: R² Score, RMSE, MAE
- **Classification**: Accuracy, Precision, Recall, F1-Score
- **LSTM**: RMSE, MAE, R² Score

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| pandas, numpy | Data manipulation |
| scikit-learn | ML models & preprocessing |
| lightgbm, xgboost | Gradient boosting |
| tensorflow | LSTM & deep learning |
| matplotlib, seaborn | Visualization |
| kagglehub | Dataset download |
| category_encoders | Categorical encoding |

See `requirements.txt` for all versions.

## 📁 Output Files

After running the pipeline, you'll find:

**Models** (in `models/`):
- `best_regression_model.pkl`
- `aqi_classifier_model.pkl`
- `lstm_forecaster_*.h5`

**Visualizations** (in `reports/figures/`):
- AQI distribution
- Correlation matrix
- Feature importance
- Time series plots
- Confusion matrix
- Model comparisons




