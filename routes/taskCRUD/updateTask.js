const express=require('express');
const router=express.Router();
const Task=require('../../models/task');

router.put('/:id', async (req, res) => {
    const { id } = req.params; // 'id' is a string here
    console.log(id,"id")
    try {
        // const {username}=req.body
        // const user=await Task.find(body);
        const updatedDocument = await Task.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        );
        console.log(updatedDocument,"updatedDocument")
        if (!updatedDocument) {
            return res.status(404).json({ error: 'Document not found' });
          }
      
        res.json(updatedDocument);
        // res.send('Hello World');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;