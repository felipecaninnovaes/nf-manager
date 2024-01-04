import SideBarV2 from "@/components/sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className="flex dark:text-shark-100 dark:bg-shark-950">
				<SideBarV2 />
				<div className="flex flex-col w-full">
					<div className="flex items-center justify-center h-full">
						<div className="bg-shark-100 dark:bg-shark-700 shadow-sm rounded-xl p-10">
							<div>{children}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
