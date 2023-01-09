import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private router:Router){}
  url:string
  @Input() userInfo:User

  viewDetails() {
    this.router.navigate(["details",this.userInfo.id]);
  }

}
