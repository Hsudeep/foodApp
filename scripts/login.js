import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML=navbar()

let login = async () => {
    let user_data = {
      username: document.getElementById("userName").value,
      password: document.getElementById("password").value,
    };
    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    let username=document.getElementById("userName").value
    indexDetail(username,data.token)
  };

  document.getElementById("SigupBTN").addEventListener("click", login)

  let indexDetail = async (username, token) =>{
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

        headers:{
            Authorization: `Bearer ${token}`,
        },
    })

    let data=await res.json()
    
    localStorage.setItem("user",JSON.stringify(data))
    window.location.href="index.html"
}