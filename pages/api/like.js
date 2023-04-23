import ConnectToMongo from "../../middleware/connectTomongo";
import podcast from "../../models/podcast";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      console.log(JSON.parse(req.body));
      let data = await podcast.findById(JSON.parse(req.body));
      let data1 = await podcast.findByIdAndUpdate(JSON.parse(req.body), {
        like: data.like + 1,
      });

      return res.status(200).send({ message: "Liked", success: "true" });
    } catch (error) {
      res.send({ error, success: false });
    }
  }

  return res.status(400).send("Not allowwd");
};

export default ConnectToMongo(handler);
