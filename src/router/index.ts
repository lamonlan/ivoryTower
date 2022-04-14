import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Workbench from "@/views/Workbench/Workbench.vue";

export interface Route {
	path: string;
	name: string;
	meta: {
		title: string;
		mode?: "horizontal" | "vertical";
	};
	redirect?: string;
	component: Component;
	children?: Route[];
}

export const routes: Route[] = [
	{
		path: "/",
		name: "workbench",
		meta: {
			title: "工作台",
			mode: "horizontal",
		},
		component: Workbench,
		redirect: "/recentlyOpen",
		children: [
			{
				path: "recentlyOpen",
				name: "recentlyOpen",
				meta: {
					title: "最近打开",
					mode: "vertical",
				},
				component: () =>
					import(
						"@/views/Workbench/components/RecentlyOpen/RecentlyOpen.vue"
					),
			},
			{
				path: "collect",
				name: "collect",
				meta: {
					title: "收藏",
					mode: "vertical",
				},
				component: () =>
					import("@/views/Workbench/components/Collect/Collect.vue"),
			},
		],
	},
	{
		path: "/group",
		name: "group",
		meta: {
			title: "群组",
			mode: "horizontal",
		},
		component: () => import("@/views/Group/Group.vue"),
	},
	{
		path: "/square",
		name: "square",
		meta: {
			title: "广场",
			mode: "horizontal",
		},
		component: () => import("@/views/Square/Square.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior: () => ({
		top: 0,
	}),
});

router.afterEach((to, from) => {});

export default router;
