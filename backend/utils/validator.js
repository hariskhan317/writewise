// import { req, res, next } from "express";
import { body, ValidationResult } from 'express-validator'

// validations in validationChain
export const validate = (validations) => {
    // returning async function
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty) {
                break;
            }
            const errors = ValidationResult(req);
            if (errors.isEmpty) {
                return next();
            }
            return res.status(422).json({errors: errors.array()})
        }
    }
}

export const loginValidator = [
    body('email')
        .notEmpty().withMessage("Email is Required")
        .isEmail().withMessage("Invalid Email"),
    body('password')
        .notEmpty().withMessage("password is Required")
        .isLength({min: 5}).withMessage("Password must be at least 6 characters long"),
]

export const signinValidator = [
    body('name').notEmpty().withMessage("Name is Required"),
    ...loginValidator,
]