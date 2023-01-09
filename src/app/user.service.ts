import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    let users: User[] = JSON.parse(sessionStorage.getItem('users')!);
    if (users != null) {
      return of(users);
    }
    return this.httpClient.get<User[]>(this.url);
  }

  getMonster(id: string | null) {
    console.log(id);
    let users: User[] = JSON.parse(sessionStorage.getItem('users')!);
    for(let user of users) {
      if(user.id+"" === id) {
        console.log(user.id);
        return of(user);
      }
    }
    return this.httpClient.get(this.url + "/" + id);
  }

  addMonster(user: User): Observable<User> {
    let users: User[] = JSON.parse(sessionStorage.getItem('users')!);

    user.id = users.length+1;
    users.push(user);
    sessionStorage.setItem('users', JSON.stringify(users));
    return of(user);
  }
}
