import { Vector3 } from "@minecraft/server";

export class Vector {
	public x: number;
	public y: number;
	public z: number;

	constructor(vector: Vector3);
	constructor(x: number, y: number, z: number);

	constructor(vecOrX: number | Vector3, y?: number, z?: number) {
		// ChatHelper.broadcastMessage(vecOrX);
		if (typeof vecOrX === "number" && typeof y == "number" && typeof z == "number") {
			this.x = <number>vecOrX;
			this.y = y;
			this.z = z;
		} else {
			const vector = <Vector3>vecOrX;

			this.x = vector.x;
			this.y = vector.y;
			this.z = vector.z;
		}
	}

	add(x: number, y: number, z: number): Vector;
	add(vector: Vector | Vector3): Vector;

	public add(vecOrX: number | Vector | Vector3, y?: number, z?: number) {
		if (typeof vecOrX === "number" && typeof y == "number" && typeof z == "number") {
			return new Vector(this.x + vecOrX, this.y + y, this.z + z);
		} else if (typeof vecOrX == "object") {
			const vector = <Vector>vecOrX;
			return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
		}
	}

	subtract(x: number, y: number, z: number): Vector;
	subtract(vector: Vector | Vector3): Vector;

	public subtract(vecOrX: number | Vector | Vector3, y?: number, z?: number) {
		if (typeof vecOrX === "number" && typeof y == "number" && typeof z == "number") {
			return new Vector(this.x - vecOrX, this.y - y, this.z - z);
		} else {
			const vector = <Vector>vecOrX;
			return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
		}
	}

	mul(x: number, y: number, z: number): Vector;
	mul(i: number): Vector;
	mul(vector: Vector3 | Vector3): Vector;

	public mul(vecOrNum: number | Vector | Vector3, y?: number, z?: number) {
		let xMul: number = 1;
		let yMul: number = 1;
		let zMul: number = 1;

		if (typeof vecOrNum == "object") {
			const vector = <Vector3>vecOrNum;

			xMul = vector.x;
			yMul = vector.y;
			zMul = vector.z;
		} else if (typeof vecOrNum == "number" && typeof y == "number" && typeof z == "number") {
			xMul = <number>vecOrNum;
			yMul = y;
			zMul = z;
		} else if (typeof vecOrNum == "number" && y == undefined && z == undefined) {
			xMul = yMul = zMul = vecOrNum;
		}

		return new Vector(this.x * xMul, this.y * yMul, this.z * zMul);
	}

	div(x: number, y: number, z: number): Vector;
	div(i: number): Vector;
	div(vector: Vector | Vector3): Vector;

	public div(vecOrNum: Vector | Vector3 | number, y?: number, z?: number) {
		let xMul = 1;
		let yMul = 1;
		let zMul = 1;

		if (typeof vecOrNum == "object") {
			const vector = <Vector>vecOrNum;

			xMul = 1 / vector.x;
			yMul = 1 / vector.y;
			zMul = 1 / vector.z;
			// May change to typeof undefined
		} else if (typeof vecOrNum == "number" && y == undefined && z == undefined) {
			xMul = yMul = zMul = 1 / <number>vecOrNum;
		} else if (typeof vecOrNum == "number" && typeof y == "number" && typeof z == "number") {
			xMul = 1 / vecOrNum;
			yMul = 1 / y;
			zMul = 1 / z;
		}

		return this.mul(xMul, yMul, zMul);
	}

	public dot(vector: Vector) {
		return this.x * vector.x + this.y * vector.y + this.z * vector.z;
	}

	public distance(_vector: Vector) {
		return Math.sqrt(this.dot(this));
	}
}
