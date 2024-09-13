it("allows to create custom steps with and without attachments", async () => {
  await allure.step("First step", async (s1) => {
    await s1.step("Second step", async (s2) => {
      await s2.step("Third step", async (s3) => {
        s3.attach("This is an attachment", "Text attachment", "text/plain");
      });
    });
  });
});
