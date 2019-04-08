import { ActionTypes } from './customer-validation.action';
import { CustomerValidationState, initializeCustomerValidationState } from './customer-validation.state';
import * as CustomerValidationActions from './customer-validation.action';

export const initialState: CustomerValidationState = initializeCustomerValidationState();

export function customerValidationReducer(state = initialState, action: CustomerValidationActions.ActionsUnion) {
    switch (action.type) {
        case ActionTypes.Open:
            return { ...initialState, send: true, waiting: true };

        case ActionTypes.Cancel:
            return { ...initialState, cancelled: true };

        case ActionTypes.Accept:
            return { ...initialState, accepted: true };

        case ActionTypes.Refuse:
            return { ...initialState, denied: true };

        default:
            return state;
    }
}
