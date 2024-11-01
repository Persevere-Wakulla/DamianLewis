import express from 'express'

// Create our container for our sever
const app = express();

// get listening for GET request
// (route, (req,res))
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
app.get('/', (req, res) => {
    // API 
    res.status(200).json({
      finn: {
        summary: 'hes the hero of the story',
        fullName: 'Finn Mertins',
        age: 18,
        quote: 'Mathemathical!',
        weakness: 'afraid of the ocean',
      },
      jake: {
        summary: 'hes the hero"s best friend of the story',
        fullName: 'Jake the Dog',
        age: 53,
        quote: 'Sucking is the first step of getting sort of good at something',
        weakness: 'if he stretches too far',
      },
    });

    app.get('/finn', (req, res) => {
        res.status(200).json({
          finn: {
            summary: 'hes the hero of the story',
            fullName: 'Finn Mertins',
            age: 18,
            quote: 'Mathemathical!',
            weakness: 'afraid of the ocean',
          },
        });
    })

})



const port = 3000
// Start our server/listen
app.listen(port, ()=> {
    console.log(`your server is up on port ${port} http://localhost:${port}`)
})