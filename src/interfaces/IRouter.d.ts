export interface IRouter {
    exact?: string,
    path: string,
    guard: string,
    component: Component,
    routes?: Array<IRouter>
}