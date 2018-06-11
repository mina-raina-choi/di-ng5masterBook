// 앵귤러 DI를 사용하지 않고 직접 injector를 사용해서 주입할 경우

import {
    Component,
    ReflectiveInjector
} from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
    selector: 'app-injector-demo',
    templateUrl: './user-demo.component.html',
    styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent {
    userName: string;
    userService: UserService;

    constructor() {
        // Create an _injector_ and ask for it to resolve and create a UserService
        const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

        // use the injector to **get the instance** of the UserService
        this.userService = injector.get(UserService)
    }

    signIn(): void {
        this.userService.setUser({
            name: 'Mina Choi'
        })

        // now **read** the user name from the service
        this.userName = this.userService.getUser().name;
        console.log('User name is: ', this.userName);
    }
}