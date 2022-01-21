import { gravity } from '@digitak/gravity-svelte';
import { services } from 'src/server/services';

const sleep = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

export const handle = gravity({
	services,
	async onResponseSend(response) {
		await sleep(300 + Math.random() * 300);
		return response;
	},
});
