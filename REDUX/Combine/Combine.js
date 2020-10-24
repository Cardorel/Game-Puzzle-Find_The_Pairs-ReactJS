import {combineReducers} from 'redux'
import {ImagesReducer, QuantityTriedReducer, ResetTheGameReducer, ScoreReducer, SizeReducer} from '../Reducer/Reducer'

export var Reducers = combineReducers({
    Img : ImagesReducer,
    size : SizeReducer,
    Tried : QuantityTriedReducer,
    Score: ScoreReducer,
    resetGame : ResetTheGameReducer,
})

