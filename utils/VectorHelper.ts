import { Vector, Vector3 } from "@minecraft/server";

export default class VectorHelper {
	public static dotProduct = (a: Vector3, b: Vector3): number => {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	};
	public static normalize = (vector: Vector3) => {
		return Vector.divide(vector, Vector.distance(vector, Vector.zero));
	};
	public static lerp = (a: Vector3, b: Vector3, t: number): Vector3 => {
		let out = { x: 0, y: 0, z: 0 };
		out.x = b.x * t + a.x * (1 - t);
		out.y = b.y * t + a.y * (1 - t);
		out.z = b.z * t + a.z * (1 - t);
		return out;
	};
}
