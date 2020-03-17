var output=""
var hist=""

document.getElementById("one").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"1";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("two").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"2";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("three").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"3";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("four").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"4";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("five").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"5";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("six").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"6";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("seven").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"7";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("eight").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"8";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("nine").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"9";
    output=document.getElementById("calcArea").value
    console.log(output)
})
document.getElementById("zero").addEventListener("click",()=>{
    document.getElementById("calcArea").value=output+"0";
    output=document.getElementById("calcArea").value
    console.log(output)
})
// document.getElementById("decimal").addEventListener("click",()=>{
    
//     for (let index = 0; index < value.length; index++) {
//         console.log(value+"updated value")
//         var dec="."
//         console.log(!(!value.search(dec))+" rev")
//         if (!(!value.search(dec))) 
//         {
//             console.log("inside if")
//             alert("Please \n Try to enter a real number")
//             break;
            
//         } 
//         else 
//         {
//             console.log("inside else")
//             document.getElementById("calcArea").value=value+".";
//             value=document.getElementById("calcArea").value
//             document.getElementById("history").value=value;
//             break
            
//         }     
//     }
// })
document.getElementById("AC").addEventListener("click",()=>{
    document.getElementById("calcArea").value=""
    document.getElementById("history").value=""
})

document.getElementById("addition").addEventListener("click",()=>{
    document.getElementById("history").value=output+"+"
    hist=document.getElementById("history").value
    document.getElementById("calcArea").value=""
    output=document.getElementById("calcArea").value
    hist.toString()
    hist=hist.substr(0,hist.length-1)
    console.log(hist+" number hist")
    console.log (Number(output)+Number(hist)+" this")
    console.log(output+" fianal output")
})