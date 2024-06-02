require('dotenv').config(); // this is added to load variables from .env to process.env
export const email = process.env.EMAIL
export const emailPassword = process.env.EMAIL_PASSWORD