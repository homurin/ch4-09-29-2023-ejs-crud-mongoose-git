const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router
  .route("/")
  .get(adminController.getAllTours)
  .post(adminController.createTour)
router
  .route("/create")
  .get(adminController.createPage)
router
  .route("/action")
  .post(adminController.createTour)

module.exports = router
