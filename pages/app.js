

console.log("jojo2");

// onclick="location.href='./index.html';"

let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let mensaje = document.querySelector("#mensaje");
let inicio = './index.html';
let button = document.querySelector("#envio");
button.disabled= true;
nombre.addEventListener("change", stateHandle);
email.addEventListener("change", stateHandle);
mensaje.addEventListener("change", stateHandle);



function stateHandle() 
    {
        if (document.querySelector("#email").value === "" && document.querySelector("#nombre").value === "")
            {
            button.disabled = true;

            }
        else
            {
                if(document.querySelector("#mensaje").value === "")
                    {
                    button.disabled = true;  
                    }
            
            else
                {
                button.disabled = false;
                console.log(document.querySelector("#envio").disabled);
                }
             }

    }

   function enviado()
   {
    alert("Su Consulta Fue Enviado, Pronto nos contactaremos!!");

   } 

