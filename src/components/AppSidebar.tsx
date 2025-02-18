import {
  Users,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Layers,
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link, useLocation } from "react-router-dom";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "/src/assets/icon.png",
    badge: "10",
  },
  {
    title: "Tools",
    url: "/tools",
    icon: Layers,
    subItem: [
      { title: "Assets", url: "/tools/assets" },
      { title: "Actions", url: "/tools/actions" },
      { title: "Challenges", url: "/tools/challenges" },
      { title: "Testing", url: "/tools/testing" },
    ],
    badge: "",
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
    subItem: [{ title: "Admin", url: "/admin" }],
    badge: "",
  },
];

const AppSidebar = () => {
  // Manage open states for each collapsible menu as an array
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = (title: string) => {
    setOpenMenus((prevOpenMenus) => {
      // If the menu is already open, remove it from the list
      if (prevOpenMenus.includes(title)) {
        return prevOpenMenus.filter((menu) => menu !== title);
      }
      // Otherwise, add it to the list
      return [...prevOpenMenus, title];
    });
  };

  return (
    <Sidebar className=" text-white">
      <SidebarContent className="mt-[132px]">
        {/* Sidebar Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const isOpen = openMenus.includes(item.title); // Check if the menu is open

                return item.subItem ? (
                  <Collapsible key={item.title} open={isOpen}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          onClick={() => toggleMenu(item.title)}
                          className="flex justify-between w-full text-white"
                        >
                          <span className="flex items-center">
                            {typeof Icon === "string" ? (
                              <img
                                src={Icon}
                                alt={item.title}
                                className="h-4 w-4 mr-2"
                              />
                            ) : (
                              <Icon className="h-4 w-4 mr-2" />
                            )}
                            {item.title}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {item.badge && (
                        <SidebarMenuBadge className="bg-[#C05600] rounded-[16px] text-black px-2">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                    <CollapsibleContent>
                      <SidebarMenuSub
                        className={`border-l-0 border-[#FFFFFF1A] pr-0 mr-[10px] gap-0`}
                      >
                        {item.subItem.map((subItem) => (
                          <SidebarMenuSubItem
                            key={subItem.title}
                            className={`py-3 text-white flex items-center justify-between  border-l-[2px]  ${
                              currentPath === subItem.url
                                ? "border-[#C05600]"
                                : "border-[#FFFFFF1A] "
                            } pl-2`}
                          >
                            <Link to={subItem.url}>{subItem.title}</Link>
                            <ChevronDown
                              size={16}
                              className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                            />
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="text-white">
                      <span className="flex items-center">
                        {typeof Icon === "string" ? (
                          <img
                            src={Icon}
                            alt={item.title}
                            className="h-4 w-4"
                          />
                        ) : (
                          <Icon className="h-4 w-4 mr-2" />
                        )}
                      </span>
                      {item.title}
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge className="bg-[#C05600] rounded-[16px] text-black px-2">
                        {item.badge}
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="">
        <div className="flex items-center justify-between bg-[#272727] p-2 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#FFFFFF1A]" />
            <div>
              <p className="font-medium text-sm">XYZ</p>
              <p className="text-sm text-muted-foreground">xyz@example.com</p>
            </div>
          </div>
          <div>
            <ChevronsUpDown size={20} />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
