import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/api/niveau_etude';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }

}
