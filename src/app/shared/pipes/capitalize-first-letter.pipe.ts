import { Pipe, PipeTransform } from "@angular/core";

/**
 * Capitalize first letter pipe
 */
@Pipe({
  name: "capitalizeFirstLetter",
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string, flag: boolean = true): any {
    const shouldCapitalize: boolean = flag && !!value && !!value.length;
    return shouldCapitalize ? `${value[0].toUpperCase()}${value.substr(1).toLowerCase()}` : value;
  }
}
