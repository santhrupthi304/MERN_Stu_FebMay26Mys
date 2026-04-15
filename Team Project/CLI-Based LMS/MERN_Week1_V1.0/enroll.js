const emitter = require('../events/events');


let enrolledCourses = [];

// Enroll function (Promise-based)
function enrollCourse(userName, course) {
    return new Promise((resolve, reject) => {

        // Emit event: enrollment started
        // emitter.emit("enrollmentStarted", course.title);

        setTimeout(() => {

            //  Check duplicate enrollment
            const alreadyEnrolled = enrolledCourses.find(
                c => c.id === course.id && c.user === userName
            );

            if (alreadyEnrolled) {
                emitter.emit("operationFailed", "Already enrolled in this course");
                return reject("You are already enrolled in this course");
            }

            //  Check seat availability
            const count = enrolledCourses.filter(c => c.id === course.id).length;

            if (count >= course.maxSeats) {
                emitter.emit("operationFailed", "No seats available");
                return reject("Course is full");
            }

            //  Create enrollment object
            const enrollment = {
                user: userName,
                id: course.id,
                title: course.title,
                enrolledAt: new Date(),
                completed: [],
                totalLessons: course.lessons.length
            };

            // Save enrollment
            enrolledCourses.push(enrollment);

            // Emit success event
            // emitter.emit("enrollmentConfirmed", course.title);

            resolve(`Successfully enrolled in ${course.title}`);

        }, 500); // simulate async delay
    });
}

// Get all enrolled courses for a user
function getUserEnrollments(userName) {
    return enrolledCourses.filter(c => c.user === userName);
}

module.exports = {
    enrollCourse,
    getUserEnrollments,
    enrolledCourses
};