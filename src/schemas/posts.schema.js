import Joi from "joi";

export const createPostSchema = joi.object({
    description: joi.string(),
    url: joi.string().uri().required()
})