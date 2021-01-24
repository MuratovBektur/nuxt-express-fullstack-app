import express from 'express';

const userRouter = express.Router()

userRouter.get('/',(req,res)=>{
    return res.json({users:null})
})


export default userRouter