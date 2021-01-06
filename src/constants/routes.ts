import { lazy } from 'react';

export const routes = [
    {
        exact: "exact",
        path: "/",
        guard: "user",
        component: lazy(() => import("../pages/Home/Home")),
    }
];