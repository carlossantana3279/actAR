export class Story {

    public id: number;
    public title: string;
    public author: string;
    public storyScript: Array<string>;
    public icon: string;
    public storyStarted: boolean;

    constructor(theId: number, theTitle: string, theAuthor: string, theScript: string[], theIcon: string, storyStarted: boolean) {
        this.id = theId;
        this.title = theTitle;
        this.author = theAuthor;
        this.storyScript = theScript;
        this.icon = theIcon;
        this.storyStarted = storyStarted;
    }
}