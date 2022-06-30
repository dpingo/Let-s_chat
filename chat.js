function addUser(){
    user=document.getElementById("user").value
    localStorage.setItem("user_name", user)
    window.location=("chat.html")
}