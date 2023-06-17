/* eslint-disable no-constant-condition */
import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = () =>
  localStorage.getItem('user') === null ? (
    <Navigate to="/login" replace />
  ) : (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );

export default ProtectedRoute;
