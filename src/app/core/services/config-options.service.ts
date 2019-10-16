import { Injectable } from "@angular/core";
import assign from "lodash/assign";

import { ConfigOptions } from "../models/index";

@Injectable()
export class ConfigOptionsService {
  private configOptionsBF: ConfigOptions = undefined;

  /**
   * Set config options
   */
  public setConfigOptions(configOptions: ConfigOptions) {
    this.configOptionsBF = configOptions;
  }

  /**
   * Get config options
   */
  public configOptions(): ConfigOptions {
    return this.configOptionsBF;
  }

  /**
   * Update config options
   */
  public updateOptions(configOptions: ConfigOptions): void {
    this.configOptionsBF = assign({}, this.configOptions, configOptions);
  }
}
