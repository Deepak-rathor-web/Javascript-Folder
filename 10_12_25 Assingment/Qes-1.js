// 1. Student Grades Analyzer
// Scenario: You are building a system to help teachers analyze student performance.
// Assignment:
// Take an array of student marks: [85, 90, 78, 92, 88, 76]
// Find:
// The highest and lowest marks.
// The average mark.


var marks = [85, 90, 78, 92, 88, 76];
var m = marks.sort((a,b)=>a-b);
console.log("Sorted marks "+m);

 var min = m[0];
 console.log("Minimum  marks "+min);

 var max = m[m.length-1];
 console.log("Maximum marks "+max);


 var sum = 0;
 var count = 0;
 for( var i=0; i<m.length;i++){
    sum +=  m[i];
    count++;
 }

 console.log("Sum  "+sum);

//  var s = m.reduce((total , num )=> total + num ,0);
//  console.log("Sum by Reduce "+s);

 var avg = sum/count;

 console.log("Average  marks "+avg);
