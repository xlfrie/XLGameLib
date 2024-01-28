import { Vector, Vector3 } from "@minecraft/server";

export default class VectorHelper {
	public static normalize = (vector: Vector3) => {
		return Vector.divide(vector, Vector.distance(vector, Vector.zero));
	};
}
