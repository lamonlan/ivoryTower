import BaseLayout from "./BaseLayout.vue";
import BaseLayoutSider from "./BaseLayoutSider.vue";
import BaseLayoutContent from "./BaseLayoutContent.vue";

export default Object.assign(BaseLayout, {
	Sider: BaseLayoutSider,
	Content: BaseLayoutContent,
});
