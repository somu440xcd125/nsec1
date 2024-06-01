import { randomBytes } from 'crypto';

const generateToken = () => {
    return randomBytes(20).toString('hex');
};

export default generateToken;
