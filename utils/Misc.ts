import { BoundingBox, Vector3 } from "@minecraft/server";

export default class Misc {
	public static clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
	public static isInside = (box: BoundingBox, pos: Vector3): boolean => {
		let x = box.max.x - box.min.x,
			y = box.max.y - box.min.y,
			z = box.max.z - box.min.z;
		let x_ = box.max.x - pos.x,
			y_ = box.max.y - pos.y,
			z_ = box.max.z - pos.z;

		return x >= x_ && y >= y_ && z >= z_;
	};
}
