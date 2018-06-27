const enviroment = {
  server: {
    port: process.env.SERVER_PORT || 3003
  },
  db:{
     url: 'mongodb://localhost/mymoneydb'
  }
};
module.exports = enviroment;
