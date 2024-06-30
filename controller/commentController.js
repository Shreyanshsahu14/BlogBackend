const Post=require("../model/postModel");
const Comment=require("../model/commentModel");

exports.createComment=async (req,res)=>{
try{
//fetch data from req body
const {post,user,body}=req.body;
//create comment obje
const comment= new Comment({
post,user,body
});
//save the obj in db
const savedComment= await comment.save();

const updatePost=await Post.findByIdandUpdate(post,{$push:{comments: savedComment._id}},{new:true})
                        .populate("comments")//populate the comments array with comment doc
                        .exec();
res.json({
post:updatePost,
});
}
catch(error){
return res.status(400).json({
        error:"Error while commenting",
})
}


};