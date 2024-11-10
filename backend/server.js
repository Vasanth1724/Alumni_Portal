const express = require('express')
const app = express()

const port = 3500

app.get("/api", (req, res) => {
    res.send("This is API");
})


app.listen(port, () => console.log(`Server listening on port ${port}`))