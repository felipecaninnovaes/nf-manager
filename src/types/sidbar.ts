import { SideItems } from "@/interfaces/sidebar";


export type SideBarProps = {
	collapsed?: boolean;
	sideItems?: SideItems[];
	sideItem?: SideItems;
	setCollapsed(collapsed: boolean): void;
	shown: boolean;
	pathName?: string;
};