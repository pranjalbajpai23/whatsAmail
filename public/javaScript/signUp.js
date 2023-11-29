let email = document.querySelector("#form2Example18");
let pwd = document.querySelector("#form2Example28" );
let signInBtn = document.querySelector(".signIn");
let submit = document.querySelector(".signUp");

signInBtn.addEventListener("click", signInHandler);
function signInHandler() {
    window.location.href = "/signIn"
}
let storage = firebase.storage();
submit.addEventListener("click", signUpHandler);
console.log(firebase.firestore.FieldValue.serverTimestamp())
async function signUpHandler() {
    try {
        let details=await firebase.auth().createUserWithEmailAndPassword(email.value, pwd.value);
        localStorage.setItem("uuid", JSON.stringify(details.user.uid));
        alert("Account Created Successfully")
        window.location.href = "/mainPage";
    }
    catch (err) {
        alert("Unable to sign up, Please try again later");
        console.log(err);
    }
}
