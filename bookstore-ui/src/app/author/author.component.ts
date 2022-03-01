import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birthDate', 'deathDate', 'gender'];
  authors: Author[] = [];
  public dataSource = new MatTableDataSource<Author>();
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    // this.authors = [
    //   {
    //     name: 'Marco',
    //     birthDate: new Date()
    //   },
    //   {
    //     name: 'Mihai',
    //     birthDate: new Date()
    //   }
    // ]
    this.authorService.listAuthors().subscribe(
      response => {this.authors = response;
      console.log(this.authors);
      this.dataSource.data = this.authors;}
    );
  }

}
