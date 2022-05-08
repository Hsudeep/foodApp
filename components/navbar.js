let navbar = () =>{
    return `
    <div id="logo">
            <img src="https://logopond.com/logos/ddd03bebd1de3409866371378097ab62.png" alt="">
        </div>
        <div id="searchData">
            <input type="text" name="" id="data" placeholder="Enter Recipe to search">
            <button id="submit">Search</button>
        </div>
        
        <div id="right">
            <p><a href="index.html">Random Recipies</a></p>
            <p><a href="special.html">Today's Special</a></p>
            <p><a href="receipes.html">Recipes</a></p>
            <p><a href="login.html">Login</a></p>
            <p><a href="signup.html">Signup</a></p>
        </div>
    `
}
export {navbar}