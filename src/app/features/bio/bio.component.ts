import { Component, OnInit } from '@angular/core';
import { BioService } from './services/bio.service';
import { Bio } from './models/bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}