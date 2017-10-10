import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Magazines provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Magazines {

	constructor( public http: Http ) {}

	getAllMagazines() {
		return this.http.get( '/api/magazines' ).map( res => res.json() );
	}

	deleteMagazine( magazineId ) {

		return this.http.delete( '/api/magazines/' + magazineId ).map( res => res.json() ); 
	}
}
