var jack = require("dnsjack").createServer();

jack.route([ "*.kiszkabuddha.com" ], "192.168.86.100");
jack.on("resolve", function(data) {
	console.log(data.rinfo.address, "is resolving", data.domain);
});
jack.listen();