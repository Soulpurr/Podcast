import ConnectToMongo from "../../middleware/connectTomongo";
import User from "../../models/users";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { fname, lname, email, isAdmin, password } = JSON.parse(req.body);
      const secPass = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET
      ).toString();
      let user = new User({
        fname: fname,
        lname: lname,
        email: email,
        isAdmin: isAdmin,
        password: secPass,
      });
      await user.save();

      return res.status(200).send({ message: "User created", success: "true" });
    } catch (error) {
      res.send({ error, success: false });
    }
  }

  return res.status(400).send("Not allowwd");
};

export default ConnectToMongo(handler);
