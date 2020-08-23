import { Injectable } from '@angular/core';
import { ILeader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): ILeader[]{
    return LEADERS
  }

  getLeader(id:string): ILeader{
    return LEADERS.filter((leader)=> (leader.id === id))[0];
  }

  getFeaturedLeader(): ILeader{
    return LEADERS.filter((leader) => leader.featured)[0]
  }
}
