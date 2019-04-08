import { Action } from '@ngrx/store';

export enum ActionTypes {
    Open = '[CustomerValidation] Open',
    Cancel = '[CustomerValidation] Cancel',
    Accept = '[CustomerValidation] Accept',
    Refuse = '[CustomerValidation] Refuse'
}

export class Open implements Action {
    readonly type = ActionTypes.Open;
    constructor(public payload: { description: string }) { }
}

export class Cancel implements Action {
    readonly type = ActionTypes.Cancel;
    constructor(public payload: { description: string }) { }
}

export class Accept implements Action {
    readonly type = ActionTypes.Accept;
    constructor(public payload: { description: string }) { }
}

export class Refuse implements Action {
    readonly type = ActionTypes.Refuse;
    constructor(public payload: { description: string }) { }
}

export type ActionsUnion = Open | Cancel | Accept | Refuse;
