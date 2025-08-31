from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# load environment variables from .env file
load_dotenv()
ALLOWED = os.getenv("ALLOWED_ORIGINS")
origins = [o.strip() for o in ALLOWED.split(",")]

# create the app
app = FastAPI(title="EventEase API")

# allow frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# simple health route to check server
@app.get("/api/health")
def health():
    return {"status": "ok"}

# just a root endpoint (optional)
@app.get("/")
def root():
    return {"message": "Welcome to EventEase API"}
