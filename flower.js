
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
function showText() {
    var textElement = document.getElementById('text');
    textElement.classList.toggle('show-text');
}