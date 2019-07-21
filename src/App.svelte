<script>
    import Second from './Second.svelte'
    import Arrays from './Arrays.svelte'
    import Third from './third.svelte'
	export let name, second; 

    let hideMe = false;

    function toggle2(){
        hideMe = !hideMe;
    }

</script>

<style>
	h1 {
		color: green;
	}
</style>



<h1>This is {name}!</h1>

<Second second={second}/>

<Arrays/>

{#if hideMe}
    <Second/>
{/if}

<div>
<button on:click={toggle2}>
    {#if !hideMe}
        Another Second...
    {:else}
        Lose the Second Second...
    {/if}
</button>
</div>

<Third/>
