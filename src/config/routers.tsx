import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from '../constants/routers';


function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}


export default (
    <Switch>
        {routes.map( (route, i) => (
            <Suspense key={i} fallback={<div>Loading...</div>}>
                <RouteWithSubRoutes {...route} />
            </Suspense>
        ))}
    </Switch>
);