// This system can be used to send UDP packets from 1 device to another via the network.

// NOTE:    Because of how UDP works, both systems need to be on the same network. 
//          If you want to send packets to outside networks, you can use your routers port forwarding feature

const config = require('./config.json')
const readline = require('readline')    // This is used for cmdline input.
const UDP = require('dgram')            // This is used for the UDP sending and receiving.

const UDPclient = UDP.createSocket('udp4') 
const hostname = config.hostname
const port = config.port

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let udpMessage = "";

rl.question("Please enter the UDP message: ", function (string) {
    udpMessage = string;
  
    UDPclient.on('message', (message, info) => {
        // get the information about server address, port, and size of packet received.
    
        console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size)
    
        //read message from server
    
        console.log('Message from server:', message.toString())
    })
    
    const packet = Buffer.from(`${udpMessage}`)
    
    UDPclient.send(packet, port, hostname, (err) => {
        if (err) {
            console.error('Failed to send packet !!')
        } else {
            console.log('Packet send !!')
       }
    })
  
    // close input stream
    rl.close();
  });