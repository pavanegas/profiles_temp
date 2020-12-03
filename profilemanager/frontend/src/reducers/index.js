import { combineReducers } from 'redux';
import profiles from './profiles';
import errors from './errors';
import messages from "./messages"
import auth from "./auth"
import cards from './cards'
import details from './details'

export default combineReducers({
    details,
    cards,
    profiles,
    errors,
    messages,
    auth
});