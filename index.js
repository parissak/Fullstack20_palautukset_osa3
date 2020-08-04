const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body' ))
app.use(express.static('build'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 4
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "abs as",
        number: "111",
        id: 6
    },

]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const date = new Date().toUTCString()
    response.send(`<p> Phonebook has info for ${persons.length} people <pp>
    <p> ${date} </p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    if (!request.body.name || !request.body.number) {
        return response.status(404).json({
            error: 'name or number missing'
        })
    }

    if (persons.find(p => p.name === request.body.name)) {
        return response.status(404).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: request.body.name,
        number: request.body.number,
        id: Math.floor(Math.random() * (1000) + 1)
    }
    persons = persons.concat(person)

    response.json(person)
})
 
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})