import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [SharedModule, AuthRoutingModule, FlexLayoutModule],
  declarations: [LoginComponent],
})
export class AuthModule {}
