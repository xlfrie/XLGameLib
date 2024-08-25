import { Vector } from "wrappers/Vector";

export default class VectorHelper {
	public static dotProduct = (a: Vector, b: Vector): number => {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	};
	public static normalize = (vector: Vector) => {
		return vector.div(vector.distance(new Vector(0, 0, 0)));
	};
	public static lerp = (a: Vector, b: Vector, t: number): Vector => {
		let out = new Vector(0, 0, 0);
		out.x = b.x * t + a.x * (1 - t);
		out.y = b.y * t + a.y * (1 - t);
		out.z = b.z * t + a.z * (1 - t);
		return out;
	};
}
