

alert("Welcome , do you want to perform simple calculations?");
alert("Instructions: Input the numbers you need for the calculations and choose your arithimetic operation")
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

var opr= prompt("choose operator from (+,-,*,/)")


if(opr=="+"){

    var result=num1+num2;
    alert(result);  //alerts the result to user in browser console. 
}else if (opr=="-") {

    var result=num1-num2;
    alert(result);   //alerts the result to user in browser console. 

     }else if (opr=="*") {

        var result=num1*num2;
        alert(result);   //alerts the result to user in browser console. 

         }else if (opr=="/") {

            var result=num1/num2;
            alert(result);   //alerts the result to user in browser console. 

             }

