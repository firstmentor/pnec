 const StudentModel =require('../models/StudentModel')

class StudentController{
    //insert start
    static InsertStudent= async(req,res)=>{
        try{
            // console.log(req.body)
            const result = new StudentModel({
                ///secode way to data inserting
                title: req.body.title,
                desc: req.body.desc,
        });
        await result.save()
        res.status(201).json({
            status:"success",
            Message:"Registration success"
        })

    }catch(error){
            console.log(error)
        }
    }
//end insert

//display  all record start

static DisplayStudent= async(req,res)=>{
    try{
         const result = await StudentModel.find()
            res.status(200).json({
                success:true,
                result
     });
}catch(error){
        console.log(error)
    }
}

//display end
//view  single record start
static ViewStudent = async(req,res)=>{
    try{
        const result = await StudentModel.findById(req.params.id);
        res.status(200).json({
            success:true,
            result
    })}
    catch(error){
        console.log(error)
    }
}
//view end
//update start
static UpdateStudent = async(req,res)=>{
    try{
         const{title,desc}=req.body
        const result = await StudentModel.findByIdAndUpdate(req.params.id,{
            title:title,
            desc:desc
        })
         res.status(201).json({
            success:true,
            result
        })
      }catch(error){
        console.log(error)
    }
}

// update end
//delete start

 static DeleteStudent=async(req,res)=>{
    try {
        const result = await StudentModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        console.log(error)
        
    }
 }
//delete end
// edit start
static EditStudent=async(req,res)=>{
    try {
        const result = await StudentModel.findById(req.params.id)
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        console.log(error)
        
    }
 }

// edit end


}

module.exports=StudentController