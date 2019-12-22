<script>
  import { onMount } from "svelte";

  export let dataFile = "./data/tea.json";
  export let idName = "tea";
  let idTitle = idName[0].toUpperCase() + idName.slice(1);
  let sites = [];

  onMount(async function() {
    const response = await fetch(dataFile);
    const json = await response.json();
    sites = json;
  });
</script>

<style type="text/scss">
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
</style>

<aside id={idName}>
  <h2>{idTitle}</h2>
  <ul>
    {#each sites as site}
      <li>
        <a href={site.url} target="_blanks" rel="noopener">{site.name}</a>
      </li>
    {/each}
  </ul>
</aside>
