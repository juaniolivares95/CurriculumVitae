import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {ViewProjectComponent} from "./components/view-project/view-project.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  {
    path:"",
    redirectTo: "porfolio",
    pathMatch: 'full'
  },
  {
    path:"contactForm",
    component: ContactFormComponent,
  },
  {
    path:"project",
    component: ViewProjectComponent,
  },
  {
    path:"porfolio",
    component: PortfolioComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
