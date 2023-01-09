import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route:ActivatedRoute,private router:Router,private service:UserService){

  }
  user$!:Observable<any>;

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
    switchMap((params:ParamMap)=>this.service.getMonster(params.get('id')!)));
  }

  goBackToList(user:User) {
    const userId=user?user.id:null;
    this.router.navigate(['/home',{id:userId}]);
  }
}
