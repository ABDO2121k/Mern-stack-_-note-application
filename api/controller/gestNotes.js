import Notes from "../models/Notes.js"




export const getNotes=async (req,res)=>{
    try{
        const data =await Notes.find({})
        if(!data) throw new Error("an error while fetching data")
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({error:"an error while fetching data"})
    }
}

// get notes by id


export const getNotesID=async (req,res)=>{
    try{
        const id=req.params.id
        const data =await Notes.findById(id)
        if(!data) throw new Error("an error while fetching data")
        res.status(201).json(data)
    }catch(err){
        res.status(500).json({error:"an error while fetching data"})
    }
}


// add


export const addNote= async (req,res)=>{

    try{
       const {title,description}=req.body;
        const data =await Notes.create({title:title,description:description})
        if(!data) throw new Error("an error while creating the note...")
        res.status(201).json(data)
    }catch(err){
        res.status(500).json({error:"an error while creating the note..."})
    }
}


//update
export const updateNote= async (req,res)=>{

    try{
    const id=req.params.id;
       const {title,description}=req.body;
        const data =await Notes.findByIdAndUpdate(id,{title,description})
        if(!data) throw new Error("an error while updating the note...")
        res.status(201).json('note updated with success')
    }catch(err){
        res.status(500).json({error:"an error while updating the note..."})
    }
}

// delete


export const deleteNote= async (req,res)=>{

    try{
        const id=req.params.id;
        const data =await Notes.findByIdAndDelete(id)
        if(!data) throw new Error("an error while deleting the note...")
        res.status(201).json('note deleted with success ')
    }catch(err){
        res.status(500).json({error:"an error while deleting the note..."})
    }
}