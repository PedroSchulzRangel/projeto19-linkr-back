import Joi from "joi";

export const createPostSchema = joi.object({
    description: joi.string(),
    userId :joi.number().required(),
    linkUrl: joi.string().uri().required()
})