import sum from "./sum";

declare const reporter:any;

describe("Sum function", () => {
 
  it("adds 1 + 2 to equal 3", () => {
/* reporter
    .description("Toplama işlemi")
    .story("BOND-007"); */
/* reporter.startStep("toplama startstep"); */
    expect(sum(1, 2)).toBe(3);
/*   reporter.endStep();
 */  });
});
