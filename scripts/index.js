import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML=navbar()

//search karne k badd
let dataFetch = async() =>{
    try{
        let foodData = document.getElementById("data").value;
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodData}`)

        let data = await res.json()
        console.log(data.meals)
        foodRep(data.meals)
    }catch(err){
        console.log("err", err)
    }

}

document.getElementById("submit").addEventListener("click", dataFetch);

let foodRep = (data) =>{

    let appendData = document.getElementById("FoodRecipies")
    appendData.innerHTML = null;
    data.forEach(({strMeal,strMealThumb,strInstructions,strSource})=>{

        let Maindiv = document.createElement("div")
        Maindiv.setAttribute("id", "Maindiv")

        let left = document.createElement("div")
        left.setAttribute("id", "left_mainDIV")

        let img = document.createElement("img")
        img.src = strMealThumb

        left.append(img)
        let right = document.createElement("div")
        right.setAttribute("id", "right_mainDIV")

        let name = document.createElement("h3")
        name.innerText = strMeal;

        let inst = document.createElement("p")
        inst.innerText = `Instructions: ${strInstructions}`;

        let fullRec = document.createElement("p")
        fullRec.innerText = `For full Recipie: ${strSource}`
        right.append (name, inst, fullRec)

        Maindiv.append(left,right)
        appendData.append(Maindiv)
    })
}

//search karne k bad khtam

//random recipies

let randomMeals = async () =>{
    try{
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

        let foodRecipies = await res.json()

        foodRep(foodRecipies.meals)
        
    }catch(err){
        console.log("err",err)
    }
}
randomMeals()

let userDetail = JSON.parse(localStorage.getItem("user"))
// document.getElementById("userDetails").innerText = `Hello ${userDetail}`

let userName=JSON.parse(localStorage.getItem("user")) || []
if(userName.length!==0){
    let user=document.getElementById("userDetails")
    user.innerHTML=null

    user.innerText=`Hello ${user.username}`
}