const mongoose = require('mongoose');

// Define the schema
const adminSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    password: { type: String, required: true }, // Added password field
    accessToken: { type: String }, // Optional field
    refreshToken: { type: String }, // Optional field
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

// Export the model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
