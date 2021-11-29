import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './core/add-project/add-project.component';
import { HomeComponent } from './core/home/home.component';
import { MyProjectsComponent } from './core/my-projects/my-projects.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'add_project',component:AddProjectComponent},{
  path:'my_projects',component:MyProjectsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
