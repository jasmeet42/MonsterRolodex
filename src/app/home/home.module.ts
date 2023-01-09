import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { LowercasePipe } from './lowercase.pipe';
import { AddComponent } from './add/add.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    FilterPipe,
    LowercasePipe,
    AddComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
