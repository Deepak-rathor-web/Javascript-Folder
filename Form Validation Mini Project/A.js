



// let student = [101,"deepak",68,65,98,25,33];

// let[x,y,...z] = student

// console.log(x)
// console.log(z[0])

let ob = {
    name : "rakesh",
    age  : 24,
    salary : 10 
}

let { name , age ,salary} = ob

console.log(name);
console.log(age);

// --------------window object -----------------

// window.alert("heyy")
// window.prompt()

// window.setTimeout(()=>{ console.log("jnab")},1000)
// window.setInterval(()=>{ console.log("jnab")},1000)

// console.log(window.screen.width)
// console.log(window.screen.height)

// -----------class constuctor setter and getter ---------

// class student{
//     constructor(name,age){
//         console.log("Hwy i am constructor")
//         this._name = name;
//         this._age = age;

//     }

//     display(){
//         console.log("Ye dekh ")
//         console.log("Name" , this._name)
//          console.log("Age" , this._age)

//     }

//     get name(){
//         return this._name;
//     }

//     set name(name){
//         this._name=name;
//     }

//     get age(){
//         return this._age;
//     }

//     set age(age){
//         this._age =age;
//     }


// }

// let s1 = new student("champak",69);
// s1.display();

// console.log(s1.name);
// s1.name = "dhapudi";
// console.log(s1.name);

// console.log(s1.age);
// s1.age = 21;
// console.log(s1.age);


