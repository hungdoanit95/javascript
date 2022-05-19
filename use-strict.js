"use strict";

var course = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'PHP'
    },
    {
        id: 3,
        name: 'Html/Css'
    }
];
var courseHandle = (course)=>{
    var {id_new,name_new} = course;
    return {
        id: id_new,
        name: 'Khoá học ' + name_new,
    };
}
const newCourse = course.map(courseHandle);
console.log(newCourse);
