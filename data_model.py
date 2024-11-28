from pydantic import BaseModel

class DataModel(BaseModel):
    quarter: int
    down: int
    yardsToGo: int
    gameClock: float
    preSnapHomeScore: int
    preSnapVisitorScore: int
    isDropback: int
    pff_runPassOption: int
    OF_EMPTY: int
    OF_I_FORM: int
    OF_JUMBO: int
    OF_PISTOL: int
    OF_SHOTGUN: int
    OF_SINGLEBACK: int
    OF_WILDCAT: int
