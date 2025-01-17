import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, Feature, FeatureCollection } from './character.model';

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

  getFeaturesForCharacter(character: Character): Feature[] {
    let features: Feature[] = [];

    features = [...features, ...this.organizeFeatures(features).general];

    if (character.characterClass.toLowerCase() === 'fighter') {
      features = [...features, ...this.organizeFeatures(features).fighter];
    } else if (character.characterClass.toLowerCase() === 'wizard') {
      features = [...features, ...this.organizeFeatures(features).wizard];
    } else if (character.characterClass.toLowerCase() === 'rogue') {
      features = [...features, ...this.organizeFeatures(features).rogue];
    }

    return features.filter(feature => feature.featureLevel <= character.level);
  }
}