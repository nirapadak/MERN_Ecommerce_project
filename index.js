const app = require('./app.js')
const port = process.env.PORT || 5000;



app.listen(port,  ()=> {
    console.log(`listening on http://localhost:${port}`);
    console.log(`database connected and listening on http://localhost:${port}`);
  })

  