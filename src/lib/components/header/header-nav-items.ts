export type NavItem = {
	label: string;
	href: string;
};

export const NAV_ITEMS = [
	{ label: 'About', href: '/#about' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Blog', href: '/#blog' }
] as const;
