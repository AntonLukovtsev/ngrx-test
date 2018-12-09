import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`api/users`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  addUser(user): Observable<User> {
    return this.http
      .post<User>(`api/user`, user)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removeUser(userId): Observable<any> {
    return this.http
      .delete(`api/user/${userId}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
