<script>
  import Fetch from "./Fetch.svelte";
  import MenuCel from "./MenuCel.svelte";
</script>

<style type="text/scss">
  .flex-div {
    max-width: 240px;

    text-align: center;
    padding: unset;
    margin: 0 auto;
  }
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media(min-width: 640px){
    .flex-div {
      height: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .flex-div__content {
      display: flex;
      justify-content: flex-start;
    }
  }
</style>

<MenuCel />
<main class="flex-div">

  <div class="flex-div__content">  
    <Fetch dataFile="./data/tea.json" idName="tea" />
    <Fetch dataFile="./data/study.json" idName="study/free" />
    <Fetch dataFile="./data/programming.json" idName="programming" />
    <Fetch dataFile="./data/utilities.json" idName="utilities" />
    <Fetch dataFile="./data/languages.json" idName="languages" />
  </div>
</main>

<nav>
  <button class="clearCel btn btn-nav" type="button" onclick="menuClearCel()">
    Clear
  </button>
</nav>

<footer>
  <script src="./js/selectionFunctions.js"></script>

  <script src="./js/cell.js"></script>
</footer>
