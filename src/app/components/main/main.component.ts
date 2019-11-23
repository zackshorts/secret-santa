import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  participants = [];
  shuffledParticipants = [];
  pairedParticipants = [];
  inputName = "";
  inputEmail = "";
  spouseName = "";
  spouseEmail = "";
  nameForm = new FormGroup({
    name: new FormControl(this.inputName, Validators.required),
    spouseName: new FormControl(this.spouseName),
    email: new FormControl(this.inputEmail, [
      Validators.required,
      Validators.email
    ]),
    spouseEmail: new FormControl(this.spouseEmail, Validators.email)
  });

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  addParticipant(
    name: string,
    email: string,
    spouseName?: string,
    spouseEmail?: string
  ) {
    if (spouseName !== null && spouseEmail !== null) {
      this.participants.push({
        name,
        email,
        spouseName
      });
      this.participants.push({
        name: spouseName,
        email: spouseEmail,
        spouseName: name
      });
    } else {
      this.participants.push({
        name,
        email,
        spouseName: ""
      });
    }
    this.nameForm.reset();
  }

  makePairs() {
    for (let i = 0; i < this.participants.length; i++) {
      if (i !== this.participants.length - 1) {
        this.pairedParticipants.push({
          giver: this.shuffledParticipants[i],
          receiver: this.shuffledParticipants[i + 1]
        });
      } else {
        this.pairedParticipants.push({
          giver: this.shuffledParticipants[i],
          receiver: this.shuffledParticipants[0]
        });
      }
    }
  }

  shuffle(participantArray: string[]) {
    let currentIndex = participantArray.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = participantArray[currentIndex];
      participantArray[currentIndex] = participantArray[randomIndex];
      participantArray[randomIndex] = temporaryValue;
    }
    return participantArray;
  }

  submitAllNames() {
    this.shuffledParticipants = this.shuffle(this.participants);
    this.verifyPairs();
    this.makePairs();
    console.log(this.pairedParticipants);
  }

  verifyPairs() {
    let pairedCorrectly = false;
    for (let i = 0; i < this.shuffledParticipants.length; i++) {
      if (i !== this.shuffledParticipants.length - 1) {
        if (
          this.shuffledParticipants[i].spouseName ===
            this.shuffledParticipants[i + 1].name ||
          this.shuffledParticipants[i].name ===
            this.shuffledParticipants[i + 1].spouseName
        ) {
          i = -1;
          this.shuffle(this.shuffledParticipants);
          continue;
        }
      } else {
        if (
          this.shuffledParticipants[i].spouseName ===
            this.shuffledParticipants[0].name ||
          this.shuffledParticipants[i].name ===
            this.shuffledParticipants[0].spouseName
        ) {
          i = -1;
          this.shuffle(this.shuffledParticipants);
          continue;
        }
      }
    }
  }
  

  sendEmail() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "*/*"
    });
    const options = { headers };
    const body = {
      name: this.inputName,
      to: this.inputEmail,
      from: "santaclaus@gmail.com",
      message: "you will be giving to "
    };
    return this.http
      .post(
        "https://zacharyshorts-emailserver.herokuapp.com/sendsantaemail",
        body,
        options
      )
      .subscribe();
  }
}
