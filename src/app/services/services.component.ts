import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services1/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
   servicesservice: any[] = [];
  constructor(private servicesService: ServiceService) { }
  ngOnInit(): void {
    this.servicesService.getservice().subscribe((data: any) => {
      this.servicesservice = data;
      console.log(data);

    });
  }

}




