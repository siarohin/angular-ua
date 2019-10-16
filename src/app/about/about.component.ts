import { Component, OnInit, Optional, InjectionToken, Inject } from "@angular/core";

const CONSTANTS_SERVICE = new InjectionToken<string>("constantsService");
const ERROR_MSG = "Service not found";

import {
  LocalStorageService,
  ConfigOptionsService,
  GeneratorService,
  ConfigOptions,
  Generator,
  GeneratorFactory,
} from "../core/index";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    {
      provide: CONSTANTS_SERVICE,
      useValue: { App: "TaskManager", Ver: "1.0" },
    },
    GeneratorService,
    { provide: Generator, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
  ],
})
export class AboutComponent implements OnInit {
  public configOptions: ConfigOptions | string;
  public generatorContent: string;

  constructor(
    @Optional()
    private localStorageService: LocalStorageService,

    @Optional()
    private configOptionsService: ConfigOptionsService,

    @Optional()
    @Inject(CONSTANTS_SERVICE)
    public constants: string,

    @Optional()
    @Inject(Generator)
    private generator: string,
  ) {}

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    // demo for localStorageService
    this.localStorageService
      ? this.localStorageService.setItem("demo", "123")
      : console.log(ERROR_MSG);

    // demo for configOptionsService
    this.configOptionsService
      ? this.configOptionsService.setConfigOptions({
          id: 1,
          login: "user",
        })
      : console.log(ERROR_MSG);

    this.configOptions = this.configOptionsService
      ? this.configOptionsService.configOptions()
      : ERROR_MSG;

    // demo for GeneratorService
    this.generatorContent = GeneratorService ? this.generator : ERROR_MSG;
  }
}
