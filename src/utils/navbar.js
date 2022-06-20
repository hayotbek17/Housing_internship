import SelectedHouse from '../pages/SelectedHouse';
import Generic from '../pages/Generic';
import Home from '../pages/Home';
import Properties from '../pages/Properties';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import AddNew from '../pages/AddNew';
export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Element: <Home />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Properties',
    path: '/properties',
    Element: <Properties />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Selected House',
    path: '/properties/:id',
    Element: <SelectedHouse />,
    search: '?',
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 3,
    title: 'Contacts',
    path: '/contacts',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'SignIn',
    path: '/signin',
    Element: <SignIn />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: 'SignUp',
    path: '/signup',
    Element: <Generic />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: 'Profile',
    path: '/profile',
    Element: <Profile />,
    search: '?',
    hidden: true,
    useParams: true,
    private: true,
  },
  {
    id: 7,
    title: 'AddNew',
    path: '/profile/add',
    Element: <AddNew />,
    search: '?',
    hidden: true,
    useParams: true,
    private: true,
  },
  {
    id: 8,
    title: 'AddNew',
    path: '/profile/add/:id',
    Element: <AddNew />,
    search: '?',
    hidden: true,
    useParams: true,
    private: true,
  },
  {
    id: 9,
    title: 'Registration',
    path: '/register',
    Element: <Register />,
    search: '?',
    hidden: true,
    private: false,
  },
];
