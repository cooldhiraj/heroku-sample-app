
// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init({
    logInjection: true
});
var dd_options = {
    'response_code':true,
    'tags': ['app:heroku_express']
   }

const express = require('express')
const app = express()
var connect_datadog = require('connect-datadog')(dd_options);
const port = process.env.PORT || 3000;
app.use(connect_datadog);

app.get('/', (req, res) => {
  res.send('Hello World new!')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/html', (req, res) => {
    res.send('<a href="https://www.w3schools.com">Visit W3Schools.com!</a> ');
})

app.get('/redirect', (req, res) => {
    res.redirect(301, '/');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
