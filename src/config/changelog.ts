import type { ChangelogItem } from "../types/changelog";

export const changelogData: ChangelogItem[] = [
	{
		hash: "a64f601",
		date: "2026-08-07 17:55:33",
		message: "Add files via upload",
		type: "other",
	},
	{
		hash: "330b03a",
		date: "2026-08-07 16:10:12",
		message: "fix(music): 修复续播失效——初始化先捕获快照再加载歌单，避免被 loadSong 覆盖成第一首",
		type: "fix",
	},
	{
		hash: "d188861",
		date: "2026-08-07 15:56:58",
		message: "fix(music): 断点续播增强——网易云歌曲整页刷新后恢复同一首（快照直连，不请求API）",
		type: "fix",
	},
	{
		hash: "3d7f0d6",
		date: "2026-08-07 15:11:38",
		message: "feat(music): 全局播放器歌单恢复本地/网易云切换，本地在前（默认高亮），非滑动胶囊",
		type: "feature",
	},
	{
		hash: "e896eb2",
		date: "2026-08-07 15:01:48",
		message: "ui(music): 3D 页切换歌单弹窗本地置首位（默认高亮），网易云输 ID 放其后",
		type: "other",
	},
	{
		hash: "d40194c",
		date: "2026-08-07 14:43:35",
		message: "fix(music): 默认永远本地歌单，忽略 localStorage 遗留 online 模式，加载不再触发网易云 API；3D 页手动切换保留",
		type: "fix",
	},
];
