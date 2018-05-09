/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Label Service contains method to create label,get label, add and remove label
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { LabelResponse } from '../model/labelresponse';

@Injectable()
export class LabelService {

  constructor(private userServiceObj: UserService) { }

  /**@method: This method is to fetch label */
  getLabels(): Observable<LabelResponse[]> {
    return this.userServiceObj.getService('getlabels');

  }

  /**@method: This method is to create label */
  createLabel(label): Observable<any> {
    return this.userServiceObj.putService('createlabel', label);
  }

  /**@method: This method is to add and remove label */
  addRemoveLabel(status, labelId, noteId): Observable<any> {
    return this.userServiceObj.putServiceLabel('addremovelabel' + '/' + noteId + '/' + labelId + '/' + status.bubbles);
  }

  updateLabel(data): Observable<any> {
    return this.userServiceObj.putService('updatelabel',data);
  }

  deleteLabel(data):Observable<any>{
    return this.userServiceObj.deleteService('deletelabel',data);
  }
}
