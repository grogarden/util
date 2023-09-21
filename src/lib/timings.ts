import {round} from './maths.js';

export interface Stopwatch {
	(reset?: boolean): number;
}

// tracks elapsed time in milliseconds
export const createStopwatch = (decimals = 2): Stopwatch => {
	let start = performance.now();
	return (reset = false) => {
		const end = performance.now();
		const elapsed = round(Number(end - start), decimals);
		if (reset) start = end;
		return elapsed;
	};
};

export type TimingsKey = string | number;

export class Timings {
	private readonly timings = new Map<TimingsKey, number>();
	private readonly stopwatches = new Map<TimingsKey, Stopwatch>();

	constructor(public readonly decimals?: number) {}

	start(key: TimingsKey, decimals = this.decimals): () => number {
		const final_key = this.next_key(key);
		this.stopwatches.set(final_key, createStopwatch(decimals));
		this.timings.set(final_key, undefined!); // initializing to preserve order
		return () => this.stop(final_key);
	}

	private next_key(key: TimingsKey): TimingsKey {
		if (!this.stopwatches.has(key)) return key;
		let i = 2;
		while (true) {
			const next = key + '' + i++;
			if (!this.stopwatches.has(next)) return next as TimingsKey;
		}
	}

	private stop(key: TimingsKey): number {
		const stopwatch = this.stopwatches.get(key);
		if (!stopwatch) return 0; // TODO maybe warn?
		this.stopwatches.delete(key);
		const timing = stopwatch();
		this.timings.set(key, timing);
		return timing;
	}

	get(key: TimingsKey): number {
		const timing = this.timings.get(key);
		if (timing === undefined) return 0; // TODO maybe warn?
		return timing;
	}

	getAll(): IterableIterator<[TimingsKey, number]> {
		return this.timings.entries() as IterableIterator<[TimingsKey, number]>;
	}

	// Merges other timings into this one,
	// adding together values with identical keys.
	merge(timings: Timings): void {
		for (const [key, timing] of timings.getAll()) {
			this.timings.set(key, (this.timings.get(key) || 0) + timing);
		}
	}

	// clear(): void {
	// 	this.stopwatches.clear();
	// 	this.timings.clear();
	// }
	// toJSON() {} ?????
}

// TODO BLOCK increment - coerce number keys to strings
const to_timing_key = (timings: Timings, key: string): (() => number) => {
	let i = 0;
	while (true) {
		try {
			return timings.start(key + (i ? ' ' + i : ''));
		} catch (err) {
			i++;
		}
	}
};
