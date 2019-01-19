import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ConfigService {
  constructor(private http: HttpClient) { }

  getConfig():Observable<any> {
    //return this.http.get("");
    //console.log("teststestete");
    return this.http.get("http://localhost:8080/api/v1/new");
  }
}
