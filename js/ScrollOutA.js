ScrollOut({
  onShown: function(el) {
    // remove the class
    el.classList.remove("animated");

    // force reflow
    void el.offsetWidth;

    // re-add the animated cl
    el.classList.add("animated");
  }
});

ScrollOut({
  scrollingElement: ".scrollable-pane"
});
