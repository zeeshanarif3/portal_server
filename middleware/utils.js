const jwt = require('jsonwebtoken');  // Ensure you're importing jwt
const moment = require('moment');  // Ensure you're importing moment
const config = require('../config/config').get(process.env.NODE_ENV);
const { secret, SERVERKEY } = config;

export const tokenGenerator = async (user) => {
  try {
    let payload = {};
    payload._id = user._id;
    payload.email = user.email;
    payload.role = user.role;

    // Generate JWT token
    let data = await jwt.sign(payload, secret.jwt, { expiresIn: '24h' });
    payload.token = data;
    payload.token_created_time = moment(new Date).format("YYYY-MM-DD, HH:mm:ss");
    payload.token_expire_time = moment(new Date).add(24, 'hours').format("YYYY-MM-DD, HH:mm:ss");

    return { status: true, token: payload };
  } catch (err) {
    return { status: false };
  }
}
