# ZagrosCMS

A modern headless Content Management System built with FastAPI (backend) and Next.js (frontend).

## Features

- 🚀 **High Performance**: Built with FastAPI for lightning-fast API responses
- 🎨 **Modern UI**: React-based admin interface with Next.js and TypeScript
- 🗄️ **PostgreSQL**: Robust database with JSON support for flexible schemas
- 🔐 **Authentication**: JWT-based authentication with role-based access control
- 📱 **Responsive**: Mobile-first admin interface design
- 🐳 **Docker Ready**: Complete containerization for easy deployment

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+
- Docker (optional)

### Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd ZagrosCMS
```

2. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start database with Docker**
```bash
docker-compose up -d postgres redis
```

4. **Backend Setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

5. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Project Structure

```
ZagrosCMS/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Core functionality
│   │   ├── models/         # Database models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── main.py         # FastAPI application
│   └── requirements.txt
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # App router pages
│   │   └── components/     # React components
│   └── package.json
├── docker-compose.yml      # Development services
└── README.md
```

## Development

### Backend Development
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Running Tests
```bash
# Backend tests
cd backend && pytest

# Frontend tests
cd frontend && npm test
```

## Deployment

### Using Docker
```bash
docker-compose up --build
```

### Manual Deployment
See individual README files in `backend/` and `frontend/` directories.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.