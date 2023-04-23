import ConnectToMongo from "../../middleware/connectTomongo";

import savedPodcast from "../../models/savedPodcast";
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      // verifying users jwt
      const data = req.headers["auth"];
      if (data) {
        var decrypted = await jwt.verify(data, process.env.SECRET);
        if (decrypted) {
          req.user = decrypted;
          console.log(req.user.user._id);
          let podcast = await savedPodcast.find({
            user: req.user.user._id,
          });

          return res.status(200).send(podcast);
        }
        return res.send({ message: "Invalid" });
      }
      return res.send({ message: "No user" });
    } catch (error) {
      res.send({ error });
    }
  }

  return res.status(400).send("Not allowwd");
};

export default ConnectToMongo(handler);
