const asyncHandler = require("express-async-handler");

const allusers = asyncHandler(async (req, res) => {
  const keyword = req.query.search;

  console.log(keyword);
});

module.exports = allusers;
