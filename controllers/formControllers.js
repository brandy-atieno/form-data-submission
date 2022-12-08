const contactMessages = require("../model/contactModel");
const userSignUp=require('../model/signUpModel')
module.exports = {
  getAbout: (req, res) => {
    res.render("about");
  },
  postAbout: (req, res) => {
    const data=req.body
    const user =  userSignUp.create(data)//used create method
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
      console.log(user);
  },
  getContact: (req, res) => {
    res.render("contact");
  },
  postContact: (req, res) => {
    const message = new contactMessages(req.body);//used  new  with model function
     message.save()
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
    res.render("contact");
  },
};
