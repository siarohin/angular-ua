import { InjectionToken } from "@angular/core";
import { GeneratorService } from "./generator.service";

export const Generator = new InjectionToken<string>("Generator");

export function GeneratorFactory(length: number) {
  return (data: GeneratorService): string => data.generateData(length);
}
