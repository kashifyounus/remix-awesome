import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-200 ${
          isScrolled ? "bg-gray-900 text-gray-100" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-screen h-16 flex items-center justify-between border-b border-gray-300 shadow-bottom shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1694878982147-e52097b660ec"
                alt="Logo"
                className="h-8 w-8 rounded"
              />
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-gray-100" : "text-gray-900"
                }`}
              >
                BusinessPro
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={isScrolled ? "text-gray-100" : "text-gray-900"}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <a
                          href="#services"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive business solutions for your success
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#consulting"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Strategic Consulting
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expert guidance for your business
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#marketing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Digital Marketing
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Boost your online presence
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={isScrolled ? "text-gray-100" : "text-gray-900"}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px]">
                      <li>
                        <a
                          href="#about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            About Us
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and values
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#team"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Our Team
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet our expert consultants
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={() => setShowBooking(true)}
              className={`${
                isScrolled ? "bg-primary text-white" : "bg-gray-900 text-white"
              } hover:bg-primary/90`}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
