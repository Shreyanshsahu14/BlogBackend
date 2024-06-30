const express=require("express");
const router=express.Router();
const {createComment}=require("../controller/likeController");
const {likePost}=require("../controller/commentController");
const {createPost,getAllPosts}=require("../controller/postController");


router.post("/comments/create",createComment);
router.post("/likes/like",likePost);
router.post("/posts/create",createPost);
router.get("/posts/create",createPost);
router.get("/posts",getAllPosts);
module.exports=router;