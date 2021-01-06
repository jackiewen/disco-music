import { IPath } from './IPath';

export interface IRoute {
    name: string,
    route: string,
    path: IPath,
    subRoute?: Array<IRoute>
}