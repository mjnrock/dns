//  https://sudonull.com/post/254-DNS-proxy-on-NodeJS-do-it-yourself

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

(function () {
    server.on("error", (err) => {
        console.log(`server error:\n${err.stack}`);
        server.close();
    });

    server.on("message", async (localReq, linfo) => {
        console.log(linfo);
        // console.log(localReq);
    });

    server.on("listening", () => {
        const address = server.address();
        console.log(`server listening ${address.address}:${address.port}`);
    });

    const PORT = 53;
    const HOST = "192.168.86.100";

    server.bind(PORT, HOST);
}());