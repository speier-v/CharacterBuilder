import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKey',
  standalone: true
})
export class FilterKeyPipe implements PipeTransform {

  transform(obj: Record<string, any>, keysToExclude: string[]): Record<string, any> {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keysToExclude.includes(key))
    );
  }
}
