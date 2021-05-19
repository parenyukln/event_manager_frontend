import { Router } from '@reach/router';
import { RegistrationForm } from '../pages/registration';
import { NormalLoginForm } from '../pages/login';

function App() {
    return (
        <Router>
            <RegistrationForm path="/registration" />
            <NormalLoginForm path="/login" />
        </Router>
    );
}

export default App;
