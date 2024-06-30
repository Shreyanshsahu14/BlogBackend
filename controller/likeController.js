const Post=require("../model/postModel");
const Like=require("../model/likeModel");

exports.likePost=async (req,res)=>{
try{
//fetch data from req body
const {post,user}=req.body;
//create comment obje
const like= new Like({
post,user
});
//save the obj in db
const savedLike= await like.save();

const updatePost=await Post.findByIdandUpdate(post,{$push:{likes: savedComment._id}},{new:true});
                      
res.json({
post:updatePost,
});
}
catch(error){
return res.status(400).json({
        error:"Error while liking",
})
}


};
exports.unlikePost=async (req,res)=>{
    try{
        const {post,like}=  req.body;
        const deletedlike=await Like.findOneAndDelete({post:post,_id:like});
        const updatePost=await Post.findByIdandUpdate(post,{$pull:{likes: deletedlike._id}},{new:true});
        res.json({
            post:updatePost,
            });
    }
    catch(error){
    return res.status(400).json({
        error:"error while unliking",
    });
    }
};