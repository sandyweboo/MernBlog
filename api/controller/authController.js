import express from 'express';
import User from '../model/userModel.js';
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/error.js';
const saltRounds = 10;

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
       next(errorHandler(400,'All fields are required'))
       
    }else{
   
        const hashedPassword = await bcrypt.hash(password, saltRounds )
      try {
        const newuser = new User({
            username,
            email,
            password:hashedPassword,
        });
    
        await newuser.save();
        res.json("success");
      } catch (error) {
       next(error)
      }       
        
    }


};

export const singin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
     next(errorHandler(400,'All fields are required'))
  }else{
 
  } 
};

