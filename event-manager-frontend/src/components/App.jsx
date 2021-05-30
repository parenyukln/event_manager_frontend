import { Router } from '@reach/router';
import { RegistrationPage } from '../pages/registration';
import { LoginPage } from '../pages/login';
import Projects from '../components/Projects';
import Calendar from '../components/Calendar';
import Profile from '../components/Profile';

function App() {
    return (
        <Router>
            <RegistrationPage path="/registration" />
            <LoginPage path="/login" />
            <Projects path="/projects" />
            <Calendar path="/calendar" default />
            <Profile path="/profile" />
        </Router>
    );
}

export default App;
