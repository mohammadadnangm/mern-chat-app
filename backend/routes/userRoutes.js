const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  findUsers,
  updateUserProfile,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/users").get(findUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
