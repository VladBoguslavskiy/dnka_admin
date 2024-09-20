import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Панель керування ",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Колекції",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Товари",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Закази",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Клієнти",
  },
];
