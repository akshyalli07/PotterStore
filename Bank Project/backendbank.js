var closingBalance
var availBal
var amountEntered
    // document.getElementById("bal").addEventListener("click",()=>{
    //     var pNode=document.createElement("p")
    // var textNode=document.createTextNode("10295.00")
    // pNode.appendChild(textNode)
    // var element=document.getElementById("parent")
    // var childNode=document.getElementById("bal")
    // element.replaceChild(pNode,childNode)
    // availBal=document.getElementsByTagName("p").innerHTML
    // amountEntered=document.getElementById("amount").value
    function viewBalance()
    {
    document.getElementById("bal").innerHTML=10295+".00"
    availBal=document.getElementById("bal").innerHTML
    amountEntered=document.getElementById("amount").value
    }
    

// })

document.getElementById("deposit").addEventListener("click",()=>{
    availBal=document.getElementById("bal").innerHTML
    //console.log(availBal)
    
    amountEntered=document.getElementById("amount").value
    //console.log(amountEntered)

    if (amountEntered>0) 
        {
            closingBalance= Number (amountEntered)+ Number (availBal)
            document.getElementById("bal").innerHTML=closingBalance+".00"

            var trNode=document.createElement("tr")
            var tableElement=document.getElementById("passbook")
            tableElement.appendChild(trNode)


            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("Deposit")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var year= new Date().getFullYear()
            var month= (Number) (new Date().getMonth())+Number(1)
            var date=new Date().getDate()
            var transdate=year+"-"+month+"-"+date
            var textNode=document.createTextNode(transdate)
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("+"+availBal+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("+"+amountEntered+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)
            
            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("+"+closingBalance+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            document.getElementById("amount").value=""
            //tableElement.insertBefore(trNode,element.childNodes[0])
        } 
        else 
        {
            alert("Please!! \n Enter the Correct Amount")
        }
})
        
document.getElementById("withdraw").addEventListener("click",()=>{
        availBal=document.getElementById("bal").innerHTML
        amountEntered=document.getElementById("amount").value
        closingBalance= Number (availBal)

    if (amountEntered>0 && amountEntered<closingBalance) 
        {
            closingBalance=Number (closingBalance)-Number (amountEntered)
            document.getElementById("bal").innerHTML=closingBalance

            var trNode=document.createElement("tr")
            var tableElement=document.getElementById("passbook")
            tableElement.appendChild(trNode)


            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("Withdraw")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var year= new Date().getFullYear()
            var month=new Date().getMonth()
            var date=new Date().getDate()
            var transdate=year+"-"+month+"-"+date
            var textNode=document.createTextNode(transdate)
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("+"+availBal+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("-"+amountEntered+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)
            
            var tdNode=document.createElement("td")
            var textNode=document.createTextNode("+"+closingBalance+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            document.getElementById("amount").value=""
            //tableElement.insertBefore(trNode,element.childNodes[0])
        }
        else{
            alert("You don't have sufficient balance to make this transaction")
        }
})

