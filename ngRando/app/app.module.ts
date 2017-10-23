import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { HikeModule } from "./hike/hike.modue";
import { HomeModule } from "./home/home.module";
import { HomeComponent } from "./home/home.component";
import { HikeListComponent } from "./hike/hike-list.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { HikeDetailsComponent } from "./hike/hike-details.component";
import { ContactUsComponent } from './contact/contact-us.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  imports:      [ BrowserModule, // importer des modules
                  HikeModule, 
                  HttpModule, 
                  HomeModule,
                  ContactModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent },
                    { path: 'hikes/:id', component: HikeDetailsComponent },
                    { path: 'contact', component: ContactUsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: PageNotFoundComponent}
                  ])                    
                ], 
  declarations: [ AppComponent, PageNotFoundComponent ],  // importer des components
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
