import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  progressBarVisible = true;
  toggleVisible : boolean = false;
  wholeBarVisible : boolean = false;
  progressbarValue = 0;
  curSec: number = 0;
  private timerSubscription: Subscription | undefined;

  ngOnInit(): void {
  }

  startTimer(seconds: number) {
    this.wholeBarVisible = true;
    this.toggleVisible = true
    const time = seconds;
    const timer$ = interval(100);

    this.timerSubscription = timer$.subscribe((sec) => {
      this.curSec = sec;

      if (this.curSec < seconds) {
        this.progressbarValue = (this.curSec / seconds) * 100;
      } else {
        this.stopTimer();
      }
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
  }

  toggleProgressBar() {
    this.progressBarVisible = !this.progressBarVisible;
    this.wholeBarVisible = !this.wholeBarVisible
  }




  
}
