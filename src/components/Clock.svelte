<script lang="ts">
	import { useApi } from 'src/server/api';

	const now = useApi({ network: 'poll', interval: 500 }).time.now();
</script>

<article>
	🕦 {$now.isLoading ? '...' : $now.data.toLocaleTimeString()}
</article>
