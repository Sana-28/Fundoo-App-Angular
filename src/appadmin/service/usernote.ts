import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserNoteResp } from '../model/usernoteresp';
import { AdminService } from './admin';

@Injectable()
export class UserNoteService {

    constructor(private adminSerObj: AdminService) { }

    getData():Observable<UserNoteResp[]>
    {
        return this.adminSerObj.getService('/admin/getusernotecount');
    }
}




