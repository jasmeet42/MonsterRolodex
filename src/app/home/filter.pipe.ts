import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, filterString: string, property: string): User[] {
    if (users == null || !filterString) {
      return users;
    }
    let filteredUsers: User[] = [];
    for (let user of users) {
      if (user[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }

}
