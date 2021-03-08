import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service'; 
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitter= faTwitter;
  faGithub = faGithub

  project: any[];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.projetService.get().subscribe(response => this.project = response["hydra:member"]);
  }

}
