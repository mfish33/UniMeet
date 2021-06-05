import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-desktop',
  templateUrl: './about-desktop.component.html',
  styleUrls: ['./about-desktop.component.scss'],
})
export class AboutDesktopComponent implements OnInit {

  public people:PersonCalc[] = people.map(v => ({angle:0,opacity:1,...v}))
  private peopleQueue:{angle:number, name:string}[] = JSON.parse(JSON.stringify(this.people))
  public topIndex = 0
  private angleAmount = 20

  constructor() {
    // get rid of displayed person
    this.peopleQueue.shift()
    this.calculateAngles()
  }

  public calculateAngles() {
    let even = (this.peopleQueue.length) % 2 == 0
    let maxAngle:number
    if(even) {
      maxAngle = (this.peopleQueue.length - 2) / 2 * this.angleAmount + this.angleAmount / 2
    } else {
      maxAngle = (this.peopleQueue.length - 1) / 2 * this.angleAmount
    }
    
    this.peopleQueue = this.peopleQueue.map((person, i) => {
      person.angle = maxAngle - i * this.angleAmount
      return person
    })
    
    let peopleQueueMap = this.peopleQueue.reduce((acc,curr) => {
      acc[curr.name] = curr.angle
      return acc
    }, {})

    this.people = this.people.map(person => {
      if(peopleQueueMap[person.name] != null) {
        person.opacity = 1
        if(person.angle % 180 == 0 && person.angle % 360 != 0) {
          person.angle = 360 + Math.floor(Math.abs(person.angle / 360)) * 360 + peopleQueueMap[person.name]
        } else {
          let rotateOffset = Math.round(person.angle / 360) * 360
          person.angle = peopleQueueMap[person.name] +  rotateOffset
        }
      } else {
        let n = Math.round(person.angle / 360)
        person.angle = (2*n + 1) * 180
        person.opacity = 0
        
      }
      return person
    })
  }

  public swap(index:number) {
    let person = this.people[index]
    let personInQueueIndex = this.peopleQueue.findIndex(p => p.name == person.name)
    if(personInQueueIndex == -1) {
      return
    }
    this.peopleQueue.splice(personInQueueIndex,1)
    this.peopleQueue.push(JSON.parse(JSON.stringify(this.people[this.topIndex])))
    this.topIndex = index
    this.calculateAngles()
  }

  ngOnInit(): void {
  }

}

interface PersonCalc extends Person {
  angle:number,
  opacity:number
}

interface Person {
  name:string
  title:string
  bio:string
  image:string
}

const people:Person[] = [
  {
    name:'Bella Yagid',
    title:'Lead Designer',
    bio:'I am a 2nd year Marketing student at Rutgers University. In my free time I like informing people about THEIR flaws.',
    image:'bellaYagid.png'
  },
  {
    name:'Max Fisher',
    title:'Founder',
    bio:'I am a 2nd year Mechanical Engineering student.',
    image:'maxFisher.png'
  },
  {
    name:'Bella Yagid3',
    title:'Lead Designer',
    bio:'I am a 2nd year Marketing student at Rutgers University. In my free time I like informing people about THEIR flaws.',
    image:'bellaYagid.png'
  },
  {
    name:'Bella Yagid4',
    title:'Lead Designer',
    bio:'I am a 2nd year Marketing student at Rutgers University. In my free time I like informing people about THEIR flaws.',
    image:'bellaYagid.png'
  },
  {
    name:'Bella Yagid5',
    title:'Lead Designer',
    bio:'I am a 2nd year Marketing student at Rutgers University. In my free time I like informing people about THEIR flaws.',
    image:'bellaYagid.png'
  },
  {
    name:'Bella Yagid6',
    title:'Lead Designer',
    bio:'I am a 2nd year Marketing student at Rutgers University. In my free time I like informing people about THEIR flaws.',
    image:'bellaYagid.png'
  }
]
