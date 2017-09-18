import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'app/services/app.service';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { AtService } from 'app/services/at.service';

@Component({
    templateUrl: 'dpat-new.component.html',
})

export class DpatNewComponent implements OnInit {
    subTitle="Tambah"
    constructor(
        private router : Router,
        private activatedRoute: ActivatedRoute,
        private appServ: AppService,
        private authServ: AuthService,
    ) { }

    ngOnInit() { }
    onBtnBatalClick(): void {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
}