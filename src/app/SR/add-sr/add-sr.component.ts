import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { AddSrService} from "../services/add-sr.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-sr',
  templateUrl: './add-sr.component.html',
  styleUrls: ['./add-sr.component.css']
})
export class AddSrComponent {
  formData: any = {};
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private addSrService: AddSrService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.addSrService.addService(this.formData)
      .subscribe(
        response => {
          console.log(response);
          this.showSuccessMessage = true;
          form.resetForm();
          setTimeout(() => {
            this.showSuccessMessage = false; // hide success message after 3 seconds
            this.router.navigate(['/nav/bookingmanagment']); // navigate back to user page
          }, 3000); // hide success message after 3 seconds
        },
      );
  }
}
