import { Pipe, PipeTransform } from "@angular/core";
import assign from "lodash/assign";

import { RESERVED_NAMES } from "../../core/index";

/**
 * Filter reserved names pipe
 */
@Pipe({
  name: "filterByName",
})
export class FilterByNamePipe implements PipeTransform {
  transform(obj: { [key: string]: any }): { [key: string]: any } {
    let filteredObj: { [key: string]: any } = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !RESERVED_NAMES.includes(key)) {
        filteredObj = assign({}, filteredObj, { [key]: obj[key] });
      }
    }
    return filteredObj;
  }
}
