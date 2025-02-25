import { Link, useLocation } from "@remix-run/react";
import { Minus, Plus, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openParent, setOpenParent] = useState<string | null>(null);

  useEffect(() => {
    const activeParent = items.find(
      (item) =>
        item.url === "#" && item.items?.some((sub) => sub.url === currentPath)
    )?.title;

    if (activeParent) {
      setOpenParent(activeParent);
    }
  }, [currentPath, items]);
  return (
    <SidebarGroup>
      <SidebarGroupLabel>MENUS</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          //const isParentOpen = openParent === item.title
          return (
            <Collapsible
              key={item.title}
              open={openParent === item.title}
              onOpenChange={(open) => setOpenParent(open ? item.title : null)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <span className="w-100 h-100">
                      <item.icon />
                    </span>
                    {item.title}{" "}
                    <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                    <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.items?.length ? (
                  <CollapsibleContent className="mt-1">
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={item.url === currentPath}
                          >
                            <Link to={item.url}>{item.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
