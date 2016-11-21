import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: FirebaseObjectObservable<any>;
  sports: FirebaseListObservable<any[]>;
  

  constructor(af: AngularFire){
    this.title = af.database.object('/item');
	  this.sports = af.database.list('/items', {
      query: {
        limitToFirst: 5,
        orderByKey: true
      }
    });
  }

  addSport(newItem: string){
      this.sports.push({text:newItem});
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
}
