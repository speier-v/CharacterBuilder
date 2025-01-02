import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feature, FeatureCollection } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = 'http://localhost:8090/features';

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<FeatureCollection> {
    return this.http.get<Feature[]>(this.apiUrl).pipe(
      map((features) => this.organizeFeatures(features))
    );
  }

  private organizeFeatures(features: Feature[]): FeatureCollection {
    return {
      general: features.filter((feature) => feature.associatedClass === 'General'),
      rogue: features.filter((feature) => feature.associatedClass === 'Rogue'),
      fighter: features.filter((feature) => feature.associatedClass === 'Fighter'),
      wizard: features.filter((feature) => feature.associatedClass === 'Wizard'),
    };
  }
}