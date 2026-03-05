import express from 'express';
import { upload } from '../middleware/upload.js';
import { uploadResume, analyzeResume, getUserResumes, deleteResume } from '../controllers/resumeController.js';
import { handleGenerateResume, handleGenerateCoverLetter, handleEmailResume } from '../controllers/generatorController.js';

const router = express.Router();

// Upload a resume
router.post('/upload', upload.single('resume'), uploadResume);

// Analyze an uploaded resume
router.post('/analyze/:id', analyzeResume);

// Get all resumes for user
router.get('/all', getUserResumes);

// Delete a resume
router.delete('/:id', deleteResume);

// ─── Resume Generator ─────────────────────────────────────────────────────────
router.post('/generate', handleGenerateResume);
router.post('/cover-letter', handleGenerateCoverLetter);
router.post('/email', handleEmailResume);

export default router;
