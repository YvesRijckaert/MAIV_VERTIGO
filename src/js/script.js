{
  const init = () => {
    window.addEventListener(`scroll`, () => {
      let scrolled = window.pageYOffset;
      let win_height_padded = window.innerHeight * 1.1;

      document
        .querySelectorAll(`.revealOnScroll:not(.animated)`)
        .forEach(element => {
          let offsetTop = element.offsetTop;

          if (scrolled + win_height_padded > offsetTop) {
            if (element.dataset.timeout) {
              window.setTimeout(() => {
                element.classList.add(
                  `animated`,
                  `${element.dataset.animation}`
                );
              }, parseInt(element.dataset.timeout, 10));
            } else {
              element.classList.add(`animated`, `${element.dataset.animation}`);
            }
          }
        });
    });
    document.querySelector(`.startscreen-btn`).onclick = () => {
      document.querySelector(`.startscreen`).innerHTML = ``;
      document.querySelector(`.quizcontent`).classList.remove(`hide`);
    };
  };
  init();
}
