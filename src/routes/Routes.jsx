import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from '@/routes/routerConfig'

function App() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
