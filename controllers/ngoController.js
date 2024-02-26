import ngoModel from "../models/ngoModel.js";

export const ngodetailsController=async(req,res)=>{
    try{
        const perPage = 10;
        const page=req.params.page?req.params.page:1;
        const ngo=await ngoModel
        .find({})
        .select("-pan")
        .select("-password")
        .skip(perPage*(page-1))
        .limit(perPage)
        .sort({createdAt:-1});
        res.status(200).send({
            success:true,
            ngo,
        });

    }
    catch(error){
        console.log(error);
        res.status(400).send({
          success: false,
          message: "error in per page ctrl",
          error,
        });
    }
};

export const ngosearchcitycontroller=async(req,res)=>{
    try{
        const perPage = 10;
        const page=req.params.page?req.params.page:1;
        const searchcity=req.params.citySearch;
        if(searchcity.length<1){
            const ngo=await ngoModel
            .find({})
            .select("-pan")
            .select("-password")
            .skip(perPage*(page-1))
            .limit(perPage)
            .sort({createdAt:-1});
            res.status(200).send({
                success:true,
                ngo,
            });
        }
        else{
        const ngo=await ngoModel
        .find({
            city: { $regex: searchcity, $options: "i" } ,
        })
        .select("-pan")
        .select("-password")
        .skip(perPage*(page-1))
        .limit(perPage)
        .sort({createdAt:-1});
        res.status(200).send({
            success:true,
            ngo,
        });
    }
    }
    catch(error){
        console.log(error);
        res.status(400).send({
          success: false,
          message: "error in per page ctrl",
          error,
        });
    }
}