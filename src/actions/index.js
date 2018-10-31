import { TO_HISTORY } from '../constants/action-types';

export const toHistory = (conditions) => (
    {
        type: TO_HISTORY,
        payload: conditions
    }
)