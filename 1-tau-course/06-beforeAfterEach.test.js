
/**
 * jest docs: https://jestjs.io/docs/setup-teardown
 * Her testden once ve sonra calısır, describe dan once degil
BeforeEach:
afterEach: 
Test:
*/


const setupFirst = () => console.log ('Setting up before test run') 


describe('new account creations checks',() =>{
    beforeEach(() => setupFirst());
    afterEach(() => tearDown());

    test('new account 1 created',() => {
        const account = 'account1'
        expect(account).toEqual('account1')
    }); 

    test('new account 2 created',() => {
        const account = 'account2'
        expect(account).toEqual('account2')
    });
   
})


const tearDown = () => console.log ('Finish up after test run')
