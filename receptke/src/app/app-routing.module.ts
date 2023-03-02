import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReceptekComponent } from './receptek/receptek.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'receptek', component: ReceptekComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'receptek', pathMatch: 'full' },
  { path: '**', redirectTo: 'receptek', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
