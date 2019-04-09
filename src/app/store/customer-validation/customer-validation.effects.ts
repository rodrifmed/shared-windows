import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { fromEvent, EMPTY } from 'rxjs';
import { tap, filter, map, catchError } from 'rxjs/operators';
import { ActionTypes } from './customer-validation.action';

@Injectable()
export class CustomerValidationEffects {
    // change this to `dispatch: true` to sync state with actions
    @Effect({ dispatch: true })
    onChange = fromEvent<StorageEvent>(window, 'storage').pipe(
        filter(evt => evt.key === 'customerValidation'),
        filter(evt => evt.newValue !== null),
        map(evt => {
            const action = JSON.parse(evt.newValue);
            switch (action.type) {
                case ActionTypes.Open:
                    return { type: ActionTypes.Open, payload: action.payload };
                case ActionTypes.Cancel:
                    return { type: ActionTypes.Cancel, payload: action.payload };
                case ActionTypes.Accept:
                    return { type: ActionTypes.Accept, payload: action.payload };
                case ActionTypes.Refuse:
                    return { type: ActionTypes.Refuse, payload: action.payload };
                default:
                    return EMPTY;
            }
        }),
        catchError((err) => {
            console.log(err);
            return EMPTY;
        })
    );
}