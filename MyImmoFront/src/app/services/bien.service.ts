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

  getBiens(theCategorieId: number): Observable<Bien[]>{
    const searchUrl = `${this.baseUrl}/search/categorieId?id=${theCategorieId}`;
    return this.httpClient.get<GetResponseBiens>(searchUrl).pipe(
      map(response => response._embedded.biens)
    );
  }
}

interface GetResponseBiens{
  _embedded: {
    biens: Bien[];
  }
}