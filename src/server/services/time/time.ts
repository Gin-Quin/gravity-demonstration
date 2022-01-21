import { Service } from 'src/server/Service';

export class time extends Service {
	now(): Date {
		return new Date();
	}
}
