import express from 'express';

export class Server {
    private app = express();
    private PORT: number = 3000 

    private middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
    }

    private start(){
        const cb = () => console.log(`Server running at ${this.PORT}`)
        this.app.listen(this.PORT, cb);    
    }

    public bootstrap(){
        this.middlewares();
        this.start();
    }
}