import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {CatchErrorInterceptor} from './interceptors/http-error.interceptor';

import {AppRoutingModule} from './app-routing.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {JwtInterceptor} from "@app/interceptors/jwt.interceptor";
import {LoaderInterceptor} from "@app/interceptors/loader.interceptor";
import {LoaderComponent} from "@app/loader/loader.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        LoaderComponent,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
