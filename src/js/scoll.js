class Scroll {
  constructor(query, margin) {
    this.element = document.querySelector(query);
    this.margin = margin;
  }

  animateOneWhenVisible = (cb) => {
    const box = this.element.getBoundingClientRect();
    const listener = () => {
      console.log("listener");
      if (box.top <= window.scrollY + this.margin) {
        cb();
        window.removeEventListener("scroll", listener);
      }
    };
    window.addEventListener("scroll", listener);
  };
}

export default Scroll;
