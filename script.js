
let a; = parseFloat( prompt("Enter variable a: "));
let b; = parseFloat( prompt("Enter variable b: "));
//console.log(typeof(a)); // izvada mainīga a t
//console.log(typeof(b));
let result;
let operators = prompt("Enter operator: ");



while(conrinue)
    
let turpināt = true;

function getResult()

{
    let a = parseFloat(document.getElementById("a_var"));
    let b = parseFloat(document.getElementById("b_var"));
    let operators = document.getElementById("operator");
    console.log(operators);
    switch(operators)
{
    case"+":
        result = a + b;
    break;

    case"-":
        result = a - b;
    break;
    
    case"*":
        result = a * b;
    break;

    case"/":
        result = a / b;
    break;

    case"^":
        result = a ^ b;
    break;

    case"%":
        result = a % b;
    break;

    case"!":
        console.log("!")
    break;

    case "!":
        result = 1;
        for(let i = 1; i < a ; i++)
        {
            //result = result * i;
            result *= i;
        }
    break;

    default:
        console.log("Error: invalid operator");
    }
    console.log(Result: ", result);
    let user = promt("Turpināt ? (Y/N)");
    if (user == "n"|| user == "N")
    {
        turpināt = false;
    }


    
}

result = a + b;
console.log(result ", result");