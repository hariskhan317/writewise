import jwt from 'jsonwebtoken';

export const createToken = async (email, name) => {
    const payload = {email, name}
    const token = jwt.sign(payload, process.env.JWT_TOKEN)
    return token;
}