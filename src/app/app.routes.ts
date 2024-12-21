import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ContratarComponent } from './components/contratar/contratar.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contratar",
    component: ContratarComponent
  }
]
