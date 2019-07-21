<script>
    let shower = false;
    let counter = 0;

function addCounter(){
    counter += 1;
    }

    function toggle(){
        shower = !shower;
    }

</script>

<div>


<p>{counter}</p>

<button on:click={addCounter}>
    Add On!
</button>

{#if counter<5}
        <p>Hello There...</p>
    {:else if counter == 5 }
        <p>BOOM!</p>
    {:else}
        <p>Still rambling...</p>
{/if}


{#if shower}
    <button on:click={toggle}>
        Old
    </button>
{:else }
    <button on:click={toggle}>
        New
    </button>
{/if}
</div>
