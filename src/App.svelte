<script>
  export let name;
  import Fetch from "./Fetch.svelte";
</script>

<style type="text/scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <Fetch dataFile="./data/tea.json" idName="tea" />
  <Fetch dataFile="./data/study.json" idName="study" />
  <Fetch dataFile="./data/programming.json" idName="programming" />
  <Fetch dataFile="./data/utilities.json" idName="utilities" />
  <Fetch dataFile="./data/books.json" idName="books" />
</main>
