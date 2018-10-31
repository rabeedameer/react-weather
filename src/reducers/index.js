import { TO_HISTORY } from '../constants/action-types';

const initialState = {
    history: [],
    current: {}

}



const appReducer = (state = initialState, action)=>{
    switch(action.type){
        case TO_HISTORY:
        return {...state, history: [...state.history, action.payload]};
        default:
        return state;
    }
};

export default appReducer;