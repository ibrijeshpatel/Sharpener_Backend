const path = require("path")
const rootDir = require("../path_utility/path") // access the path where rootDir is available

exports.get404 = (req, res) => {
    // res.status(404).send("Page Not Found");
    res.sendFile(path.join(rootDir, "html", "404.html"));

};