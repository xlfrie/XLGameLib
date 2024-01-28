import { world } from "@minecraft/server";

export default class ChatHelper {
	public static broadcastMessage = (message: string) => {
		world.sendMessage(`<Server> ${message}`);
	};
}

export enum Colors {
	BLACK = "§0",
	DARK_BLUE = "§1",
	DARK_GREEN = "§2",
	DARK_AQUA = "§3",
	DARK_RED = "§4",
	DARK_PURPLE = "§5",
	GOLD = "§6",
	GRAY = "§7",
	DARK_GRAY = "§8",
	BLUE = "§9",
	GREEN = "§a",
	AQUA = "§b",
	RED = "§c",
	LIGHT_PURPLE = "§d",
	YELLOW = "§e",
	WHITE = "§f",
	MINECON_GOLD = "§g",
	MATIERAL_QUARTZ = "§h",
	MATERIAL_IRON = "§i",
	MATERIAL_NETHERITE = "§j",
	MATERIAL_REDSTONE = "§m",
	MATERIAL_COPPER = "§n",
	MATERIAL_GOLD = "§p",
	MATERIAL_EMERALD = "§q",
	MATERIAL_DIAMOND = "§s",
	MATERIAL_LAPIS = "§t",
	MATERIAL_AMETHYST = "§u",
	OBFUSCATED = "§k",
	BOLD = "§l",
	STRIKETHROUGH = "§m",
	UNDERLINE = "§n",
	ITALIC = "§o",
	RESET = "§r",
}
