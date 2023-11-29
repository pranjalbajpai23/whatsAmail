const express = require('express');
const viewRouter = express.Router();
const {getLandingpage,getStartPage,getMainPage,getSignIn,getSignUp, getUserProfile} = require('../Controller/viewController');


viewRouter.route("/").get(getLandingpage);
viewRouter.route("/start").get(getStartPage);
viewRouter.route("/mainPage").get(getMainPage);
viewRouter.route("/signIn").get(getSignIn);
viewRouter.route("/signUp").get(getSignUp);
viewRouter.route("/userProfile").get(getUserProfile)
module.exports.viewRouter = viewRouter;