import { Injectable } from '@angular/core';
import { ILeader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<ILeader[]>{
    return Promise.resolve(LEADERS)
  }

  getLeader(id:string): Promise<ILeader>{
    return Promise.resolve(LEADERS.filter((leader)=> (leader.id === id))[0]);
  }

  getFeaturedLeader(): Promise<ILeader>{
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
