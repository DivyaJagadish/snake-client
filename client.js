const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on("data",function(message){
    console.log("Received :", message)
 })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("connect",function(){
  console.log("Successfully connected to game server");
  conn.write('Name: ABC');
  // conn.write('Say: qwe');
  // conn.write('Move: up' );
  })
  

  return conn;
}



module.exports =connect;