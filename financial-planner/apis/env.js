const env = { 
  development: {
    baseURL:'http://127.0.0.1:5550'
  },
  test: {
    baseURL:'http://127.0.0.1:5551'
  },
  joint: {
    baseURL:'http://127.0.0.1:5552'
  },
  production: {
    baseURL:'http://127.0.0.1:5553'
  }
};

// console.log( env[process.env.ENV_NAME || process.env.NODE_ENV] )

export default env[process.env.ENV_NAME || process.env.NODE_ENV]
