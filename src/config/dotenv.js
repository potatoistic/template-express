import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

// Export the config
const env = {
  NODE_PORT: process.env.PORT || 3000,
};

export default env;
