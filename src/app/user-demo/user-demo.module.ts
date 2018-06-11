import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imported here
import { UserService } from '../services/user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers : [
        UserService
    ],
    declarations: []
})

export class UserDemoModule { }