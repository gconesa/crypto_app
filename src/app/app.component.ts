import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  animOpenMenu: Animation;
  animCloseMenu: Animation;
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'stats-chart' },
    { title: 'Transactions', url: '/transactions', icon: 'sync' },
    { title: 'Exchanges', url: '/exchanges', icon: 'repeat' },
    { title: 'History', url: 'history', icon: 'newspaper' },
  ];
  selected = 'dashboard';

  @ViewChild('main', {static: false}) main: ElementRef;
  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animOpenMenu = this.animationCtrl.create('mainAnim');
    this.animOpenMenu
    .addElement(this.main.nativeElement)
    .duration(500)
    .easing('ease-in')
    .beforeStyles({
      'z-index': 9999
    })
    .fromTo('width', '100%','80%')
    .to('borderRadius', '35px')
    .to('height', '90%')
    .to('zoom', '0.5')
    .to('transform','translate(105%,5%)')

    this.animCloseMenu = this.animationCtrl.create('mainAnim');
    this.animCloseMenu
    .addElement(this.main.nativeElement)
    .duration(300)
    .easing('ease-out')
    
    .to('borderRadius', '0px')
    .fromTo('width', '80%','100%')
    .to('height', '100%')
    .to('zoom', '1')
    .to('transform','translate(0%,0%)')

   
  }

  async menuWillOpen() {
    await this.animOpenMenu.play();
    this.animCloseMenu.stop();
  }

  async menuWillClose() {
    await this.animCloseMenu.play();
    this.animOpenMenu.stop();
  }
}

//zoom: 0.6;
//     width: 80%;
//     transform: translateX(100%);
//     max-height: 71%;
//     border-radius: 35px;
//     margin-top: 1%;