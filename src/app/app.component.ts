import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable , AuthProviders, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: FirebaseObjectObservable<any>;
  sports: FirebaseListObservable<any[]>;
  categorySubject: Subject<any>;
  
  constructor(public af: AngularFire){
    this.categorySubject = new Subject();
    this.title = af.database.object('/item');
	  this.sports = af.database.list('/items');

    // Auth firebase
    this.af.auth.subscribe(auth => console.log('auth ' + auth));
  }

  addSport(newItem: string, newCategory: string){
      this.sports.push({text:newItem, category: newCategory });
  }

  updateSport(key: string, newText: string) {
    this.sports.update(key, { text: newText });
  }

  deleteSport(key: string) {    
    this.sports.remove(key); 
  }

  deleteSports() {
    this.sports.remove();
  }
  
  filter(category: string) {
    this.categorySubject.next(category); 
  }

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }


  

}
