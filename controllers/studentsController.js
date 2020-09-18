const STUDENT = require('../model/student');

//Create student
function createStudent(req,res){
    let student = new STUDENT();
    let params = req.body;
    student.name = params.name;
    student.lastName = params.lastName;
    student.age = params.age;
    student.email = params.email;
    student.direction = params.direction;
    student.phone = params.phone;
    student.save((err, newStudent)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!newStudent){
                res.status(200).send({message: "No fue posible realizar el registro del nuevo estudiante"});
            } else {
                res.status(200).send({
                    status: 'Estudiante creado',
                    tasks: newStudent
                })
            }
        }
    })
}
//Get student
function getStudent(req, res){
    STUDENT.find((err, findStudent) => {
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!findStudent){
                res.status(200).send({message: "No fue posible encontrar el estudiante"});
            } else {
                res.status(200).send({
                    status: 'Estudiante Encontrado',
                    tasks: findStudent
                })
            }
        }
    })
}
//update Task
function updateStudent(req,res){
    let StudentId = req.params.id;
    let newDataStudent = req.body;
    STUDENT.findByIdAndUpdate(StudentId, newDataStudent, (err, updateDataStudent)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!updateDataStudent){
                res.status(200).send({message: "No fue posible actualizar información del estudiante"});
            } else {
                res.status(200).send({
                    status: 'Información de estudiante Actualizada',
                    taks: newDataStudent
                })
            }
        }
    })
}
//delete Task
function deleteStudent(req,res){
    let StudentId = req.params.id;
    STUDENT.findByIdAndDelete(StudentId,(err, deteleDataStudent)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!deteleDataStudent){
                res.status(404).send({message: "No fue posible eliminar la información del estudiante"});
            } else {
                res.status(200).send({
                    status: 'Información del estudiante eliminada',
                    tasks: deteleDataStudent
                })
            }
        }
    })
}
//Export the function
module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}