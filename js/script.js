function setThemeColor(isDark) {
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  if (isDark) {
    themeMeta.setAttribute("content", "#000000"); // dark
  } else {
    themeMeta.setAttribute("content", "#ffffff"); // light
  }
}

// auto-detect system theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

setThemeColor(prefersDark);

// listen for changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    setThemeColor(e.matches);
  });