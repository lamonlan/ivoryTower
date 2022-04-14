import type { PropType } from "vue";

export const props = {
	mode: {
		type: String as PropType<"horizontal" | "vertical">,
		default: "horizontal",
	},
};
