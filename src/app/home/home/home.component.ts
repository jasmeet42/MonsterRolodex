import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  DEBOUNCE_TIME_IN_MILLIS = 1000;
  searchInput: string = '';
  debouncedSearchInput: string = '';
  users?: User[];
  getUsers$ = this.usersService.getUsers();
  hasError: boolean = false;
  searchInputSubject: Subject<string> = new Subject();
  lastindex: number;

  constructor(private usersService: UserService) {
   
  }

  ngOnInit(): void {
    this.getUsers$
      .subscribe({
        next: (response) => {
          this.users = response
          sessionStorage.setItem('users', JSON.stringify(this.users));
        },

        error: () => {
          this.hasError = true;
        }
      })

    this.searchInputSubject.pipe(debounceTime(this.DEBOUNCE_TIME_IN_MILLIS), distinctUntilChanged())
      .subscribe(searchText => this.updateCardList(searchText));

  }

  filterUserList(): void {
    this.searchInputSubject.next(this.searchInput);
  }

  updateCardList(searchText: string): void {
    this.debouncedSearchInput = searchText
  }

}
