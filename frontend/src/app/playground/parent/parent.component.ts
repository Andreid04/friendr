import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    
  ];

  title: string = '';
  description: string = '';

  createPost(){
    console.log(this.title);
    console.log(this.description);

    const addPost = {
      id: Math.floor(Math.random()*100),
      date: new Date(),
      user_id: Math.floor(Math.random()*100),
      title: this.title,
      description: this.description,
    }
    this.posts.push(addPost);
  }
}
