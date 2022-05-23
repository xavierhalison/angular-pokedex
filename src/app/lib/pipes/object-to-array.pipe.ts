import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(obj: any, ...args: unknown[]): any[] {
    const transformed = Object.entries(obj).map(([key, value]) => ({
      key,
      value,
    }));

    console.log(transformed);
    return transformed;
  }
}
