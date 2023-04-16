// create a  variable for collecting a data 
document.getElementById("button").addEventListener("click",function () {
    // get data in a variable
    var maths =  document.getElementById("maths").value;
    var gujrati =  document.getElementById("gujrati").value;
    var english =  document.getElementById("english").value;
    var hindi =  document.getElementById("hindi").value;
    // console.log(marks);
    // calculating a total 
var addition = parseInt(maths)+parseInt(gujrati)+parseInt(english)+parseInt(hindi) ;
// calculating average
// var average = addition / 5 ;
// display a record data 
DispDiv = document.getElementsByClassName("total")
DispDiv[0].innerHTML = "addition"
})

