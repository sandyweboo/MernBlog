import express from 'express';
import singup from '../controller/authController.js';

const router = express.Router();

router.get('/singup', singup)

router.get('/singin', singin)

export default router;