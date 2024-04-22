// backend/controllers/authController.js

const User = require('../models/userModel');
const generateToken = require('../utils/tokenGenerator');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  
  // Buscar el usuario por email
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Suponiendo que tienes una función que genera tokens JWT
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

module.exports = {
  userLogin,
};
