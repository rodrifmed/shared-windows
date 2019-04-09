import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { } from './store/customer-validation/customer-validation.reducer';
import { CustomerComponent } from './components/customer.component';
import { PosComponent } from './components/pos.component';

import { EffectsModule } from '@ngrx/effects';
import { CustomerValidationEffects } from './store/customer-validation/customer-validation.effects';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    PosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CustomerValidationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
