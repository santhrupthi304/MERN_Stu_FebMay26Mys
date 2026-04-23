const showservice = require("../services/show.service");

// Create Show : admin
exports.createShow = async (req,res,next)=>{
    try{
        const show = await showservice.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"show created successfully",
            data:show
        });
    }
    catch(error){
        next(error);
    }
};

// Get Shows
exports.getShow = async (req,res,next)=>{
    try{
        const show = await showservice.getShow(req.query);
        res.status(200).json({
            success:true,
            message:"show fetched successfully",
            data:show
        });
    }
    catch(error){
        next(error);
    }
};

// Get Shows
exports.getShowById = async (req,res,next)=>{
    try{
        const show = await showservice.getShowById(req.query);
        res.status(200).json({
            success:true,
            message:"show fetched successfully",
            data:show
        });
    }
    catch(error){
        next(error);
    }
};

// update Show
// Get Shows
exports.updateShow = async (req,res,next)=>{
    try{
        const show = await showservice.updateShow(req.params.id,req.body);
        res.status(201).json({
            success:true,
            message:"show updated successfully",
            data:show
        });
    }
    catch(error){
        next(error);
    }
};

// Delete Shows
exports.deleteShow = async (req,res,next)=>{
    try{
        const show = await showservice.deleteShow(req.query);
        res.status(200).json({
            success:true,
            message:"show deleted successfully",
            data:show
        });
    }
    catch(error){
        next(error);
    }
};