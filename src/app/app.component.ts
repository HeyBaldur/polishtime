import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Która godzina?';
  time = 'WOW'
  hourTime = 'WOW'

  constructor(private _timer: TimeService) {

  }
  ngOnInit(): void {
    this.setTime();
  }

  private setTime() {

    this.formatTime();

    setInterval(() => {
      this.formatTime();
    }, 1000);
  }



  private formatTime() {
    const date = new Date();

    let dateHour = date.getHours();
    let dateMinute = date.getMinutes();

    const hour = this._timer.GetHourArr(dateHour);
    const minute = this._timer.GetMinuteArr(dateMinute);

    this.time = `${hour} (${dateHour}) : ${minute} (${dateMinute})`;

    this.hourTime = `${this.prettyDate()}`;
  }

  prettyDate() {
    var date = new Date();
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit',
      second: '2-digit',
      hour12: false
    });
  }
}
