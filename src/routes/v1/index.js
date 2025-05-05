const express = require("express")
const router = express.Router();
const checkJwt = require("../../middlewares/index")
const ProductController = require("../../controllers/shoe-controller");

router.post('/addProduct', ProductController.create);
router.post('/addColor', ProductController.update);

router.delete('/removeColor', ProductController.removeColor);
router.delete('/removeProduct', ProductController.removeProduct);
router.post('/addSize', ProductController.addSize);
router.delete('/removeSize', ProductController.removeSize);
router.post('/uploadImage', ProductController.uploadImage);

router.get('/', (req, res) => {
    res.send("HI")
})

module.exports = router;