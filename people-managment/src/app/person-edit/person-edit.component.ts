import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
    person: any;
    id!: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private peopleService: PeopleService
    ) {}

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.fetchPerson();
    }

    fetchPerson(): void {
        this.peopleService.getPerson(this.id).subscribe((data) => {
            this.person = data;
        });
    }

    updatePerson(): void {
        this.peopleService.updatePerson(this.id, this.person).subscribe(() => {
            this.router.navigate(['/people-list']);
        });
    }
}
