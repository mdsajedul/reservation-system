import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Users from "./pages/dashboard/users/users";
import Hotels from "./pages/dashboard/hotels/hotels";
import CreateHotel from "./pages/dashboard/hotels/createHotel";
import ViewHotel from "./pages/dashboard/hotels/viewHotel";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "hotels",
        path: "/hotels",
        element: <Hotels />,
      },

      {
        icon: <UserGroupIcon {...icon} />,
        name: "agents",
        path: "/agents",
        element: <Profile />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <Users />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    layout: 'dashboard',
    pages:[
      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Create",
        path: "/hotels/add",
        element: <CreateHotel />,
      },
      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "Update",
        path: "/hotels/update/:id",
        element: <CreateHotel />,
      },
      {
        icon: <BuildingOffice2Icon {...icon} />,
        name: "hotel",
        path: "/hotels/:id",
        element: <ViewHotel />,
      },
    ]
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
