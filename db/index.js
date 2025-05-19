require('dotenv').config();
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

const UserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    todos: [
        {
            title: { type: String, default: "Anonymus" },
            description: { type: String, default: "Anonymus" },
            status: { type: String, enum: ['started', 'ongoing', 'completed'], default: 'started' },
            completed: { type: Boolean, default: false },
            startDate: Date,
            endDate: Date,
            lastUpdatedDate: { type: Date, default: Date.now },
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    imageLink: String,
});

const notification = new mongoose.Schema({
    developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    clientEmail: { type: String, required: true },
    message: { type: String, required: true },
    projectDetails: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const Addressschema = new mongoose.Schema({
    college: String,
    address: String,
    phoneNumber: Number,
    secondryEmail: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
const Notification = mongoose.models.Notification || mongoose.model('Notification', notification);

module.exports = { User, Notification };
