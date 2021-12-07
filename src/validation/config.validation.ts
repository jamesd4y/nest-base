import Joi from 'joi';

export const configValidation = Joi.object({
    EXAMPLE: Joi.string().required()
});
