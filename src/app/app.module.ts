import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationComponent } from './destination/destination.component';
import { DetailsComponent } from './details/details.component';
import { UpdateDestinationComponent } from './update-destination/update-destination.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DestinationsComponent,
    AddDestinationComponent,
    DestinationComponent,
    DetailsComponent,
    UpdateDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
