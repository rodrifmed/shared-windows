import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Open, Cancel, Accept, Refuse } from '../store/customer-validation/customer-validation.action';
import { Observable } from 'rxjs';
import { CustomerValidationState } from '../store/customer-validation/customer-validation.reducer';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-customer',
    template: `
        <div>
            <h1>Customer Screen</h1>
        </div>
        <div *ngIf="customerValidation$ | async as customerValidation">
            <div *ngIf="customerValidation.send">
                <h1>Get POS is asking for your answer</h1>
                <button (click)="accept()" >Accept</button>
                <button (click)="refuse()" >Refuse</button>
            </div>
            <div *ngIf="customerValidation.cancelled || customerValidation.accepted || customerValidation.denied">
                {{customerValidation.payload.description}}
            </div>
        </div>
    `
})
export class CustomerComponent {

    customerValidation$: Observable<CustomerValidationState>;

    constructor(private store: Store<CustomerValidationState>) {
        this.customerValidation$ = store.pipe(select('customerValidation'),tap(console.log));
    }

    accept() {
        this.store.dispatch(new Accept({ description: 'Customer accepted' }));
    }

    refuse() {
        this.store.dispatch(new Refuse({ description: 'Customer refused' }));
    }

}
