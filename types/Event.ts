export default interface Event {
	name: string;
	eventSignal: any;
	execute: (event: any) => number;
}
