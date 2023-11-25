import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
//import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'signup',component: SignupComponent },
  //{path:'user',component: UsersComponent },
  {path: 'reservation',component: ReservationComponent},
  {path: 'auth', component: AuthComponent },
  {path: '',redirectTo: '/home', pathMatch: 'full'}, //composant par défaut
  {path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
