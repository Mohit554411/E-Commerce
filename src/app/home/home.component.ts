import { Component } from '@angular/core';
import {faTag,faBox,faCopyright,faTrophy} from '@fortawesome/free-solid-svg-icons';
interface carouselImages{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  offerIcon = faTag;
  delievryIcon = faBox;
  collectionIcon = faCopyright;
  OneIcon = faTrophy
  images: carouselImages[]=[
    {
      imageSrc:
        'https://c1.wallpaperflare.com/preview/466/330/389/liquor-bottles-alcohol-drink.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
      'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?cs=srgb&dl=pexels-chris-f-1283219.jpg&fm=jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
      'https://images.squarespace-cdn.com/content/v1/59dfa74529f18710fd655ba5/1508875122270-C5HSK0APCOTBHYHXLF5H/Bar+Front+.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
      'https://w0.peakpx.com/wallpaper/111/559/HD-wallpaper-whiskey-alcohol-bar-bottles-cool-drinks-new-scotch.jpg',
      imageAlt: 'person2',
    },
  ];
  indicators = true;
  autoslide = true;
  slideInterval = 3000;
  seletedIndex = 0;
  ngOnInit():void{
    if(this.autoslide){
      this.autoSlideImage();
    }
  }
  autoSlideImage():void{
    setInterval(()=>{
      this.nextImage();
    },this.slideInterval)
  }
  selectImage(index:number){
    this.seletedIndex = index;
  }
  nextImage():void{
    if(this.seletedIndex === this.images.length -1){
      this.seletedIndex = 0;
    }
    else{
      this.seletedIndex++;
    }
  }

}
