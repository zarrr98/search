const express = require("express");
const router = express.Router();
const fs = require("fs");


//get the file's content
router.get("/filecontent", (req, res, next) => {
  let input = fs.createReadStream("./server/file.txt");

  //

  let dataArray = [];
  let remaining = "";
  input.on("data", function (data) {
    remaining += data;
    var index = remaining.indexOf("\n");
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      dataArray.push(line);
     // fileArray.push(line)
      index = remaining.indexOf("\n");
    }
  });

  input.on("end", function () {
    if (remaining.length > 0) {
      dataArray.push(remaining);
     // fileArray.push(remaining)
    }
    console.log("array2 : ", dataArray);
    res.status(200).json({
            status: 200,
            message: "Content returned successfully!",
            resolve : dataArray,
          });

  });

});
module.exports = router;
