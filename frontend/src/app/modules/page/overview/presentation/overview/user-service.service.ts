import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }

  public findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  public save(user: Users) {
    return this.http.post<Users>(this.usersUrl, user);
  }
}
