import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography } from '@material-ui/core';
import { AuthProvider } from "../contexts/Auth";
import { PrivateRoute } from "./PrivateRoute";


import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const App = () => {
  return (
    <Container maxidth='lg'>
      <div>
        <Typography variant='h3'>supabase-auth-react</Typography>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
};
