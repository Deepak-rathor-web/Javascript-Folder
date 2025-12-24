// abc pattern
for (let i = 1; i <= 5; i++) {
    let s = "";
    for (let j = 0; j < i; j++) s += String.fromCharCode(97+j);
    console.log(s);
}
