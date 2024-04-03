import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private uri = 'http://localhost:8080/auth';
  constructor(private httpClient: HttpClient) {}

  async novo(userform) {
    return this.httpClient.post(`${this.uri}/register`, userform).toPromise();
  }
}
