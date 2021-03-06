import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id : any
 flag =  true
  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public dataO) { 
      this.id = dataO.id
    }

  ngOnInit() {
  }
  onNoClick(data): void {

    this.dialogRef.close({flag : data , id : this.id});
    
  }
}
