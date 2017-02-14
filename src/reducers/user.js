import {
    USER_DEL, USER_EIDT
}
from './../constants/actionTypes';
import initialState from './initialState';
import reducersGenerate from './reducersGenerate';

const user = (state, payload, action) => {
    switch (action.type) {
        case ADD_USER:
            {
                state.push(payload.user);
                return state;
            }
        case DEL_USER:
            {
              return state.filter(item => item.id !== id);
            }
        default:
            return state;
    }
}

export default cart
