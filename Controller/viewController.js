
const getLandingpage = (req,res) => {
    res.render("landingpage.ejs");
}
const getStartPage =(req,res)=>{
    res.render("startPage.ejs");
}
const getMainPage=(req,res)=>{
    res.render("mainPage.ejs")
}
const getSignIn=(req,res)=>{
    res.render("signIn.ejs")
}
const getSignUp=(req,res)=>{
    res.render("signUp.ejs")
}
const getUserProfile=(req,res)=>{
    res.render("userProfile.ejs");
}
module.exports.getLandingpage = getLandingpage;
module.exports.getStartPage = getStartPage;
module.exports.getMainPage = getMainPage;
module.exports.getSignIn = getSignIn;
module.exports.getSignUp = getSignUp;
module.exports.getUserProfile= getUserProfile;

