document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  let hourOhClock = (new Date().getTime() / 1000) + (86400 * 1) + 1;

  // Set up FlipDown
  const flipdown = new FlipDown(hourOhClock, {
    theme: "light",
    // headings: ["Days", "Hours", "Minutes", "Seconds"],
    headings: ["", "", ""],
    ohClock: true
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000)

});
