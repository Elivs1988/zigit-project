import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { User } from './../models/user.model'

export const SORT_PROJECTS       = '[USER] Sort Projects'
export const FILTER_PROJECTS    = '[USER] Filter Projects'
export const UPDATE_PROJECTS = '[USER] Update Projects'

export class SortPorjects implements Action {
    readonly type = SORT_PROJECTS

    constructor(public payload: string) {}
}

export class FilterProjects implements Action {
    readonly type = FILTER_PROJECTS

    constructor(public payload: number) {}
}

export class UpdatePorjects implements Action {
    readonly type = UPDATE_PROJECTS

    constructor(public payload: number) {}
}

export type Actions = SortPorjects | FilterProjects | UpdatePorjects