const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/", (req, res) => {
  res.redirect("/map");
});

router.get("/new/newreview",  (req, res) => {
    try {
        let reviews = Review.find({}).populate("review");
        res.status(200).json(reviews);
      } catch (err) {
        res.status(500).json(err);
      }
})
router.delete("/delete/:id", async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (!review) {
        return res.status(404).json({ msg: "Review not found" });
      }
    else {
        await Poll.deleteOne(poll);
        return res.status(200).json({ msg: "Review deleted sucessfully" });
      } 
    } catch (err) {
      return res.status(500).json(err);
    }
  });
  router.post("/newreview", (req, res) => {
      
      Review.create(req.body).then(console.log("success!"))
  })


module.exports = router;
