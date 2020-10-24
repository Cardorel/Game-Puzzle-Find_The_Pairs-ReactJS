import {
  FETCH_IMAGE,
  GET_SIZE,
  QUANTITY_TRIED,
  SCORE,
  RESETQUANTITY,
  RESETSCORE,
  RESETTHEGAME
} from "../Types";


//Fetch Reducer
export const ImagesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

//Size Reducer
export const SizeReducer = (state = 6, action) => {
  switch (action.type) {
    case GET_SIZE:
      return action.payload;
    default:
      return state;
  }
};

//Quantity Reducer
export const QuantityTriedReducer = (state = 0, action) => {
  switch (action.type) {
    case QUANTITY_TRIED:
      return state + 1;
    case RESETQUANTITY:
      return 0;
    default:
      return state;
  }
};

//Score Reducer
export const ScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case SCORE:
      return state + 1;
    case RESETSCORE:
      return 0;
    default:
      return state;
  }
};

//Reset the game reducer
export const ResetTheGameReducer = (state = 0, action) => {
  switch (action.type) {
    case RESETTHEGAME:
      return action.payload;
    default:
      return state;
  }
};