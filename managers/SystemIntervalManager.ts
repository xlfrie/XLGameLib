import { system } from "@minecraft/server";
import Interval from "types/Interval";

export default class SystemIntervalManager {
	public static registerIntervals = (intevals: Interval[]) => {
		let intervalIDs: number[] = [];

		intevals.forEach((interval) => {
			intervalIDs.push(system.runInterval(interval.execute, interval.delay));
		});

		return intervalIDs;
	};
}
