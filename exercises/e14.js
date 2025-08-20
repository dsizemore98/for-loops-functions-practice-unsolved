
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  function getClientsWithWrongBalance(bankAccounts) {
  return bankAccounts.filter(account => {
    const deposits = account.deposits || [];
    const withdrawals = account.withdrawals || [];
    
    const sumDeposits = deposits.reduce((total, d) => total + d, 0);
    const sumWithdrawals = withdrawals.reduce((total, w) => total + w, 0);
    
    return account.balance !== (sumDeposits - sumWithdrawals);
  });
}


}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
