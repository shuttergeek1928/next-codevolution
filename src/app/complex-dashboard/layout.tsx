import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";
import Users from "./@users/page";
import Login from "./@login/page";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      {/* 
      * This is the traditional method to import a component in layout page
      <div>{children}</div>
      <Revenue />
      <Users />
      <Notifications /> 
      */}
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>{login}</div>
    </>
  );
}
