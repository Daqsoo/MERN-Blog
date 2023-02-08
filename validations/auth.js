import {body} from 'express-validator';

export const registerValidation = [
    body('email','Wrong email format').isEmail(),
    body('password', 'Password should contain at least 5 characters').isLength({min: 5}),
    body('fullName', 'Name is required').isLength({min: 1}),
    body('avatarUrl', 'Wrond Img URL').optional().isURL(),
];