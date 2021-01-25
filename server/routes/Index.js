let express = require("express");
let router = express.Router();

const {PostList,PostDetail,PostCreate,PostDelete,PostUpdate} = require('../controllers/Index');

router.get("/", PostList );
router.post("/", PostCreate);
router.get("/:id", PostDetail);
router.patch("/update/:id", PostUpdate)
router.delete("/delete/:id", PostDelete);

module.exports = router;