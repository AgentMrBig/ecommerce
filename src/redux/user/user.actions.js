import { UserActionTypes } from './user.types';

const setCurrentUSer = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUSer;