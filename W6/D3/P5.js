// Renaming, deleting and checking the file existence

const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname,"draft-report.txt");
const renamePath = path.join(__dirname,"final-report.txt");

fs.writeFileSync(originalPath,"Draft report content");
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));

// Rename the file
fs.renameSync(originalPath,renamePath);
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));

// Delete the file
fs.unlinkSync(renamePath);
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));