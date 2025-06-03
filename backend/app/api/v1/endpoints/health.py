from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def health_check():
    return {"status": "healthy", "service": "ZagrosCMS API"}


@router.get("/db")
def database_health():
    return {"status": "healthy", "database": "postgresql"}