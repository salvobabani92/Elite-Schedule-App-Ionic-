import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { StandingPage } from '../standing/standing';
import { MyTeamsPage } from '../my-teams/my-teams';



@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public team: any = {};
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
    //this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }

}
