export class Message{
    title:string;
    content:string;
    id?:any

    constructor(title:string,content:string,id:any)
    {
       this.content = content;
       this.title = title;
       this.id = id;
    }
}