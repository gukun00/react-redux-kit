import cFetch from './../utils/cFetch';
import {
    MENU
}
from './../constants/actionTypes';
import {
    API_CONFIG
}
from './../config/api';

export const fetchMenus = (creds, cbk) => {
    return {
        type: MENU,
        fallback: cbk,
        payload: cFetch(API_CONFIG.menus, {
            method: "GET"
        })
    }
}
