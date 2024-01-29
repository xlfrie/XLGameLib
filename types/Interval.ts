export default interface Interval {
	name: string;
	delay: number;
	execute: () => number;
}
