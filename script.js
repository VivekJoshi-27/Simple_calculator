
function display(e) {
    let disop = document.getElementById("disop");
    disop.innerText += e.target.innerText;
}



function calculate() {
    let disop = document.getElementById("disop").innerText;

    if (disop.includes("+")) {
        calop(disop, "+");
    }
    else if (disop.includes("-")) {
        calop(disop, "-");
    }
    
    else if (disop.includes("*")) {
        calop(disop, "*");
    }
    else if (disop.includes("/")) {
        calop(disop, "/");
    }
}

function calop(ipStr, op) {
    switch (op) {
        case "+":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("disop").innerText = v1 + v2;
            break;


        case "-":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("disop").innerText = v1 - v2;
            break;


        case "*":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("disop").innerText = v1 * v2;
            break;


        case "/":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("disop").innerText = v1 / v2;
            break;


    }



}