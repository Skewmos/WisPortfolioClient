import { ProjetService } from './../projet.service';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faInstagram = faInstagram;
  faTwitter= faTwitter;
  faGithub = faGithub

  project: any[];
  ProjetSearch: any[];
  categories: any[];
  id: number;

  constructor(private projetService: ProjetService, private CategoryService: CategoryService) { }
  
  ngOnInit(): void {
    this.projetService.get().subscribe(response => this.project = response["hydra:member"]);
    this.CategoryService.get().subscribe(response => this.categories = response["hydra:member"]);
  }
  
}
