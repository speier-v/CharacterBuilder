import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private environment: any;

  constructor(private http: HttpClient) {
  }

  loadEnv(): Observable<unknown> {
    return this.http.get('assets/environment.json');
  }

  get(key: string): any {
    return this.environment ? this.environment[key] : null;
  }

  setEnv(environment: any): void {
    this.environment = environment;
  }
}