# EventEase Backend (FastAPI)

## Prereqs
- Python 3.10–3.12

## Setup (Windows PowerShell)
```powershell
py -m venv .venv
. .\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
