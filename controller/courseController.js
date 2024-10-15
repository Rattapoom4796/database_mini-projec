const Course = require('../models/course');
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcryptjs");

exports.getcourses = async (req, res) => { 
    try { 
        const courses = await Course.find(); 
        res.status(200).json(courses); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
}; 

// Get a specific course by ID
exports.getcourse = async (req, res) => {
    try { 
        const { id } = req.params;
        const course = await Course.findById(id);
        if (!course) return res.status(404).json({ message: 'course name not found' }); 
        res.json(course); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
};
    
// Create a new course
exports.createcourse = async (req, res) => {
    const { course_name, course_detail, course_place, course_topic, people_count, date, time } = req.body;
    const newCourse = new Course({ course_name, course_detail, course_place, course_topic, people_count, date, time });
    
    try { 
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// Update a course by ID
exports.updatecourse = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedcourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedcourse) return res.status(404).json({ message: 'course not found' });
        res.status(200).json(updatedcourse);
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// Delete a course by ID
exports.deletecourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedcourse = await Course.findByIdAndDelete(id);
        if (!deletedcourse) return res.status(404).json({ message: 'course not found' });
        res.status(200).json({ message: 'course deleted successfully' });
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};