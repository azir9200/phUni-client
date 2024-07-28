import { Layout, Menu } from "antd";
import SideBarItemsGenerator from "../../utils/SideBarGenerator";
import { studentPath } from "../../routes/studentRoutes";
import { AdminPath } from "../../routes/adminRoutes";
import { FacultyPath } from "../../routes/facultyRoutes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { SuperAdminPath } from "../../routes/superAdminRoutes";

const { Sider } = Layout;

const userRole = {
  SUPER: "superAdmin",
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;

  switch (user!.role) {
    case userRole.SUPER:
      sidebarItems = SideBarItemsGenerator(SuperAdminPath, userRole.SUPER);
      break;
    case userRole.ADMIN:
      sidebarItems = SideBarItemsGenerator(AdminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = SideBarItemsGenerator(FacultyPath, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = SideBarItemsGenerator(studentPath, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
