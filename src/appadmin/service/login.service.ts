import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(private adminSerObj: AdminService) { }

    login(model): Observable<any>
    {
        return this.adminSerObj.postService('admin/login', model);
    }
}

