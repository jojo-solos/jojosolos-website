import { Component, HostListener } from '@angular/core';
import  Typed  from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'jojosolos-website';
  image:any;
  link:any;
  intro:any;

  insideHeight:any;
  insideWidth:any;

  clicks:any;
  continuePlaying:Boolean = true;

  constructor() {

  }

  ngOnInit () {
    var typed = new Typed(".auto-type", {
      strings: ["meow", "meOw"],
      typeSpeed: 150,
      backSpeed: 200,
      loop: true
    });

    var typed2 = new Typed(".auto-type-link", {
      strings: ["jojosolos", "bea", "joj0"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    this.image = document.getElementById("myImage");
    this.link = document.getElementById("myLink");
    this.intro = document.getElementById("myIntro");
    // this.link.style.visibility = 'hidden';

    this.moveImage();

    this.insideHeight = window.innerHeight;
    this.insideWidth = window.innerWidth;

    this.clicks = 0;
  }

  moveImage() {
    if(this.clicks == 10) {
      window.open("https://www.twitch.tv/jojosolos");
      this.stopPlaying();
    }

    var x = Math.floor(Math.random() * this.insideWidth) - 75;
    var y = Math.floor(Math.random() * this.insideHeight) - 120;

    console.log("x: ", x, " y: ", y);

    if(this.image != null) {
      this.image.style.top =  y + "px";
      this.image.style.left = x + "px";
    }
    this.clicks++;
  }

  stopPlaying() {
    this.continuePlaying = false;

    this.image.style.visibility = 'hidden';
    // this.intro.style.visibility = 'hidden';
    // this.link.style.visibility = 'visible';

    //enable a "Continue?" button
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.insideHeight = window.innerHeight;
    this.insideWidth = window.innerWidth;
  }
}
