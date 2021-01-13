import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from '@constants/routes';
import { IRouter } from '@interfaces/IRouter';

function RouteWithSubRoutes(route: IRouter) {
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