import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Open, Cancel } from '../store/customer-validation/customer-validation.action';
import { Observable } from 'rxjs';
import { CustomerValidationState } from '../store/customer-validation/customer-validation.reducer';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-pos',
    template: `
        <div>
            <h1>Get the customer answer</h1>
            <button (click)="open()" >Validate</button>
            <div *ngIf="customerValidation$ | async as customerValidation">
                Current state: {{customerValidation.payload.description}}

                <div *ngIf="customerValidation.waiting">
                    <button (click)="cancel()">Cancel</button>
                </div>

            </div>
        </div>
    `
})
export class PosComponent {

    customerValidation$: Observable<CustomerValidationState>;

    constructor(private store: Store<CustomerValidationState>) {
        this.customerValidation$ = store.pipe(select('customerValidation'),tap(console.log));
    }

    open() {
        this.store.dispatch(new Open({ description: 'Waiting' }));
    }

    cancel() {
        this.store.dispatch(new Cancel({ description: 'Cancelled by POS' }));
    }

}
