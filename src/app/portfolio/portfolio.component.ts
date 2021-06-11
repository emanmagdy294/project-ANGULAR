
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  projectInfo: any = {};

  projects = [
    {
      name: 'LOG CABIN',
      imgSrc: 'assets/cabin.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 1,
    },
    {
      name: 'TASTY CAKE',
      imgSrc: 'assets/cake.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 2,
    },
    {
      name: 'CIRCUS TENT',
      imgSrc: 'assets/circus.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 3,
    },
    {
      name: 'CONTROLLER',
      imgSrc: 'assets/game.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 4,
    },
    {
      name: 'LOCKED SAFE',
      imgSrc: 'assets/safe.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 5,
    },
    {
      name: 'SUBMARINE',
      imgSrc: 'assets/submarine.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      id: 6,
    },
  ];

  getProjectInfo(id: number) {
    let selectedProject = this.projects.filter((project) => {
      return project.id == id;
    });
    this.projectInfo = selectedProject[0];
    console.log('projectInfo2: ', this.projectInfo);
  }

  ngOnInit(): void {}
}
