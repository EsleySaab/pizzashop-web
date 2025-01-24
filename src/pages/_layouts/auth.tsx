import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div>
      <div>
        <h1>Autenticação</h1>

        <Outlet />
      </div>
    </div>
  );
}
