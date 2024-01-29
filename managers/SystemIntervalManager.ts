import { system } from "@minecraft/server";
import Interval from "types/Interval";

export default class SystemIntervalManager {
	public static registerIntervals = (intevals: Interval[]) => {
		intevals.forEach((interval) => {
			system.runInterval(interval.execute, interval.delay);
		});
	};
}
