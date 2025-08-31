from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# create the app
app = FastAPI(title="EventEase API")

# allow frontend (React at localhost:5173) to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],  # later, add prod URL too
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
