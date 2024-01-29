export default interface Interval {
	name: string;
	delay: number;
	execute: () => Promise<number>;
}
