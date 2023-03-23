//console.log(process.argv);
/* const foo = process.argv[2];
const user = process.env.USER;
console.log(foo);
console.log(user);
 */
require('dotenv').config();
const express = require('express');
const server = express();

const port = process.env.PORT || 3000;

server.get('/merhaba', (req,res)=> {
    res.status(200).json(process.env.MESSAGE || 'Merhaba...');
})

server.listen(port, ()=> {
    console.log(`server listening on port ${port}`);
})