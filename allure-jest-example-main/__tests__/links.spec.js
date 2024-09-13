it("adds custom link", () => {
  allure.link("https://example.org", "Example", "Custom link");
});

it("adds issue link", () => {
  allure.issue("foo");
});

it("adds tms link", () => {
  allure.tms("bar");
});
