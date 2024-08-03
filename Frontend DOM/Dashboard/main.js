const login=()=>{
    const username=User.value
    const password=Pass.value

    if(username && password){
        //store data to browser local
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        //Navigation to dashboard
         window.location="dash.html"
    }
    else{
        alert("Please fill the login form")
    }
}