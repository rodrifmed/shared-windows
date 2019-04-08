import { Component } from '@angular/core';
import { CustomerValidationState } from '../store/customer-validation/customer-validation.state';
import { Store, select } from '@ngrx/store';
import { Open, Cancel } from '../store/customer-validation/customer-validation.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pos',
    template: `
        <div>
            <h1>Get the customer answer</h1>
            <button (click)="open()" >Validate</button>
            <div *ngIf="customerValidation$ | async as customerValidation">
                Current state: {{customerValidation.description}}

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
        this.customerValidation$ = store.pipe(select('customerValidation'));
    }

    open() {
        this.store.dispatch(new Open({ description: 'Waiting' }));
    }

    cancel() {
        this.store.dispatch(new Cancel({ description: 'Cancelled by POS' }));
    }

}
