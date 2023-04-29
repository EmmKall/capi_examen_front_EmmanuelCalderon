import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:8000/api/';

  constructor( private http: HttpClient )
  { }

  getAll(): Observable<any>
  {
    return this.http.get( `${this.url}users` );
  }

}
