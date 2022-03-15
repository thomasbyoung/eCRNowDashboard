import http from 'http'
import isPortReachable from 'is-port-reachable';

var today = new Date();

const obj = [{
    "backend": await isPortReachable(8981, {host: 'localhost'}),
    "frontend": await isPortReachable(3901, {host: 'localhost'}),
    "time": today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
}]  

    async function checkPort(){
        var backend_status = await isPortReachable(8981, {host: 'localhost'});
        var frontend_status = await isPortReachable(3901, {host: 'localhost'});
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(backend_status, frontend_status, time);
    }

    async function running(){
        var backend_status = await isPortReachable(8981, {host: 'localhost'});
        var frontend_status = await isPortReachable(3901, {host: 'localhost'});
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setTimeout(() => {
            console.log(`Backend = ${backend_status} at ${time}`)
            console.log(`Frontend = ${frontend_status} at ${time}`)

            if(`${backend_status}` === 'false' || `${frontend_status}` === 'false'){
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'aoc.devteam@gmail.com',
                      pass: 'kjf792HSv39!7vvsf081Miysp!'
                    }
                  });
                  
                  var mailOptions = {
                    from: 'tby.alliancechicago@gmail.com',
                    to: 'tyoung@alliancechicago.org',
                    subject: `eCRNow Status Warning`,
                    text: `Port: 8981 returned status ${backend_status} at ${time}, Port: 3901 return status ${frontend_status}.`
                  };
                  
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                    console.log("Email sent, next status check in 1 hour")
                    setTimeout(() => {running()}, 3600000);
                  });
            } else{
                running();
            }
          }, 5000);
        }
  
          checkPort();
          running();

   


const server = http.createServer((req, res) => {
    if(req.url === '/api/check' && req.method === 'GET') {
        res.setHeader("Access-Control-Allow-Origin", "*" );
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(obj))
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))




