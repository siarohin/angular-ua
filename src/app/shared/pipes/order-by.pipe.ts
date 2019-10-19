import { Pipe, PipeTransform } from "@angular/core";

import isNil from "lodash/isNil";

/**
 * OrderBy pipe for sorting {{Array<Object>}}
 */
@Pipe({
  name: "orderBy",
})
export class OrderByPipe implements PipeTransform {
  transform(arr: Array<any>, prop: string, reverse: boolean = false): Array<any> {
    if (isNil(arr)) {
      return;
    }

    const coeff = reverse ? -1 : 1;
    return arr.sort((a: any, b: any) => {
      const x = a[prop];
      const y = b[prop];

      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1 * coeff;
      } else {
        return 1 * coeff;
      }
    });
  }
}
