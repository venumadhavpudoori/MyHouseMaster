import React from "react";
import { Route, Redirect} from "react-router-dom";

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route
        {...rest}
        render={props =>
        appProps.isAuthenticated
          ? <Redirect
              to={`/plan-with-fincyan`}
            />
          :<C {...props} {...appProps} />
        }
    />
  );
}
