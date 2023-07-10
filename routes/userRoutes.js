const express = require("express")
const router = express.Router()
const {register,login,forgotPassword,changePassword,findFriend,follow,unFollow,aroundYou,following,followers,completeProfile} = require('../controllers/Usercontroller')
const {authUser} = require('../middleware/auth')

router.route("/signup").post(register)
router.route("/login").post(login)
router.route("/search").post(authUser,findFriend)
router.route("/forgotPassword").post(forgotPassword)
router.route("/changePassword").post(changePassword)
router.route("/follow/:friendName").get(authUser,follow)
router.route("/unfollow/:friendName").get(authUser,unFollow)
router.route("/aroundYou").get(authUser,aroundYou)
router.route("/following").get(authUser,following)
router.route("/aroundYou").get(authUser,aroundYou)
router.route("/followers").get(authUser,followers)
router.route("/updateProfile").post(authUser,completeProfile)
module.exports = router