it("adds description to the test", () => {
  allure.description("This is a description for the test");
});

it("adds html description to the test", () => {
  allure.descriptionHtml("<h1>This is a description for the test</h1>");
});
