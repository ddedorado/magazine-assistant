import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineAddModal } from './magazine-add-modal';

@NgModule({
  declarations: [
    MagazineAddModal,
  ],
  imports: [
    IonicPageModule.forChild(MagazineAddModal),
  ],
})
export class MagazineAddModalModule {}
