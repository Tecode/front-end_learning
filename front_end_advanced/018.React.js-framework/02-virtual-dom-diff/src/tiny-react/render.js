import diff from "./diff";

export default function render(virtualDOM, container, oldDOM = container.firstChild) {
    console.dir(container, '---container');
    diff(virtualDOM, container, oldDOM)
}