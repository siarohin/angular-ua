import { Injectable } from "@angular/core";

@Injectable()
export class GeneratorService {
  public generateData(length: number): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i = i + 1) {
      result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
