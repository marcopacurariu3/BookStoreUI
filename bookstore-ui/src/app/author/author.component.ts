import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddAuthorComponent } from './add-author/add-author/add-author.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birthDate', 'deathDate', 'gender'];
  authors: Author[] = [];
  public dataSource = new MatTableDataSource<Author>();
  constructor(private authorService: AuthorService,
    private dialog: MatDialog) {
  }

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
    // this.authorService.listAuthors().subscribe(
    //   response => {this.authors = response;
    //   console.log(this.authors);
    //   this.dataSource.data = this.authors;}
    // );
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.listAuthors().subscribe(
      response => {
        this.authors = response;
        console.log(this.authors);
        this.dataSource.data = this.authors;
      }
    );
  }

  createAuthor(author: Author) {
    this.authorService.createAuthor(author).subscribe(
      response => this.loadAuthors()
    );
  }

  createAuthorForm(): void {
    let dialogRef = this.dialog.open(AddAuthorComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result !== null) {
          this.createAuthor(result);
        }
      }
    )

    //dialogRef.close();
  }

}
