import { Vector, Vector3 } from "@minecraft/server";

export default class VectorHelper {
	public static dotProduct = (a: Vector3, b: Vector3): number => {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	};
	public static normalize = (vector: Vector3) => {
		return Vector.divide(vector, Vector.distance(vector, Vector.zero));
	};
}
