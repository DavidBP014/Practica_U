// backend/controllers/blogController.js
const Blog = require('../models/blogModel');

const getBlogs = async (req, res) => {
    const blogs = await Blog.find({});
    res.json(blogs);
};

const getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        res.json(blog);
    } else {
        res.status(404).send('Blog not found');
    }
};

const createBlog = async (req, res) => {
    const { title, body, author } = req.body;

    const blog = new Blog({ title, body, author });
    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
};

const updateBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        blog.title = req.body.title || blog.title;
        blog.body = req.body.body || blog.body;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } else {
        res.status(404).send('Blog not found');
    }
};

const deleteBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        await blog.remove();
        res.json({ message: 'Blog deleted' });
    } else {
        res.status(404).send('Blog not found');
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
