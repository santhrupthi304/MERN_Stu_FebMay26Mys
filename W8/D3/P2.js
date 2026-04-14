// Pre-save and post-save hooks
const mongoose = require("mongoose");

async function runSaveHookDemo(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        const articleSchema = new mongoose.Schema({
            title:String,
            category:String,
            tag:String,
        });
        articleSchema.pre("save",function(){
            this.title = this.title.trim();
            console.log("pre-save hook: title normalized before save");
        });
        articleSchema.post("save",function(){
            console.log("post-save hook: documnet save with title",doc.title);
        });
        const Article = mongoose.model.HookArticle || mongoose.model("HookArticle",articleSchema);

        const article = new Article({
            title:"     Understanding Hooks in mongoose     ",
            category: "database",
            tag: "save-hook-demo"
        });

        await article.save();

        await mongoose.connenction.close();
        console.log("Connection closed");
    }catch(error){
        console.log("save hook demo error:",error.message);
    }
}

runSaveHookDemo();