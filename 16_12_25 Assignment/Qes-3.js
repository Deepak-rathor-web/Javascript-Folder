function createCounter() {
    var count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        reset: function () {
            count = 0;
        },
        getValue: function () {
            return count;
        }
    };
}

// Test
var counter1 = createCounter();
var counter2 = createCounter();

counter1.increment();
counter1.increment();

counter2.increment();

console.log(counter1.getValue()); // 2
console.log(counter2.getValue()); // 1
