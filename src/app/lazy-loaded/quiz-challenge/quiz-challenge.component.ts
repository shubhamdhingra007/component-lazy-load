import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-quiz-challenge',
  templateUrl: './quiz-challenge.component.html',
  styleUrls: ['./quiz-challenge.component.scss']
})
export class QuizChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    QuizChallengeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
class QuizChallengeModule { }
