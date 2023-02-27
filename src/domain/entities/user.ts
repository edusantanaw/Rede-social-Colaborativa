
export class User {
    private name!: string;
    private email!: string;
    private password!: string;
    private id!: string;

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    
    public getName(): string{
        return this.name;
    }

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }
    public getId(){
        return this.id;
    }

    public setName(name: string){
        this.name = name;
    }

    public setPassword(password: string){
        this.password = password;
    }

    public setEmail(email: string){
        this.email = email;
    }


}