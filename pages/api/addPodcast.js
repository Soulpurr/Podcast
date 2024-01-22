import ConnectToMongo from "../../middleware/connectTomongo";
import podcast from "../../models/podcast";
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      // verifying users jwt
      const data = req.headers["auth"];
      if (data) {
        var decrypted = await jwt.verify(data, process.env.SECRET);
        if (decrypted) {
          req.user = decrypted;
          const { name, description, type, category, speaker, link } =
            JSON.parse(req.body);
          let Podcast = new podcast({
            name: name,
            description: description,
            type: type,
            category: category,
            speaker: speaker,
            link: link,
            user: req.user.user._id,
          });
          await Podcast.save();
          return res.status(200).send({message:"Podcast created"});
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
