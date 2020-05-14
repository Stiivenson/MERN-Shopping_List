import { v1 as uuidv1 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

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
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM: 
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default: 
            return state;
    }
}