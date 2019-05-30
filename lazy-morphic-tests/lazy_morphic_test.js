/*
Playground to test new lazy morphic system and to compare it with the original.
*/

var world;

window.onload = function () {
    world = new WorldMorph(document.getElementById('world'));
    world.worldCanvas.focus();
    world.isDevMode = true;

    let m = new Morph();
    m.setPosition(new Point(100, 50));
    m.setExtent(new Point(400, 300));
    m.color = new Color(255, 0, 0);
    world.add(m);

    loop();
};

function loop() {
    requestAnimationFrame(loop);
    world.doOneCycle();
}
