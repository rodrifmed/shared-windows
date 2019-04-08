import { Component } from '@angular/core';
import { CustomerValidationState } from '../store/customer-validation/customer-validation.state';
import { Store, select } from '@ngrx/store';
import { Open, Cancel, Accept, Refuse } from '../store/customer-validation/customer-validation.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-customer',
    template: `
        <div>
            <h1>Customer Screen</h1>
        </div>
        <div *ngIf="customerValidation$ | async as customerValidation">
            <div *ngIf="customerValidation.send">
                <h1>Get POS is asking for your answer</h1>
                <button (click)="accept()" >Accpet</button>
                <button (click)="refuse()" >Refuse</button>
            </div>
            <div *ngIf="customerValidation.cancelled || customerValidation.accepted || customerValidation.denied">
                {{customerValidation.description}}
            </div>
        </div>
    `
})
export class CustomerComponent {

    customerValidation$: Observable<CustomerValidationState>;

    constructor(private store: Store<CustomerValidationState>) {
        this.customerValidation$ = store.pipe(select('customerValidation'));
    }

    accept() {
        this.store.dispatch(new Accept({ description: 'Customer accepted' }));
    }

    refuse() {
        this.store.dispatch(new Refuse({ description: 'Customer refused' }));
    }

}
