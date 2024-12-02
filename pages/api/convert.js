const YAML = require("yaml");
const axios = require("axios");
const rules = require("./rules");

module.exports = async (req, res) => {
  const url = req.query.url;
  const target = req.query.target;
  console.log(`query: ${JSON.stringify(req.query)}`);
  if (url === undefined) {
    res.status(400).send("Missing parameter: url");
    return;
  }

  console.log(`Fetching url: ${url}`);
  let configFile = null;
  try {
    const result = await axios({
      url,
      headers: {
        "User-Agent":
          "ClashX Pro/1.72.0.4 (com.west2online.ClashXPro; build:1.72.0.4; macOS 12.0.1) Alamofire/5.4.4",
      },
    });
    configFile = result.data;
  } catch (error) {
    res.status(400).send(`Unable to get url, error: ${error}`);
    return;
  }

  console.log(`Parsing YAML`);
  let config = null;
  try {
    config = YAML.parse(configFile);
    console.log(`👌 Parsed YAML`);
  } catch (error) {
    res.status(500).send(`Unable parse config, error: ${error}`);
    return;
  }

  if (config.proxies === undefined) {
    res.status(400).send("No proxies in this config");
    return;
  }
  const response = YAML.stringify({ proxies: config.proxies, ...rules.rules });
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(response);
};
