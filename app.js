/*var a;
var d;
var b;
a=prompt("Enter N1");
a=parseInt(a);
 b=prompt("Enter N2");
   b=parseInt(b);
var c=prompt("Enter Operator");
//document.write("result: ",a+b);
switch(c)
{
    case '+': d=a+b;
    prompt("result =",d);
    break;
    case '-': d=a-b;
    document.write("result =",d);
    break;
    case '/': d=a/b;
    document.write("result =",d);
    break;
    default : document.write("Invalid");
}*/
//var simple;
//var scientifi;
var ch;
ch = prompt("press 1 for simple \n press 2 for scientific");
if (ch == 1) {
    var a;
    var b;
    var c;
    var d;
    //var sin=Math.sin;
    //var cos=Math.cos;
    //var tan=Math.tan;
    a = prompt("Enter number 1");
    a = parseInt(a);
    b = prompt("Enter Operator");
    c = prompt("Enter Number 2");
    c = parseInt(c);
    switch (b) {
        case '+':
            d = a + c;
            document.write("Result: ", d);
            break;
        case '-':
            d = a - c;
            document.write("Result: ", d);
            break;
        case '*':
            d = a * c;
            document.write("Result: ", d);
            break;
        case '/':
            d = a / c;
            document.write("Result: ", d);
            break;
        /*
        case 'sin':d=(sin);
        document.write("Result: ",d);
        break;
        */
        default:
            alert("invalid");
    }
}
else if (ch == 2) {
    var a;
    var b;
    a = prompt("Enter number");
    a = parseInt(a);
    var b;
    b = prompt("Enter Operator");
    switch (b) {
        case 'sin':
            alert(Math.sin(a));
            break;
        case 'cos':
            alert(Math.cos(a));
            break;
        case 'tan':
            alert(Math.tan(a));
            break;
        default:
            alert("Invalid");
    }
}
else {
    alert("invalid operation");
}
