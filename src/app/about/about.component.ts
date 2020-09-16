import { Component, OnInit } from '@angular/core';
import { ILeader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";
import { expand, flyInOut } from "../animations/app.animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders:ILeader[];


  constructor(private leaderService:LeaderService) { }


  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe((leaders)=>this.leaders = leaders);
  }

}