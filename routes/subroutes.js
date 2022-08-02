const {addSubList, getSubListById,getSub, getSubList, delById, delByMail, getSubListMail}= require("../controllers/subscribers")
const express=require("express");

const router=express.Router();
router.param("id", getSubListById);


// create a sublist
router.post('/sublist', addSubList);

router.get("/sublist/:id",getSub)

router.get("/sublist",getSubList)

router.delete("/sublist/:id",delById)

router.get("/submails",getSubListMail)
router.delete("/sublist",delByMail)
module.exports = router;
