import { MoviedbService } from './moviedb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  constructor(private service: MoviedbService) { }

  ngOnInit(): void {

  }

}
