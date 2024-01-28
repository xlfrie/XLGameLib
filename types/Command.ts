import { ChatSendBeforeEvent } from "@minecraft/server";

export default interface Command {
	name: string;
	execute: (event: ChatSendBeforeEvent) => number;
}
