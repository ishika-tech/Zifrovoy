const User = require('../models/user.model.js');
const { authsignal } = require('../config/auth.js')
const axios = require('axios');

const createUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = new User({ email });
        await user.save();
        // const response = await axios.post('https://api.authsignal.com/management/users', {
        //     userId: user._id, // Pass your user ID
        // }, {
        //     auth: {
        //         username: process.env.AUTH_SIGNAL_SECRET, // Replace with your Authsignal API key
        //         password: ''
        //     }
        // });
        // console.log(response);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);

        res.status(400).json({ error: error });
    }
};
const authUser = async (req, res) => {
    const { email } = req.params;
    console.log(email);

    try {
        // Fetch the user from your database based on email or other criteria
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error('User not found');
        }

        const userId = user._id; // Get the user ID (e.g., UUID) from the database
        console.log(authsignal);

        // Track the action of sending an OTP
        const result = await authsignal.track({
            userId: userId,  // Pass the user ID to Authsignal
            action: 'signIn', // Action for requesting OTP
            // scope: "read:authenticators add:authenticators",
            scope: 'add:authenticators', // Scope for OTP via email
        });

        console.log("TT01 : result", result);

        const token = result.token;
        console.log('Authsignal Token:', token);

        res.status(201).json(token); // Return or use the token as needed
    } catch (error) {
        res.status(400).json(error);
        console.error('Error generating token:', error);
    }
};
const passKey = async (req, res) => {
    const { email } = req.params;
    console.log(email);

    try {
        // Fetch the user from your database based on email or other criteria
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error('User not found');
        }

        const userId = user._id; // Get the user ID (e.g., UUID) from the database
        console.log(authsignal);

        // Track the action of sending an OTP
        const result = await authsignal.track({
            userId: userId,
            action: "enrollPasskey",
            scope: "add:authenticators"
          });


        console.log("TT01 : result", result);

        const token = result.token;

        const { state } = await authsignal.validateChallenge({ token });
        console.log(state);
        

        res.status(201).json(token); // Return or use the token as needed


    } catch (error) {
        res.status(400).json(error);
        console.error('Error generating token:', error);
    }
};

module.exports = {
    createUser,
    authUser,
    passKey
}