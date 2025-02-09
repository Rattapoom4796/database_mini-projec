const mongoose = require('mongoose');

// Define the schema correctly
const courseSchema = new mongoose.Schema({
    course_name : { type: String, required: true },
    course_detail : { type: String, required: true },
    course_place : { type: String, required: true },
    course_topic : { type: String, required: true },
    people_count:{ type: Number, required: true },
    date : { type: Date, required: true },
    time : { type: String, required: true },
},
    {timestamps : true, versionKey: false}
);
// Export the model with the correct schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;