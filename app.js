const express = require('express')
const app = express();
const PORT = process.env.port || 5000

app.get('/', (req, res) => {
    res.send("<h1>Hello World !!</h1>")
})

app.get('/api', (req, res) => {
    res.json({name:"John Doe", email:"johndoe@domainname.com", phone:"9999999999"})
})
app.listen(process.env.port || 5000, () => {
    console.log(`Application is listning the port ${PORT}`);
})