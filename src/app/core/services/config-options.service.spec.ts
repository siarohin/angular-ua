import { TestBed } from "@angular/core/testing";

import { ConfigOptionsService } from "./config-options.service";

describe("ConfigOptionsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ConfigOptionsService = TestBed.get(ConfigOptionsService);
    expect(service).toBeTruthy();
  });
});
