import { v1 as uuidv1 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    items: [
        {id: uuidv1(), name: 'Eggs'},
        {id: uuidv1(), name: 'Milk'},
        {id: uuidv1(), name: 'Meat'},
        {id: uuidv1(), name: 'Wine'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default: 
            return state;
    }
}