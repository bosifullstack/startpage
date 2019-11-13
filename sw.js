(() => {
  self.addEventListener('fetch', e => {
    console.log("Fetching Data through sw")
  });
})();