
/*
reference : https://www.loupetestware.com/post/mocking-api-calls-with-jest
*/

const conversionRate = 0.91;
    const data = await fetch("http://www.slow-url.com"); // For this example imagine this returns a falsy value
     if (!data || Object.keys(data).length < 1) {
      return false;
     } else {
      return data.payload * conversionRate;
     }
 }

 describe("getStockValue: not mocked", () => {
   it("returns false if no data is returned by the API", async () => {
    const value = await getStockValue();
    expect(value).toBe(false);
   });
 });

 // Test süiti başlatır ve getStockValue işlevinin birim testlerini tanımlar.
describe("getStockValue: mocked", () => {
   // API tarafından veri döndürülmediğinde false değeri döndürdüğünü test eder.
   it("returns false if no data is returned by the API", async () => {
      // fetch işlevini bir Jest mock işleviyle değiştirir.
      global.fetch = jest.fn(() => {
         // Asenkron bir işlem temsil eden bir Promise nesnesi döndürür.
         Promise.resolve();
      });
      // getStockValue işlevini çağırır ve dönen değeri value değişkenine atar.
      const value = await getStockValue();
      // fetch işlevinin bir kez çağrıldığını kontrol eder.
      expect(fetch).toHaveBeenCalledTimes(1);
      // getStockValue işlevinin false döndürdüğünü doğrular.
      expect(value).toBe(false);
    });
 });
 

