const Post = require("../models/Post");

exports.PostList = async (req, res) =>{
    try {
        const postMessages = await Post.find();
        res.status(201).json(postMessages);
    } catch (error) {
        res.status(404).json({
            statusCode: 404,
            message: "not found"
        });
    }
}

exports.PostDetail = async (req, res) =>{
    
    let id = req.params.id
    try {
        const Find = await Post.findById(id)
        res.status(201).json(Find)
    } catch (err) {
        res.status(404).json({
            statusCode: 404,
            message: "not found"
        })
    }
};


exports.PostCreate = async (req, res) => { 

    let PostCreate = new Post({
        title: req.body.title,
        description: req.body.description,
        img :req.body.img
    });
    try {
        await PostCreate.save();
        res.status(201).json(PostCreate);
    } catch (error) {
        res.status(404).json({
            statusCode: 404,
            message: "data is invalid"
        });
    }
};

exports.PostUpdate = async (req,res) => {
    try {
        const { id } = req.params;
        const { title, description,img } = req.body;
        const updatedPost = { title, description, _id: id ,img:img};
        
        await Post.findByIdAndUpdate(id, updatedPost);
        res.status(201).json(updatedPost);
    } catch (err) {
        
        res.status(404).json({
            statusCode: 404,
            message: "something went wrong"
        });
    };
}


exports.PostDelete = async (req, res) =>{
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}
