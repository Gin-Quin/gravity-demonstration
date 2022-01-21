import { Service } from 'src/server/Service';

export class cat extends Service {
	meow(): string {
		return 'Meow!';
	}

	attack(enemy: string): string {
		return `Wild cat attack ${enemy}!`;
	}
}
