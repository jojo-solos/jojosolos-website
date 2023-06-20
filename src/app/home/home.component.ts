import { Component, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import  Typed  from 'typed.js';
import { ClickGameComponent } from '../click-game/click-game.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  // title = 'jojosolos-website';
  image:any;
  link:any;
  intro:any;

  insideHeight:any;
  insideWidth:any;

  clicks:any;
  continuePlaying:Boolean = true;

  constructor(private route: ActivatedRoute, private router: Router,private title: Title, private meta: Meta) {

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

    this.title.setTitle("jojosolos website");
    this.meta.updateTag({name: "description", content: "The official jojosolos website, a central landing page where you can find links to anything jojosolos related!"});
  }

  merchClicked() {
    window.open("https://jojosolos-shop.fourthwall.com/");
  }

  gameClicked() {
    this.router.navigateByUrl("/game");
  }

  mediaClicked(type: any) {
    switch(type) {
      case 'twitch': {
        window.open("https://twitch.tv/jojosolos");
        break;
      }
      case 'youtube': {
        window.open("https://youtube.com/@jojosolos");
        break;
      }
      case 'youtube_vods': {
        window.open("https://youtube.com/@jojosolosVODS");
        break;
      }
      case 'twitter': {
        window.open("https://twitter.com/jojosoIos");
        break;
      }
      default: {
        break;
      }
    }
    
  }
}
