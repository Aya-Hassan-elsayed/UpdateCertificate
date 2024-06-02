import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';
import { UpdateLaraComponent } from './compontent/update-lara/update-lara.component';
import { UpdateEslam1Component } from './compontent/update-eslam1/update-eslam1.component';
import { UpdateEslam2Component } from './compontent/update-eslam2/update-eslam2.component';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { IslamComponent } from './compontent/islam/islam.component';
import {  canActivateGuard } from './guards/auth.guard';
import { GetAllUpdateComponent } from './compontent/get-all-update/get-all-update.component';
import { HeaderComponent } from './compontent/header/header.component';



const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [canActivateGuard]},
  {path:'UpdateKamel',component:UpdateKamelComponent, canActivate: [canActivateGuard] },
  {path:'UpdateLara',component:UpdateLaraComponent, canActivate: [canActivateGuard] },
  {path:'islam',component:IslamComponent, canActivate: [canActivateGuard] },
  {path:'UpdateE1',component:UpdateEslam1Component, canActivate: [canActivateGuard] },
  {path:'UpdateE2',component:UpdateEslam2Component, canActivate: [canActivateGuard] },
  {path:'AllUpdate',component:GetAllUpdateComponent, canActivate: [canActivateGuard]},
  { path: '', redirectTo: '', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
