import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { Company } from 'src/app/model/Company';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() lastUserId:number;
  constructor(private fb: FormBuilder, private userService: UserService, private router:Router) { }
  addForm: FormGroup =
    this.fb.group({
      name: [''],
      username: [''],
      email: ['', Validators.email],
      street: [''],
      suite: [''],
      city: [''],
      zipcode: [''],
      phone: [''],
      website: [''],
      company: ['']
    });

  // onSubmit(form: FormGroup) {
  //   let user = new User();
  //   user.name = form.name
  //   this.userService.addUser();
  // }
  onSubmit() {
    console.log("submit");
    const formValue = this.addForm.value;
    let user:User = new User();
    user.id = this.lastUserId+1;
    user.name=formValue.name;
    user.username=formValue.username;
    user.email=formValue.email;
    let address=new Address();
    address.street=formValue.street;
    address.suite=formValue.suite;
    address.city=formValue.city;
    address.zipcode=formValue.zipcode;
    user.address=address;
    user.phone=formValue.phone;
    let company = new Company();
    company.name = formValue.company;
    user.company= company;
    user.website=formValue.website;


    this.userService.addMonster(user).subscribe(addedUser=>{ 
      this.router.navigate(["home"],{state: {data: addedUser}});
    });
  }

}
