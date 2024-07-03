import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() postInput: any;

  username = '';
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';

    constructor() {
      const username = localStorage.getItem('username');
      if(username)
        this.username= username;
    }
}
