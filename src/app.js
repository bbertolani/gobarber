import express from 'express'
import router from './router'

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

export default new App().server