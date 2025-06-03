from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def read_users():
    return {"message": "Users endpoint - to be implemented"}


@router.get("/me")
def read_user_me():
    return {"message": "Current user endpoint - to be implemented"}