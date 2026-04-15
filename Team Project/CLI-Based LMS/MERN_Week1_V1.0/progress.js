// Progress tracking module

// Mark lesson as completed
function completeLesson(enrolledCourses, userName, courseId, lessonName) {
    return new Promise((resolve, reject) => {

        // Find enrolled course
        const course = enrolledCourses.find(
            c => c.user === userName && c.id === courseId
        );

        if (!course) {
            return reject("You are not enrolled in this course");
        }

        // Check if lesson exists in course
        if (!course.totalLessons) {
            return reject("Invalid course data");
        }

        // Prevent duplicate lesson completion
        if (course.completed.includes(lessonName)) {
            return reject("Lesson already completed");
        }

        // Add lesson
        course.completed.push(lessonName);

        resolve(`Lesson "${lessonName}" marked as completed`);
    });
}


// Calculate progress %
function calculateProgress(course) {
    const completed = course.completed.length;
    const total = course.totalLessons;

    return ((completed / total) * 100).toFixed(2);
}


// Get progress summary for a user
function getProgress(enrolledCourses, userName) {

    const userCourses = enrolledCourses.filter(c => c.user === userName);

    return userCourses.map(course => ({
        title: course.title,
        completedLessons: course.completed,
        pendingLessons: course.totalLessons - course.completed.length,
        progress: calculateProgress(course) + "%"
    }));
}

module.exports = {
    completeLesson,
    calculateProgress,
    getProgress
};