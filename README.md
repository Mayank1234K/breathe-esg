# Breathe ESG Tech Assignment

A Django + React ESG emissions ingestion platform.

## Features

- SAP fuel data ingestion
- Utility electricity ingestion
- Travel emissions ingestion
- Normalization pipeline
- Analyst review dashboard
- Approval workflow
- Audit-ready source tracking

## Tech Stack

### Backend
- Django
- Django REST Framework
- PostgreSQL

### Frontend
- React
- TailwindCSS

## Setup

### Backend

cd backend

python -m venv venv

venv\\Scripts\\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

### Frontend

cd frontend

npm install

npm run dev