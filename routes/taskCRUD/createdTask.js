const express=require('express');
const router=express.Router();
const Task = require('../../models/task');

router.get('/:assignee', async (req, res) => {
        const {assignee} = req.params;
        try {
            const tasks=await Task.find({assignee:assignee})
            console.log(tasks,"tasks")
            res.status(200).json({message:tasks});
            return
        }
        catch (err) {
            console.log(err);
            res.status(500).json({error: 'Something went wrong'});
            return
        }
})

module.exports=router