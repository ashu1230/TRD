import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PeopleService {
    private apiUrl = 'https://api.example.com/people'; // Replace with the actual REST API URL

    constructor(private http: HttpClient) {}

    getPeople(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getPerson(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    updatePerson(id: number, personData: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, personData);
    }

    deletePerson(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
