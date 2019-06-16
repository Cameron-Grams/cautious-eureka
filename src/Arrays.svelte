<script>

    let numbers = [1, 2, 3];
    let total;

    function buildOut(){
        numbers = [ ...numbers, numbers.length + 1 ];     
    }

    $:total = numbers.reduce( ((t, n) => t + n), 0 );

</script>
<style>
  p{
    color: red;
  }
</style>

<p>{numbers.join('+')} = {total}</p>

<button on:click={buildOut}>
    Add On!
</button>
