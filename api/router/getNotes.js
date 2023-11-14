import express from 'express'
import { addNote, deleteNote, getNotes, getNotesID, updateNote } from '../controller/gestNotes.js'


const router=express.Router()
router.get('/notes',getNotes)
router.get('/notes/:id',getNotesID)
router.post('/add',addNote);
router.put('/update/:id',updateNote);
router.delete('/delete/:id',deleteNote);

export default router;