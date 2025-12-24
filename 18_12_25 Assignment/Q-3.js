var str = prompt("Enter the Sentance ");
var temp = "";
for(let i=0;i<str.length;i++){
    let a = str[i];
    if(i%2 == 0){
             temp += " "+a;

    }else{
        let rev =  a.split("").reverse().join("");
     temp += " "+rev; 
    }
}

console.log("New  String is : "+temp)