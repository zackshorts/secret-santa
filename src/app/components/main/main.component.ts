import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  participants = [];
  inputName = '';
  inputEmail = '';
  spouseName = '';
  spouseEmail = '';
  nameForm = new FormGroup({
    name: new FormControl(this.inputName, Validators.required),
    spouseName: new FormControl(this.spouseName),
    email: new FormControl(this.inputEmail, [Validators.required, Validators.email]),
    spouseEmail: new FormControl(this.spouseEmail, Validators.email),

  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addParticipant(name: string, email: string, spouseName?: string, spouseEmail?: string) {
    if(spouseName !== '' && spouseEmail !== '') {
      this.participants.push({
        name, email, spouseName,
      });
      this.participants.push({
        name: spouseName,
        email: spouseEmail,
        spouseName: name
      });
    } else {
      this.participants.push({
        name, email
      });
    }

  }

  sendEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*/*',
    });
    const options = {headers};
    const body = {
      subject: 'Secret Santa Assignments',
      name: this.inputName,
      to: this.inputEmail,
      from: 'santaclaus@gmail.com',
      message: 'you will be giving to '
    };
    return this.http.post('https://zacharyshorts-emailserver.herokuapp.com/sendsantaemail', body, options).subscribe();
  }
}
