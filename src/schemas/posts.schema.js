import joi from "joi";

export const postSchema = joi.object({
    userId: joi.number().required(),
    description: joi.string().required(),
    linkUrl: joi.string().uri().required()
})