import { MapByNamePipe } from "./map-by-name.pipe";

describe("MapByNamePipe", () => {
  it("create an instance", () => {
    const pipe = new MapByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
