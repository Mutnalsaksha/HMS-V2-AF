import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { AdduserService} from "../../service/adduser.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: any = {
    Username: '',
    Usertype: '',
    MobileNumber: '',
    EmailAddress: '',
    Password: ''
  };
  formData: any = {};
  showSuccessMessage: boolean = false;

  constructor(private userService: AdduserService, private router: Router) {}



  onSubmit(form: NgForm) {
    this.userService.addUser(this.formData)
      .subscribe(
        response => {
          console.log(response);
          this.showSuccessMessage = true;
          form.resetForm();
          setTimeout(() => {
            this.showSuccessMessage = false; // hide success message after 3 seconds
            this.router.navigate(['/nav/user']); // navigate back to user page
          }, 3000); // hide success message after 3 seconds
        },
        error => console.error(error)
      );
  }
}
