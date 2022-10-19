const hamMenu = document.getElementById('navmenu');

/* I've to linter out those functions because,
otherwise they would
give the, "no-unused-vars" linter error message.
I've searched for the solution online,
and then this is the solution I found. */

/* eslint-disable */
function hamMenuShow() {
  hamMenu.classList.remove('hidden');
}

/* eslint-disable */
function hamMenuHide() {
  hamMenu.classList.add('hidden');
}

