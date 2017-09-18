import { Component, OnChanges, Input } from '@angular/core';
import { DpatService,Dpat,DpatDetail } from 'app/services/dpat.service';

@Component({
    selector:'modal-perincian',
    templateUrl:'./dpat-modal-perincian.component.html',
})
export class DpatModalPerincian implements OnChanges{
    @Input() DpatDetail;
    masterKelompok;
    masterSubKelompok;
    jenisBarang;

    constructor(
        private dpatService : DpatService
    ){}
    ngOnChanges(changes){
        this.dpatService.getMasterKelompok().subscribe(
            resp=>{
                this.masterKelompok=resp.data;
            }
        )
    }
    onKelBarangChange(masterKelompokId:number){
        this.dpatService.getMasterSubKelompok(masterKelompokId).subscribe(
            resp=>{
                this.masterSubKelompok=resp.data;
                // console.log("Sub Kelompok", this.masterSubKelompok);
            }
            
        )        
    }
    onSubKelompok(subKelompokId:number){
        this.dpatService.getJenisBarang(subKelompokId).subscribe(
            resp=>{
                this.jenisBarang= resp.data;
                // console.log("Jenis", this.jenisBarang);
            }
        )
    }
}