document.addEventListener('DOMContentLoaded', function() {
  const drawerToggleBtn = document.getElementById('drawerToggleBtn');
  const drawer = document.getElementById('drawer');

  drawerToggleBtn.addEventListener('click', function() {
    drawer.classList.toggle('open');
    drawerToggleBtn.classList.toggle('hide');
  });

  document.addEventListener('click', function(event) {
    const isClickInsideDrawer = drawer.contains(event.target);
    const isClickInsideToggleButton = drawerToggleBtn.contains(event.target);

    if (!isClickInsideDrawer && !isClickInsideToggleButton && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      drawerToggleBtn.classList.remove('hide');
    }
  });

  const img = document.createElement("img");
  img.src = "attdrawer/moranguinho/wp12073516-hello-kitty-and-her-friends-wallpapers.jpg";
  img.style.position = "fixed";
  img.style.top = "0";
  img.style.left = "0";
  img.style.width = "100vw";
  img.style.height = "100vh";
 
  document.body.appendChild(img);
 
});
  