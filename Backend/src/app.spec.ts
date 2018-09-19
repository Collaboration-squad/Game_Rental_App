import "jasmine";
import app from "./app";

describe("App", () => {
  beforeEach(() => {
    spyOn(app, "use");
  });

  it("should check if app exists", () => {
    expect(app).toBeTruthy();
  });
  it("should check if app have ability to create paths", () => {
    app.use("/test");
    expect(app.use).toHaveBeenCalled();
    expect(app.use).toHaveBeenCalledWith("/test");
  });
});
