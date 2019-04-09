import { ActionTypes } from './customer-validation.action';
import * as CustomerValidationActions from './customer-validation.action';

export interface CustomerValidationState {
    type: string;
    payload: any;
    send: boolean;
    waiting: boolean;
    cancelled: boolean;
    accepted: boolean;
    denied: boolean;
}

export const initialState: CustomerValidationState = {
    type: undefined,
    payload: {},
    send: false,
    waiting: false,
    cancelled: false,
    accepted: false,
    denied: false
};

export function reducer(state = initialState, action: CustomerValidationActions.ActionsUnion): CustomerValidationState {
    switch (action.type) {
        case ActionTypes.Open:
            return {
                send: true,
                waiting: true,
                cancelled: false,
                accepted: false,
                denied: false,
                type: ActionTypes.Open,
                payload: action.payload
            };

        case ActionTypes.Cancel:
            return {
                send: false,
                waiting: false,
                cancelled: true,
                accepted: false,
                denied: false,
                type: action.type,
                payload: action.payload
            };

        case ActionTypes.Accept:
            return {
                send: false,
                waiting: false,
                cancelled: false,
                accepted: true,
                denied: false,
                type: action.type,
                payload: action.payload
            };

        case ActionTypes.Refuse:
            return {
                send: false,
                waiting: false,
                cancelled: false,
                accepted: false,
                denied: true,
                type: action.type,
                payload: action.payload
            };

        default:
            return state;
    }
}
