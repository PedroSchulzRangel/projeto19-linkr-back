import joi from "joi";

export const postSchema = joi.object({
    description: joi.string(),
    url: joi.string().uri().required()
})