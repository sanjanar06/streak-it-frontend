// routes.js
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewStreak from '../pages/Streaks/NewStreak';
import ActiveStreaks from '../pages/Streaks/ActiveStreaks';
import StreakDetails from '../pages/Streaks/StreakDetails';
import PastStreaks from '../pages/Streaks/PastStreaks';
import Notifications from '../pages/Streaks/Notifications';
import Logout from '../pages/Logout';
import About from '../pages/Streaks/About';

const ROUTES = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/streaks/about',
    component: About,
  },
  {
    path: '/streaks/new',
    component: NewStreak,
  },
  {
    path: '/streaks/active',
    component: ActiveStreaks,
  },
  {
    path: '/streaks/:id/details',
    component: StreakDetails,
  },
  {
    path: '/streaks/past',
    component: PastStreaks,
  },
  {
    path: '/streaks/notifications',
    component: Notifications,
  },
  {
    path: '/logout',
    component: Logout,
  },
];

export default ROUTES;