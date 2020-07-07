import {ACTION_TYPES} from '../Actions/User'

const initialState={
    list:[]
}



export const user=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.CREATE:
            return{
                ...state,
                list:[...state.list,action.payload]
            }

            default:
                return state;
    }
}