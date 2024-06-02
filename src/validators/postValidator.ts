import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        "number.pattern":"only number 1-10",
        "number.required":"userId is required"
    }),
    title: Joi.string().pattern(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/).min(5).max(50).required().messages({
        "string.pattern.base":"only words",
        "string.required.base":"title is required",
        "string.min.base":"minimum letters = 5",
        "string.max.base":"maximum letters = 50",
    }),
    body: Joi.string().pattern(/^[^\d]+$/).min(5).max(500).required().messages({
        "string.pattern.base":"not number",
        "string.required.base":"body is required",
        "string.min.base":"minimum letters = 5",
        "string.max.base":"maximum letters = 500",
    })
})
