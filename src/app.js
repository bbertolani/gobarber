const express = require('express')
const router = require('./router')

class App{
    constructor() {
        this.server = express();
        this.middlewares();
        this.routers()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routers(){
        this.server.use(router)
    }
}

module.exports = new App().server