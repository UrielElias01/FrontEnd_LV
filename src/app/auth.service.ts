import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Cambia en el servidor y local 
  //localmente:
  //private baseUrl= 'http://localhost:3000';
  //servidor aws:
  private baseUrl='https://52.91.44.152';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, { email, password });
  }
}
