export class Data {
  id: number;
  title: string;
  desciption: string;
  date: Date;

  constructor(id: number, title: string, des: string, date: Date) {
    this.id = id;
    this.desciption = des;
    this.title = title;
    this.date = date;
  }
}
