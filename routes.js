// Write the CRUD code in this file
// Using Express framework for Http REST calls
const express = require('express');
// For using http.get, pot, put, delete in route
const studentRoute = express.Router();
// add the student model
let Student = require('./schema');

studentRoute.use(express.static(__dirname+'/dist/Project'));
studentRoute.get('/show-list', function (req, res) {
    res.sendFile(__dirname+'/dist/Project/index.html');
});
studentRoute.get('/ecommerce-home', function (req, res) {
    res.sendFile(__dirname+'/dist/Project/index.html');
});
/// Get list of students
studentRoute.route('/list').get((req, res)=>{

  Student.find((err, stud)=>{
    if (err) 
        console.log(err);
     else 
        res.json(stud);  
                  
}).sort({ _id: -1 })
});


/// Get student by id
studentRoute.route('/get/:id').get((req, res)=>{
    let id = req.params.id;
    Student.findById(id, (err, myGetById)=>{
        if(err) return next(err);
        res.json(myGetById);
    });
});

/// Add student 
studentRoute.route('/add').post(function(req, res){
    // request to POST new object
    let student = new Student(req.body);
    student.save().then(stud => {
        //console.log(stud);        
        res.status(200).json({'students' : 'Student added successfuly!'});
    }).catch(err => {
        //console.log(err);
        res.status(400).send('Unable to add!');        
    });
});

/// Update student by id - POST or PUT
studentRoute.route('/update').put((req, res) => {
   Student.findById(req.body.studId, (err, doc) => {
    if(err) res.json(err);
    else {
    doc.studName = req.body.studName;
    doc.studFamily = req.body.studFamily;
    doc.save();
    res.json('Updated student successfuly!');
}
    });
});


/// Delete student by id
studentRoute.route('/remove/:id').delete((req, res) => {
    // delete based on id from database
    Student.findByIdAndDelete({_id:req.params.id}, (err) => {
        if(err) res.json(err);
        else res.json('Deleted student successfuly!');
    });
});
studentRoute.get('/*', function (req, res) {
    res.redirect('/');
});

module.exports = studentRoute;
