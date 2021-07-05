export class News {
  // tslint:disable-next-line:variable-name
  news_id: number;
  title: string;
  date: string;
  description: string;
  url: string;


  constructor(title: string, date: string, description: string, url: string) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.url = url;
  }
}
