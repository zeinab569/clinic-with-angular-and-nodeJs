import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { Event } from '../_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventbusService {
  private subject$ = new Subject<Event>();

  emit(event: Event) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: Event) => e.name === eventName),
      map((e: Event) => e["value"])).subscribe(action);
  }
  constructor() { }
}
