import './style.css';
import { Observable } from 'rxjs';
import { map, fromEvent } from 'rxjs/operators';

const div = document.querySelector('div');
const button = document.querySelector('button');

const obs1 = Rx.Observable.fromEvent(button, 'click');
const obs2 = Rx.Observable.interval(1000);

obs1
  .switchMap((event) => {
    return obs2;
  })
  .subscribe((value) => (div.textContent = value));
