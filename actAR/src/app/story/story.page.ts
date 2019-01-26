import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  public title: string;
  public storyScript: Array<string>;
  public currentLine: string;
  public wordsInLine: Array<string>;
  public lineIndex: number;

  constructor(private route: ActivatedRoute) {
    this.lineIndex = 0;
  }

  ngOnInit() {
    this.title = this.route.snapshot.queryParams.title;
    this.storyScript = this.route.snapshot.queryParams.storyScript;
    this.currentLine = this.storyScript[this.lineIndex];
  }

  nextLine(){
    this.lineIndex++;
    this.currentLine = this.storyScript[this.lineIndex];
    this.wordsInLine = this.currentLine.split(' ');
  }
}
