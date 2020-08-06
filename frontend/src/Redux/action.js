import { SET_EVENT, } from './types';

export const setEvent = (event) => {
    return {
        type: SET_EVENT,
        event
    }
}
