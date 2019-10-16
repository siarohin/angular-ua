import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  /**
   * Set value into local storage
   */
  public setItem(keyParam: string, value: any): void {
    localStorage.setItem(keyParam, value);
  }

  /**
   * Get value into local storage
   */
  public getItem(keyParam: string): any {
    localStorage.getItem(keyParam);
  }

  /**
   * Remove value from local storage
   */
  public removeItem(keyParam: string): void {
    localStorage.removeItem(keyParam);
  }
}
