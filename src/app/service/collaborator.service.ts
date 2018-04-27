import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from "./user.service"


@Injectable()
export class CollaboratorService {

  constructor(private userServiceObj: UserService) { }


  createCollaborator(collaborator):Observable<any>{
    return this.userServiceObj.putService('addCollaborator',collaborator);
  }
}
