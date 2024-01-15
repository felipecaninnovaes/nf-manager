import { IconType } from "react-icons";

export interface SideItems {
	label: string;
	href: string;
	submenu?: boolean;
	icon?: IconType;
	subMenuItems?: SideItems[];
}