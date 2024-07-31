import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }


  // for side bar
  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebar() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }


}
