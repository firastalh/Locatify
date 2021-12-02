import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { SidebarItemComponent } from './materials/sidebar-item/sidebar-item.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AddProjectComponent } from './core/add-project/add-project.component';
import { UserCardComponent } from './materials/user-card/user-card.component';
import { NewsCardComponent } from './materials/news-card/news-card.component';
import { MyProjectsComponent } from './core/my-projects/my-projects.component';
import { PaginationActionDirective } from './directives/pagination-action.directive';
import {HttpClientModule}from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProjectUserCardComponent } from './materials/add-project-user-card/add-project-user-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    NavbarComponent,
    HomeComponent,
    AddProjectComponent,
    UserCardComponent,
    NewsCardComponent,
    MyProjectsComponent,
    PaginationActionDirective,
    AddProjectUserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
