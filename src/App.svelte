<script>
  import Fetch from "./Fetch.svelte";
  import MenuCel from "./MenuCel.svelte";
  import MakeTea from "./MakeTea.svelte";
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

<MenuCel />
<main>

  <Fetch dataFile="./data/tea.json" idName="tea" />
  <Fetch dataFile="./data/study.json" idName="study" />
  <Fetch dataFile="./data/programming.json" idName="programming" />
  <Fetch dataFile="./data/utilities.json" idName="utilities" />
  <Fetch dataFile="./data/frameworks.json" idName="frameworks" />
</main>

<MakeTea />

<div id="howToTea" class="menuCel">

  <button class="menu btn btn-nav" type="button" onclick="menuHowTeaDesktop()">
    How do I make Tea?
  </button>
</div>

<div id="clearDesktop">
  <button class="btn btn-nav" type="button" onclick="menuClearDesktop()">
    Clear
  </button>
</div>

<nav>
  <button class="clearCel btn btn-nav" type="button" onclick="menuClearCel()">
    Clear
  </button>
</nav>

<footer>
  <script src="./js/selectionFunctions.js">

  </script>
  <script src="./js/desktop.js">

  </script>
  <script src="./js/cell.js">

  </script>
</footer>
