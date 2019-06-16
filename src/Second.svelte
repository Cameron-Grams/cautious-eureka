<script>

    export let second = "Shelly";

    let count = 0;
    $:doubled = count * 2;

    function handleClick(){
        count += 1;
    };
    $:if (doubled >= 20){
        alert("Getting larger...");
    };
</script>

<style>
    p{
      color: blue;
    }
</style>

<p>This is {second}</p>
<button on:click={handleClick}>
    Button Clicked: {count}
</button>
<p>
    {count} doubled: {doubled}
</p>
