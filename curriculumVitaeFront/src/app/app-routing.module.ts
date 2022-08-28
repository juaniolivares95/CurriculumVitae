import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HomeComponent} from "./components/home/home.component";
import {ListProjectsComponent} from "./components/list-projects/list-projects.component";
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {SkillsComponent} from "./components/skills/skills.component";


const routes: Routes = [
  {
    path:"",
    redirectTo: "porfolio",
    pathMatch: 'full'
  },
  {
    path:"aboutMe",
    component: AboutMeComponent
  },
  {
    path:"contactForm",
    component: ContactFormComponent
  },
  {
    path:"education",
    component: EducationComponent
  },
  {
    path:"experience",
    component: ExperienceComponent
  },
  {
    path:"footer",
    component: FooterComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"listProjects",
    component: ListProjectsComponent
  },
  {
    path:"mainNav",
    component: MainNavComponent
  },
  {
    path:"porfolio",
    component: PortfolioComponent
  },
  {
    path:"skills",
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutMeComponent, ContactFormComponent, EducationComponent, ExperienceComponent, FooterComponent, HomeComponent, ListProjectsComponent, MainNavComponent, PortfolioComponent, SkillsComponent]

