from fastapi import APIRouter

router = APIRouter()


@router.post("/login")
def login():
    return {"message": "Login endpoint - to be implemented"}


@router.post("/logout")
def logout():
    return {"message": "Logout endpoint - to be implemented"}