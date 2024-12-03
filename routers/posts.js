const express =require("express");
const router = express.Router();
const posts = require("../data/posts");

//index
router.get('/',(req,res)=>{
    res.json({
        data: posts,
        count:posts.length
    });
});

//show
router.get('/:id', (req,res)=>{
    const post = posts.find(p => p.id == req.params.id);
    const postWithPreview = {
        ...post,
        imagePreview: `<img src="${post.image}" alt="${post.title}" style="max-width: 200px;"/>`
    };
    res.json(postWithPreview);
});

//store or create
router.post('/', (req,res)=>{
    res.json('creiamo un nuovo elemento');
});

//update
router.put('/:id',(req,res)=>{
    const postId = req.params.id;
    res.json(`modifichiamo i dati di uno specifico elemento ${postId}`);
});

//modify
router.patch('/:id',(req,res)=>{
    const postId = req.params.id;
    res.json(`modifichiamo gli specifici dati uno specifico elemento ${postId}`);
});

//destroy or delete
router.delete('/:id', (req,res)=>{
    const postId = req.params.id;
    res.json(`eliminiamo un elemento specifico ${postId}`);
});

module.exports = router;