import { BoundingBox, Dimension, MolangVariableMap, Vector, Vector3 } from "@minecraft/server";
import VectorHelper from "./VectorHelper";

export default class ParticleHelper {
	public static drawLine = (from: Vector3, to: Vector3, particle: string, dimension: Dimension, molang?: MolangVariableMap) => {
		let nonNormalDir = Vector.subtract(to, from);
		let dir = VectorHelper.normalize(nonNormalDir);
		let squareLength = VectorHelper.dotProduct(nonNormalDir, nonNormalDir);
		let inc = 0.5;
		let increment = Vector.multiply(dir, inc);
		let pos = from;
		for (let i = 0; i ** 2 * inc ** 2 < squareLength; i++) {
			dimension.spawnParticle(particle, pos, molang);

			pos = Vector.add(pos, increment);
		}
	};

	public static drawCuboid = (boundingBox: BoundingBox, particle: string, dimension: Dimension) => {
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
