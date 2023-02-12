// import "./styles.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    alert(inputText);
};

console.log(document.getElementById("add-button"));

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());

console.log(document.getElementById("add-button"));
