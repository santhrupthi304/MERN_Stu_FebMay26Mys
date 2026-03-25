// Directory(folder) operations: mkdir, readdir and rmdir/rm

const fs = require("fs");
const path = require("path");

const demoDir = path.join(__dirname,"demo.folder");
// to create folder
fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 content");

const entries = fs.readdirSync(demoDir);
console.log("Directory contents:",entries);

fs.rmSync(demoDir,{recursive:true, force:true});
console.log("Directory exists?",fs.existsSync(demoDir));