let email = document.querySelector("#form2Example18");
let pwd = document.querySelector("#form2Example28" );
let signUpBtn = document.querySelector(".sign-up");
let submit = document.querySelector(".sign-in");

signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler(){
    window.location.href = "/signUp";
}

submit.addEventListener("click", submitHandler);

async function submitHandler(){
    try{
        let pakad = await firebase.auth().signInWithEmailAndPassword(email.value,pwd.value);
        localStorage.setItem("uuid", JSON.stringify(pakad.user.uid));
        window.location.href = "/mainPage";
    } 
    catch(err){
        alert("Failed to sign in, Please try again later!")
        console.log(err);
    }
}
