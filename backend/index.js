import isPortReachable from 'is-port-reachable';
import express from 'express';
//import nodemailer from 'nodemailer';


const app = express()
const port = 5000


    // async function checkPort(){
    //     var backend_status = await isPortReachable(8981, {host: 'localhost'});
    //     var frontend_status = await isPortReachable(3901, {host: 'localhost'});
    //     var today = new Date();
    //     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     console.log(backend_status, frontend_status, time);
    // }

    // async function running(){
    //     var backend_status = await isPortReachable(8981, {host: 'localhost'});
    //     var frontend_status = await isPortReachable(3901, {host: 'localhost'});
    //     var today = new Date();
    //     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     setTimeout(() => {
    //         console.log(`Backend = ${backend_status} at ${time}`)
    //         console.log(`Frontend = ${frontend_status} at ${time}`)

    //         if(`${backend_status}` === 'false' || `${frontend_status}` === 'false'){
    //             var transporter = nodemailer.createTransport({
    //                 service: 'gmail',
    //                 auth: {
    //                   user: 'aoc.devteam@gmail.com',
    //                   pass: 'kjf792HSv39!7vvsf081Miysp!'
    //                 }
    //               });
                  
    //               var mailOptions = {
    //                 from: 'tby.alliancechicago@gmail.com',
    //                 to: 'tyoung@alliancechicago.org',
    //                 subject: `eCRNow Status Warning`,
    //                 text: `Port: 8981 returned status ${backend_status} at ${time}, Port: 3901 return status ${frontend_status}.`
    //               };
                  
    //               transporter.sendMail(mailOptions, function(error, info){
    //                 if (error) {
    //                   console.log(error);
    //                 } else {
    //                   console.log('Email sent: ' + info.response);
    //                 }
    //                 console.log("Email sent, next status check in 1 hour")
    //                 setTimeout(() => {running()}, 3600000);
    //               });
    //         } else{
    //             running();
    //         }
    //       }, 5000);
    //     }
  
    //       checkPort();
    //       running();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

console.log(await isPortReachable(8981, {host: 'localhost'}));