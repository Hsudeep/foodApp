import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML=navbar()


// let signupfn = async(e) =>{
//     e.prevenDefault();

//     let signupDetails = {
//         name: document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         password:document.getElementById("password").value,
//         username:document.getElementById("username").value,
//         mobile:document.getElementById("mobile").value,
//         description:document.getElementById("description").value,
//     }
//     signupDetails=JSON.stringify(signupDetails)

//     let res =await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
//             method: 'POST',
//             body:signupDetails,
//             //mode:"no-cors",
//             headers: {
//                 'Content-Type':'application/json'
//             },
//         })

//         let data=await res.json()
//         console.log(data)
// }

// document.getElementById("SigupBTN").addEventListener("click", signupfn)
let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors"
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();
    console.log(data);
  };

  document.getElementById("SigupBTN").addEventListener("click", register);