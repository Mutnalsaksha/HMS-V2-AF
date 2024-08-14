// frontend/src/app/data/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from "../../environment/environment"


@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getservice() {
    return this.http.get(`${environment.apiUrl}/api/service`);



    // return this.http.get(`${environment.apiUrl}/getbookedservice/data`);
  }


}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor() { }
// }
