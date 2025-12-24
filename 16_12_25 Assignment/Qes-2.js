function createAccount(initialBalance) {
    var balance = initialBalance;

    return {
        deposit: function (amount) {
            balance += amount;
        },
        withdraw: function (amount) {
            if (amount <= balance) balance -= amount;
            else alert("Insufficient balance");
        },
        checkBalance: function () {
            return balance;
        }
    };
}

// Test
var account = createAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.checkBalance()); // 1200
