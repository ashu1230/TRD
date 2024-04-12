import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        PeopleListComponent,
        PersonEditComponent,
        // Add more components as needed
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, // Add the routing module
        // Add other modules as needed
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
