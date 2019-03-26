export class Post {
    title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title, content){
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.createdAt = new Date();
  }
}