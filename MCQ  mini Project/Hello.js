function total(){
    alert("total Called ")
    let sum = 0;

    var ans1 = document.getElementsByName("capton")

    for(i=0; i<ans1.length ;i++){
        if( ans1[i].checked && ans1[i].value == "Director"){
            sum = sum + 1;
        }
    }

     var ans2 = document.getElementsByName("dk")

    for(i=0; i<ans2.length ;i++){
        if( ans2[i].checked && ans2[i].value == "Student"){
            sum = sum + 1;
        }
    }

    document.getElementById("res").innerHTML = sum ;
}