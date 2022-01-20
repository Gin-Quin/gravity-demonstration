<script lang="ts">
	export let value = 0
	export let placeholder = ""

	let formattedValue = String(value)

	function updateValue(event: Event) {
		const target = event.target as HTMLInputElement
		const numberValue = +target.value
		if (isNaN(numberValue)) {
			target.value = formattedValue
		} else {
			formattedValue = String(numberValue)
			value = numberValue
		}
	}
</script>

<input type="text" value={formattedValue} on:input={updateValue} {placeholder}>