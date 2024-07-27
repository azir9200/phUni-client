import React from 'react';
import OfferedCourses from '../pages/faculty/OfferedCourses';
import FacultyDashboard from '../pages/faculty/FacultyDashboard';

export const FacultyPath = [
  
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <FacultyDashboard />,
    },
    {
      name: 'Offered Course',
      path: 'offered-course',
      element: <OfferedCourses />,
    },
  ];