import {createSelector} from 'reselect'

const puzzleSelector = state => state.Img;   //Reselect for Fetching Images
const sizeSelector = state => state.size;    //For getting the size select by player
const QuantityTriedSelector = state => state.Tried;   //For getting the quantity all times
const ScoreSelector = state => state.Score;    //for getting the size;
const ResetGameSelector = state => state.resetGame;


                    ///created the selectors
export const ImgSelectorCreated = createSelector([puzzleSelector] , i => i);   
export const SizeSelectorCreated = createSelector([sizeSelector] , s => s );
export const QuantityTriedCreated = createSelector([QuantityTriedSelector] , q => q);
export const ScoreCreated = createSelector([ScoreSelector] , s => s);
export const ResetGameCreated = createSelector([ResetGameSelector] , r => r);
