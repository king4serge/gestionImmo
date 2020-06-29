import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Bien } from '../common/bien';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private baseUrl = "http://localhost:8080/biens";

  constructor(private httpClient: HttpClient) { }

  getBiens(): Observable<Bien[]>{
    return this.httpClient.get<GetResponseBiens>(this.baseUrl).pipe(
      map(response => response._embedded.biens)
    );
  }
}

interface GetResponseBiens{
  _embedded: {
    biens: Bien[];
  }
}
