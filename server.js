const express = require('express')
const app = express()
const PORT = 8383

let data = ['Brian']


app.use(express.json())

app.get('/', (req,res) => {
    res.send(`
        <body
            style="background:grey;
            color: yellow;">
            <h1>DATA:</h1>
                <p>${JSON.stringify(data[0])}</p>
                <a href="/dashboard">Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) =>
{
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/">Home</a>
        </body>
        `)
})

app.get('/api/data', (req,res) => {
    console.log('This one was for data')
    res.statussend(data)
})

app.post('/api/data', (req,res) =>
{
    const newEntry = req.body
    console.log(newEntry)
    data.push (newEntry.name)
    res.sendStatus(201)
    
})

app.delete('/api/data', (req,res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))

