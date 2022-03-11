import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { Author } from 'src/app/models/author';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  author: Author = this.initAuthor();
  constructor(public dialogRef: MatDialogRef<AddAuthorComponent>, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.author = this.initAuthor();
  }

  initAuthor(): Author{
    let date = new Date();
    return {
      name: 'A',
      birthDate: '2021-01-01',
      deathDate: null,
      gender: 'MALE'
    }
  }

  create(){
    console.log(this.author);
    this.author.birthDate = this.datePipe.transform(this.author.birthDate, 'yyyy-MM-dd')!!;
    this.dialogRef.close(this.author);
  }

  cancel(){
    console.log("CANCELEEE");
    this.dialogRef.close();
  }

}
