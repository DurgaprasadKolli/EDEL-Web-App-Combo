import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "@app/home/home.component";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [HomeComponent, CreateNewOrderComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatBadgeModule,
        MatCardModule
    ]
})
export class HomeModule { }
