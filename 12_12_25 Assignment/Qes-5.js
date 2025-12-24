function createAccount(initialBalance) {
    var balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
            }
        },
        checkBalance: function() {
            return balance;
        }
    };
}

var acc = createAccount(500);
acc.deposit(200);
acc.withdraw(100);
console.log(acc.checkBalance());
