import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

import { UpdateDestinationComponent } from './update-destination/update-destination.component';


const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"destinations",component: DestinationsComponent},
  {path:"add",component: AddDestinationComponent},
  {path:"update/:id",component: UpdateDestinationComponent},
  {path:"details/:id", component:DetailsComponent},
  {path:"",component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
