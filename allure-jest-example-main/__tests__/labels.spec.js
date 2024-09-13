it("adds custom label", () => {
  allure.label("foo", "bar");
});

it("adds severity label", () => {
  allure.severity("critical");
});

it("adds epic label", () => {
  allure.epic("epic");
});

it("adds feature label", () => {
  allure.feature("feature");
});

it("adds story label", () => {
  allure.story("story");
});

it("adds suite label", () => {
  allure.suite("suite");
});

it("adds parent suite label", () => {
  allure.parentSuite("parentSuite");
});

it("adds sub suite label", () => {
  allure.subSuite("subSuite");
});

it("adds owner label", () => {
  allure.owner("owner");
});

it("adds tag label", () => {
  allure.tag("tag");
});

it("adds layer label", () => {
  allure.layer("layer");
});
