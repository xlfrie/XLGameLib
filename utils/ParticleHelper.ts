import { BoundingBox, BoundingBoxUtils, Dimension, MolangVariableMap, Vector, Vector3 } from "@minecraft/server";
import VectorHelper from "./VectorHelper";

export default class ParticleHelper {
	public static drawLine = (from: Vector3, to: Vector3, particle: string, dimension: Dimension, molang?: MolangVariableMap) => {
		let dir = VectorHelper.normalize(Vector.subtract(to, from));
		let squareLength = Vector.distance(from, to);
		let inc = 0.5;
		let increment = Vector.multiply(dir, inc);
		let pos = from;
		for (let i = 0; i * inc < squareLength; i++) {
			dimension.spawnParticle(particle, pos, molang);

			pos = Vector.add(pos, increment);
		}
	};

	public static drawCuboid = (boundingBox_: BoundingBox, particle: string, dimension: Dimension) => {
		let boundingBox = BoundingBoxUtils.dilate(boundingBox_, { x: 1.5, y: 1.5, z: 1.5 });
		const diff = Vector.subtract(boundingBox.max, boundingBox.min);
		this.drawLine(boundingBox.min, Vector.add(boundingBox.min, { x: diff.x, y: 0, z: 0 }), particle, dimension);
		this.drawLine(
			Vector.add(boundingBox.min, { x: 0, y: 0, z: diff.z }),
			Vector.add(boundingBox.min, { x: diff.x, y: 0, z: diff.z }),
			particle,
			dimension
		);

		this.drawLine(boundingBox.min, Vector.add(boundingBox.min, { x: 0, y: 0, z: diff.z }), particle, dimension);
		this.drawLine(
			Vector.add(boundingBox.min, { x: diff.x, y: 0, z: 0 }),
			Vector.add(boundingBox.min, { x: diff.x, y: 0, z: diff.z }),
			particle,
			dimension
		);

		this.drawLine(
			Vector.add(boundingBox.min, { x: 0, y: diff.y, z: 0 }),
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: 0 }),
			particle,
			dimension
		);
		this.drawLine(
			Vector.add(boundingBox.min, { x: 0, y: diff.y, z: diff.z }),
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: diff.z }),
			particle,
			dimension
		);

		this.drawLine(
			Vector.add(boundingBox.min, { x: 0, y: diff.y, z: 0 }),
			Vector.add(boundingBox.min, { x: 0, y: diff.y, z: diff.z }),
			particle,
			dimension
		);
		this.drawLine(
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: 0 }),
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: diff.z }),
			particle,
			dimension
		);

		this.drawLine(boundingBox.min, Vector.add(boundingBox.min, { x: 0, y: diff.y, z: 0 }), particle, dimension);
		this.drawLine(
			Vector.add(boundingBox.min, { x: diff.x, y: 0, z: 0 }),
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: 0 }),
			particle,
			dimension
		);
		this.drawLine(
			Vector.add(boundingBox.min, { x: 0, y: 0, z: diff.z }),
			Vector.add(boundingBox.min, { x: 0, y: diff.y, z: diff.z }),
			particle,
			dimension
		);
		this.drawLine(
			Vector.add(boundingBox.min, { x: diff.x, y: 0, z: diff.z }),
			Vector.add(boundingBox.min, { x: diff.x, y: diff.y, z: diff.z }),
			particle,
			dimension
		);
	};
}
