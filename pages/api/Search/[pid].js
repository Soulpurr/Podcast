import ConnectToMongo from "../../../middleware/connectTomongo";
import podcast from "../../../models/podcast";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      let data = await podcast.find({ name: req.query.pid });

      return res.status(200).send(data);
    } catch (error) {
      res.send({ error, success: false });
    }
  }

  return res.status(400).send("Not allowwd");
};

export default ConnectToMongo(handler);
