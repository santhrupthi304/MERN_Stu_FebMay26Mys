const readline = require('readline');
const chalk = require('chalk');

const courses = require('./data/courses');
const { enrollCourse, enrolledCourses, getUserEnrollments } = require('./modules/enroll');
const { completeLesson, getProgress } = require('./modules/progress');
const withdrawCourse = require('./modules/withdraw');
const { validateCourseId, validateLesson, validateMenuChoice } = require('./modules/validator');

// CLI setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(chalk.cyan(query), resolve));
}

async function main() {

    const userName = await askQuestion("Enter your name: ");
    console.log(chalk.green(`\nWelcome ${userName}!\n`));

    let menuAttempts = 0;

    while (true) {
        console.log(chalk.yellow(`
1. View Courses
2. Enroll in Course
3. My Courses
4. Complete Lesson
5. View Progress
6. Withdraw Course
7. Exit
`));

        const choice = await askQuestion("Choose: ");

        let validChoice;
        validateMenuChoice(choice, menuAttempts, (err, result) => {
            if (err) {
                console.log(chalk.red(err));
                menuAttempts++;
                if (menuAttempts >= 3) {
                    rl.close();
                }
            } else {
                validChoice = result;
                menuAttempts = 0;
            }
        });

        if (!validChoice) continue;

        switch (validChoice) {

            case "1":
                console.log(chalk.blue("\nAvailable Courses:"));
                courses.forEach(c => {
                    console.log(chalk.white(`${c.id}. ${c.title}`));
                });
                break;

            
            case "2":
                let attempts = 0;
                let selectedCourse;

                while (attempts < 3) {
                    const id = await askQuestion("Enter Course ID: ");

                    await new Promise(resolve => {
                        validateCourseId(id, courses, attempts, (err, course) => {
                            if (err) {
                                console.log(chalk.red(err));
                                attempts++;
                                resolve(); 
                            } else {
                                selectedCourse = course;
                                resolve();
                            }
                        });
                    });

                    if (selectedCourse) break;
                }

                if (!selectedCourse) break;

                try {
                    const msg = await enrollCourse(userName, selectedCourse);
                    console.log(chalk.green(msg));
                } catch (err) {
                    console.log(chalk.red(err));
                }
                break;

            case "3":
                const myCourses = getUserEnrollments(userName);

                if (myCourses.length === 0) {
                    console.log(chalk.red("No enrolled courses"));
                } else {
                    console.log(chalk.blue("\nMy Courses:"));
                    myCourses.forEach(c => {
                        console.log(chalk.white(`- ${c.title}`));
                    });
                }
                break;

            
            case "4":
                let cAttempts = 0;
                let validCourse;

                while (cAttempts < 3) {
                    const cId = await askQuestion("Enter Course ID: ");

                    await new Promise(resolve => {
                        validateCourseId(cId, courses, cAttempts, (err, course) => {
                            if (err) {
                                console.log(chalk.red(err));
                                cAttempts++;
                                resolve(); 
                            } else {
                                validCourse = course;
                                resolve();
                            }
                        });
                    });

                    if (validCourse) break;
                }

                if (!validCourse) break;

                let lAttempts = 0;
                let lessonName;

                while (lAttempts < 3) {
                    const lesson = await askQuestion("Enter Lesson Name: ");

                    await new Promise(resolve => {
                        validateLesson(validCourse, lesson, lAttempts, (err, validLesson) => {
                            if (err) {
                                console.log(chalk.red(err));
                                lAttempts++;
                                resolve(); 
                            } else {
                                lessonName = validLesson;
                                resolve();
                            }
                        });
                    });

                    if (lessonName) break;
                }

                if (!lessonName) break;

                try {
                    const msg = await completeLesson(enrolledCourses, userName, Number(validCourse.id), lessonName);
                    console.log(chalk.green(msg));
                } catch (err) {
                    console.log(chalk.red(err));
                }
                break;

            case "5":
                const progress = getProgress(enrolledCourses, userName);

                if (progress.length === 0) {
                    console.log(chalk.red("No enrolled courses"));
                } else {
                    console.log(chalk.blue("\nYour Progress:"));
                    progress.forEach(p => {
                        console.log(chalk.magenta(`
Course: ${p.title}
Completed: ${p.completedLessons.join(", ") || "None"}
Pending: ${p.pendingLessons}
Progress: ${p.progress}
`));
                    });
                }
                break;

            case "6":
                let wAttempts = 0;
                let withdrawCourseObj;

                while (wAttempts < 3) {
                    const wId = await askQuestion("Enter Course ID to withdraw: ");

                    await new Promise(resolve => {
                        validateCourseId(wId, courses, wAttempts, (err, course) => {
                            if (err) {
                                console.log(chalk.red(err));
                                wAttempts++;
                                resolve(); 
                            } else {
                                withdrawCourseObj = course;
                                resolve();
                            }
                        });
                    });

                    if (withdrawCourseObj) break;
                }

                if (!withdrawCourseObj) break;

                try {
                    const msg = await withdrawCourse(enrolledCourses, userName, Number(withdrawCourseObj.id));
                    console.log(chalk.green(msg));
                } catch (err) {
                    console.log(chalk.red(err));
                }
                break;

            case "7":
                console.log(chalk.green("Goodbye! 👋"));
                rl.close();
                return;
        }
    }
}

main();