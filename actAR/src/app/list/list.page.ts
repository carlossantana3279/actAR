import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<Story> = [];
  constructor(private router: Router) {
    this.getStories();
  }

  getStories(){
    //some API Call that would get info from database
    this.items.push(
      {
        id: 1,
        title: "The cat in the hat",
        author: "Dr. Suess",
        storyScript: ["This is line 1 of the Cat in the hat.", "This is line 2 dude.", "Line 3. A long time ago, in a galaxy far far away."],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        storyStarted: false
      }
    )

    this.items.push(
      {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R Tolkien ",
        storyScript: ["This is line 1.", "This is line 2 dude."],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        storyStarted: false
      }
    )
  }

  goToStory(event: any, id: number){

    //get story by id
    let story: Story = this.items.find(s => s.id == id);
    this.router.navigate(['story'], { 
      queryParams: 
      { 
        id: story.id, 
        title: story.title,
        storyScript: story.storyScript
      }
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
