
export default class Vector2 {
	public x: number;
	public y: number;

	constructor (x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	//* Constants *//
	static zero(): Vector2 {
		return new Vector2 (0, 0);
	}

	static one(): Vector2 {
		return new Vector2 (1, 1);
	}

	static up(): Vector2 {
		return new Vector2 (0, -1);
	}

	static down(): Vector2 {
		return new Vector2 (0, 1);
	}

	static left(): Vector2 {
		return new Vector2 (-1, 0);
	}

	static right(): Vector2 {
		return new Vector2 (1, 0);
	}

	//* Basic Operations (static) *//
	static add (vector1: Vector2, vector2: Vector2): Vector2 {
		return vector1.clone().add (vector2);
	}

	static subtract (vector1: Vector2, vector2: Vector2): Vector2 {
		return vector1.clone().subtract (vector2);
	}

	static multiply (vector: Vector2, value: number): Vector2 {
		return vector.clone().multiply (value);
	}

	static divide (vector: Vector2, value: number): Vector2 {
		return vector.clone().divide (value);
	}

	static dot (vector1: Vector2, vector2: Vector2): number {
		return vector1.x * vector2.x + vector1.y * vector2.y;
	}

	static cross (vector1: Vector2, vector2: Vector2): number {
		return vector1.x * vector2.y - vector1.y * vector2.x;
	}

	static angle (vector1: Vector2, vector2: Vector2): number {
		return Math.acos (Vector2.dot (vector1, vector2) / (vector1.magnitude * vector2.magnitude));
	}

	static distance (vector1: Vector2, vector2: Vector2): number {
		return vector1.subtract (vector2).magnitude;
	}

	static lerp (vector1: Vector2, vector2: Vector2, t: number): Vector2 {
		return new Vector2 (vector1.x + (vector2.x - vector1.x) * t, vector1.y + (vector2.y - vector1.y) * t);
	}

	static equals (vector1: Vector2, vector2: Vector2): boolean {
		return vector1.x == vector2.x && vector1.y == vector2.y;
	}

	static fromAngle (angle: number): Vector2 {
		return new Vector2 (Math.cos(angle), Math.sin(angle));
	}

	static fromPolar (magnitude: number, angle: number): Vector2 {
		return new Vector2 (magnitude * Math.cos(angle), magnitude * Math.sin(angle));
	}

	static random(): Vector2 {
		return new Vector2 (Math.random(), Math.random());
	}

	//* Getters *//
	get perpendicular(): Vector2 {
		return new Vector2 (-this.y, this.x);
	}

	get inverse(): Vector2 {
		return this.clone().multiply (-1);
	}

	get magnitude(): number {
		return Math.sqrt (this.x ** 2 + this.y ** 2);
	}

	get normalized(): Vector2 {
		return this.clone().divide (this.magnitude);
	}

	//* Basic Operations *//
	set (x: number, y: number): Vector2 {
		this.x = x;
		this.y = y;

		return this;
	}

	clone(): Vector2 {
		return new Vector2 (this.x, this.y);
	}

	equals (vector: Vector2): boolean {
		return this.x === vector.x && this.y === vector.y;
	}

	toString(): string {
		return `(${ this.x }, ${ this.y })`;
	}

	//* Basic Operations *//
	add (vector: Vector2): Vector2 {
		this.x += vector.x;
		this.y += vector.y;

		return this;
	}

	subtract (vector: Vector2): Vector2 {
		this.x -= vector.x;
		this.y -= vector.y;

		return this;
	}

	multiply (value: number): Vector2 {
		this.x *= value;
		this.y *= value;

		return this;
	}

	divide (value: number): Vector2 {
		this.x /= value;
		this.y /= value;

		return this;
	}
}
