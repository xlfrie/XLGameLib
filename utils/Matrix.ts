import { Vector3 } from "@minecraft/server";

export default class Matrix {
	private matrix: number[];

	public constructor() {
		this.matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	public createRotationMatrix = (x_: number, y_: number, z_: number) => {
		let x = (x_ / 180.0) * Math.PI,
			y = (y_ / 180.0) * Math.PI,
			z = (z_ / 180.0) * Math.PI;

		this.matrix = [
			Math.cos(y) * Math.cos(z),
			Math.sin(x) * Math.sin(y) * Math.cos(z) - Math.cos(x) * Math.sin(z),
			Math.cos(x) * Math.sin(y) * Math.cos(z) + Math.sin(x) * Math.sin(z),

			Math.cos(y) * Math.sin(z),
			Math.sin(x) * Math.sin(y) * Math.sin(z) + Math.cos(x) * Math.cos(z),
			Math.cos(x) * Math.sin(y) * Math.sin(z) - Math.sin(x) * Math.cos(z),

			-Math.sin(y),
			Math.sin(x) * Math.cos(y),
			Math.cos(x) * Math.cos(y),
		];

		return this;
	};

	public transformVector = (vector: Vector3): Vector3 => {
		return {
			x: vector.x * this.matrix[0] + vector.y * this.matrix[3] + vector.z * this.matrix[6],
			y: vector.x * this.matrix[1] + vector.y * this.matrix[4] + vector.z * this.matrix[7],
			z: vector.x * this.matrix[2] + vector.y * this.matrix[6] + vector.z,
		};
	};
}
