//  https://github.com/mafintosh/dns-packet

const dnsPacket = require("dns-packet");
const dgram = require("dgram");

const socket = dgram.createSocket("udp4");

socket.on("message", message => {
    console.log(dnsPacket.decode(message)) // prints out a response from google dns
});

const PORT = 53;
const HOST = "192.168.86.100";

socket.bind(PORT, HOST);