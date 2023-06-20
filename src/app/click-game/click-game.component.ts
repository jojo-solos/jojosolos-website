import { Component, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.scss']
})
export class ClickGameComponent {
  image:any;
  link:any;
  intro:any;

  insideHeight:any;
  insideWidth:any;

  clicks:any;
  continuePlaying:Boolean = true;

  constructor(private title: Title, private meta: Meta, private router: Router) {

  }

  ngOnInit () {
    this.image = document.getElementById("myImage");
    this.link = document.getElementById("myLink");
    this.intro = document.getElementById("myIntro");
    // this.link.style.visibility = 'hidden';

    this.moveImage();

    this.insideHeight = window.innerHeight;
    this.insideWidth = window.innerWidth;

    this.clicks = 0;

    this.title.setTitle("jojosolos website");
    this.meta.updateTag({name: "The official jojosolos website, a central landing page where you can find links to anything jojosolos related!", content: "Links to twitch, youtube, merch website and a fun game by jojosolos"});
  
  }

  moveImage() {

    var x = Math.floor(Math.random() * this.insideWidth) - 100;
    var y = Math.floor(Math.random() * this.insideHeight) - 150;

    if(x < -60) x = x * -1;
    if(y < -103) y = y * -1;

    console.log("x: ", x, " y: ", y);

    if(this.image != null) {
      this.image.style.top =  y + "px";
      this.image.style.left = x + "px";
    }
    this.clicks++;
  }

  backButtonClick() {
    this.router.navigateByUrl("/home");
  }

  stopPlaying() {
    this.continuePlaying = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.insideHeight = window.innerHeight;
    this.insideWidth = window.innerWidth;
  }
}
