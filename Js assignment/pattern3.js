// Complex Pattern
let n3 = 6;
for (let i=1;i<=n3;i++){
    let row="";
    for(let s=1;s<=n3-i;s++) row+="* ";
    for(let j=n3;j>=n3-i+1;j--) row+=j+" ";
    for(let j=n3-i+2;j<=n3;j++) row+=j+" ";
    console.log(row);
}
