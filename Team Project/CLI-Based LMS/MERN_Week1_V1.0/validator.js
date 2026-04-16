// Validator module (callback-based)

// Validate Course ID
function validateCourseId(id, courses, attempts, callback) {
    const course = courses.find(c => c.id == id);

    if (!course) {
        if (attempts >= 3) {
            return callback("Maximum attempts reached. Exiting...", null);
        }
        return callback(`Invalid Course ID. Attempts left: ${3 - attempts}`, null);
    }

    callback(null, course);
}


// Validate Lesson Name
function validateLesson(course, lessonName, attempts, callback) {

    if (!course.lessons.includes(lessonName)) {
        if (attempts >= 3) {
            return callback("Maximum attempts reached. Exiting...", null);
        }
        return callback(`Invalid lesson name. Attempts left: ${3 - attempts}`, null);
    }

    callback(null, lessonName);
}


// Validate Menu Choice
function validateMenuChoice(choice, attempts, callback) {
    const validChoices = ["1", "2", "3", "4", "5", "6", "7"];

    if (!validChoices.includes(choice)) {
        if (attempts >= 3) {
            return callback("Too many invalid attempts. Exiting...", null);
        }
        return callback(`Invalid choice. Attempts left: ${3 - attempts}`, null);
    }

    callback(null, choice);
}

module.exports = {
    validateCourseId,
    validateLesson,
    validateMenuChoice
};