import {GET_SIZE , FETCH_IMAGE , QUANTITY_TRIED,SCORE , RESETQUANTITY , RESETSCORE, RESETTHEGAME} from '../Types';


export const SizeAction = (size) => dispatch => (
    dispatch({
        type: GET_SIZE,
        payload: size
    })
)

//Get

export const ImageAction = (images) => dispatch => (
    dispatch({
        type: FETCH_IMAGE,
        payload: images
    })
)


//Quantity Action
export const QuantityTriedAction = () => dispatch => (
    dispatch({
        type: QUANTITY_TRIED,
    })
);

//Reset quantity
export const ResetQuantityTriedAction = () => dispatch => {
    dispatch({
        type: RESETQUANTITY,
    })
}

//Score Action
export const ScoreAction = () => dispatch => (
    dispatch({
        type: SCORE,
    })
);

//Reset action
export const ResetScoreAction = () => dispatch => {
    dispatch({
        type: RESETSCORE,
    })
}

//reset thee game action.
export const ResetTheGameAction = b => dispatch => {
    dispatch({
        type: RESETTHEGAME,
        payload: b
    })
}