import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';

import * as customerValidation from '../store/customer-validation/customer-validation.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
    customerValidation: customerValidation.CustomerValidationState;
}

export const reducers: ActionReducerMap<State> = {
    customerValidation: customerValidation.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['customerValidation'] })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export { customerValidation };
