const text = document.getElementById("text");
const btn = document.getElementById("convert-btn");

const camalCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const sreamSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const kebabScreamCase = document.getElementById("screaming-kebab-case");



function toCamelCase(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

function toSnakeCase(string) {
  return string
    .replace(/\d+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
}
function toSnakeScreamingCase(string) {
  return string
    .replace(/\d+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join(" ");
}
function toKebabCase(string) {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => "-" + chr)
    .trim();
}
function toKebabScreamingCase(string) {
  return string
    .replace(/\d+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join("-");
}

btn.addEventListener("click", function () {
  camalCase.innerHTML = toCamelCase(text.value);
  pascalCase.innerHTML = toPascalCase(text.value);
  snakeCase.innerHTML = toSnakeCase(text.value);
  sreamSnakeCase.innerHTML = toSnakeScreamingCase(text.value);
  kebabCase.innerHTML = toKebabCase(text.value);
  kebabScreamCase.innerHTML = toKebabScreamingCase(text.value);
});
