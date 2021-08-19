// Make task1 element draggable

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text", ev.task1);
}

window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("task1");
    element.addEventListener("dragstart", dragstart_handler);
});

