import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { navbarItemsList } from "./common/navbarItems";
import { useNavigate, Link } from "react-router-dom";

export default function NavbarUi() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const onPressHandler = () => {
        navigate("/");
    };
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand
                    onClick={onPressHandler}
                    className="cursor-pointer text-xl hover:text-purple"
                >
                    <FontAwesomeIcon icon={faStar} />
                    <b> TICKET</b>VIBE
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex gap-4"
                justify="center"
            >
                <NavbarItems />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link
                        to="/login"
                        color="foreground"
                        className="md:w-1/5 md:text-right hover:text-purple"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarItemsMenu />
            </NavbarMenu>
        </Navbar>
    );
}

const NavbarItemsMenu = () => {
    return navbarItemsList.map((item, i) => (
        <NavbarMenuItem key={i}>
            <Link
                color="foreground"
                className="text-2xl"
                to={item.link}
            >
                {item.name}
            </Link>
        </NavbarMenuItem>
    ));
};

const NavbarItems = () => {
    return navbarItemsList.map((item, i) => (
        <NavbarItem
            key={i}
            isActive={location.pathname === item.link}
            className="mx-3"
        >
            <Link
                color="foreground"
                className="text-lg hover:text-purple"
                to={item.link}
            >
                {item.name}
            </Link>
        </NavbarItem>
    ));
};
