<script lang="ts">
	import type { User } from '@prisma/client';
	export let user: User;
</script>

<article>
	<h6>User #{user.id}</h6>
	<div>
		name: {user.name}
	</div>
	<div>
		email: {user.email}
	</div>
</article>
