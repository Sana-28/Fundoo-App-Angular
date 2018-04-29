export class NoteResponse{

    noteId: number;
    title:string;
    description:string;
    inTrash:Boolean;
    isPin:Boolean;
    isArchive:Boolean;
    color:string;
    reminder:Date;
    label:Set<Label> ;
  }

  export class Label{
    
    labelId    : number;
    labelTitle : string;
  }