import {body} from 'express-validator';

export const registerValidation = [
    body('email','Wrong email format').isEmail(),
    body('password', 'Password should contain at least 5 characters').isLength({min: 5}),
    body('fullName', 'Name is required').isLength({min: 1}),
    body('avatarUrl', 'Wrond Img URL').optional().isURL(),
];

export const loginValidation = [
    body('email','Wrong email format').isEmail(),
    body('password', 'Password should contain at least 5 characters').isLength({min: 5}),
];

export const postCreateValidation = [
    body('title','Enter title').isLength({min:3}).isString(),
    body('text', 'Enter at least 10 characters').isLength({min: 10}).isString(),
    body('tags', 'Wrong tag format').optional().isString(),
    body('imageUrl', 'Wrond Img URL').optional().isString(),
];
