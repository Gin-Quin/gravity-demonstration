import { Service } from 'src/server/Service';

export class math extends Service {
	add(x: number, y: number): number {
		return x + y;
	}
}
