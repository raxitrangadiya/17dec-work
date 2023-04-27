document.getElementById("btn").addEventListener("click",function () {
    // console.log("called");
    var maths=document.getElementById("maths").value
    var gujrati=document.getElementById("gujrati").value
    var english=document.getElementById("english").value
    var hindi=document.getElementById("hindi").value
    var addition =parseInt(maths)+ parseInt(gujrati)+parseInt(english)+parseInt(hindi)
    console.log("total marks",addition);//addition complete (total marks value find)
    let DispTotal = document.getElementsByClassName("total")
})