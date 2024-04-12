import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/people-list', pathMatch: 'full' },
    { path: 'people-list', component: PeopleListComponent },
    { path: 'edit-person/:id', component: PersonEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
