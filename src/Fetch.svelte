<script>
  import { onMount } from "svelte";

  export let dataFile = "./data/tea.json";
  export let idName = "tea";
  let sites = [];

  onMount(async function() {
    const response = await fetch(dataFile);
    const json = await response.json();
    sites = json;
  });
</script>

<style type="text/scss">

</style>

<aside id={idName}>
  <ul>
    {#each sites as site}
      <li>
        <a href={site.url} target="_blanks" rel="noopener">{site.name}</a>
      </li>
    {/each}
  </ul>
</aside>
