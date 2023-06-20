import User from '../models/User.js';

//update User

export const updateUser = async(req, res) => {

    const id = req.params.id;
    try{

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body,
        },
        {
            new: true,
        }
        );

        res.status(200).json({
            success: true, 
            message:'Successfully updated',
            data:updatedUser,
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to update.',
        });
    }
};

//delete a User

export const deleteUser = async(req, res) => {
    const id = req.params.id;
    try{

        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message:'Successfully deleted',
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to delete.',
        });
    }
};

export const getSingleUser = async(req, res) => {
    const id = req.params.id;
    try{

        const user = await User.findById(id);

        res.status(200).json({
            success: true, 
            message:'Successful',
            data:user,
        });

    }catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
    }
};

//get all Users

export const getAllUser = async(req, res) => {

    try{
        const users = await User.find({})

        res.status(200).json({
            success: true,
            message:'Successful',
            data:users,
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
    }
};