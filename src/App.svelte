<script>
    import Second from './Second.svelte'
    import Arrays from './Arrays.svelte'
	export let name, second; 
</script>

<style>
	h1 {
		color: green;
	}
</style>

<h1>This is {name}!</h1>
<Second second={second}/>
<Arrays/>
<Second/>
