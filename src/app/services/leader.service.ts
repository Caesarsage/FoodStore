import { Injectable } from '@angular/core';
import { ILeader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<ILeader[]>{
    return new Promise(resolve=>{
      setTimeout(()=> resolve(LEADERS), 2000)
    })
  }

  getLeader(id:string): Promise<ILeader>{
    return new Promise(resolve =>{
      setTimeout(()=>resolve(LEADERS.filter((leader)=> (leader.id === id))[0]),2000)
    })
  }

  getFeaturedLeader(): Promise<ILeader>{
    return new Promise(resolve=>{
      setTimeout(()=> resolve(LEADERS.filter((leader) => leader.featured)[0]),2000)
    })
  }
}
