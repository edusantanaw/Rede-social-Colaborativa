import express from 'express';

export class Server {
    private app = express();
    private PORT: number = 3000 

    private middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
    }

    private start(){
        this.app.listen(this.PORT);    
    }

    public bootstrap(){
        this.middlewares();
        this.start();
    }
}