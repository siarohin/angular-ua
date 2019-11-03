import { Pipe, PipeTransform } from "@angular/core";
import isNil from "lodash/isNil";

import { MAP_NAMES } from "../../core/index";

/**
 * Changing name pipe
 */
@Pipe({
  name: "mapByName",
})
export class MapByNamePipe implements PipeTransform {
  transform(value: string): string {
    const shoudChangeName: boolean = !isNil(MAP_NAMES[value]);
    return shoudChangeName ? MAP_NAMES[value] : value;
  }
}
