// src/routes/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './routerConfig';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;