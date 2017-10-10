import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//SERVICES
import { Magazines } from '../../providers/magazines';

@Component( {
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [Magazines]
} )

export class HomePage {

	magazines: any = [];
	
	constructor( 
		public navCtrl: NavController,
		private magazinesSvc: Magazines
	) {}

	ngOnInit() {
		this.magazinesSvc.getAllMagazines().subscribe( 
			magazines => {
				this.magazines = magazines;
			}
		);
	}

	removeMagazine( magazine, pos ) {

		this.magazinesSvc.deleteMagazine( magazine._id ).subscribe(
			response => {
				console.log( response );
				this.magazines.splice( pos, 1 );
			}
		);
	}
}
