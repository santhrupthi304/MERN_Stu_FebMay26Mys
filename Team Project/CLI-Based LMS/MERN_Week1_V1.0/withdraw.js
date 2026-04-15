//withdra file is using to withdraw the course
const emitter = require('../events/events');
const chalk = require('chalk');

// Withdraw from a course
function withdrawCourse(enrolledCourses, userName, courseId) {
    return new Promise((resolve, reject) => {

        // Find the course
        const courseIndex = enrolledCourses.findIndex(
            c => c.user === userName && c.id === courseId
        );

        //  If not enrolled
        if (courseIndex === -1) {
            const msg = chalk.red("You are not enrolled in this course");
            // emitter.emit("operationFailed", msg);
            return reject(msg);
        }

        //  Remove course
        const removedCourse = enrolledCourses.splice(courseIndex, 1)[0];

        // Success message
        const successMsg = chalk.green(
            `You have withdrawn from ${removedCourse.title}`
        );

        // Emit success event
        // emitter.emit("courseWithdrawn", successMsg);

        resolve(successMsg);
    });
}

module.exports = withdrawCourse;