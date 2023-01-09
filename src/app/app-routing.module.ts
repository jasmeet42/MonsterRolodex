import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail/detail.component';
import { AddComponent } from './home/add/add.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    loadChildren:()=>import('./detail/detail.module').then(m=>m.DetailModule)
  },
  
  { path: '', pathMatch: 'full', redirectTo: 'home' }
  // {
  //   path:'add',
  //   //component:
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
