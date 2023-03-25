import "./styles.css";

const onClickAdd = () => {
    // テキストボックの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;

    // button（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // button（削除）タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // divタグの子要素に各要素を設定
    div.appendChild(li);

    // 未完了リストに追加
    document.getElementById("imcomplete-list").appendChild(div);
    
};

console.log(document.getElementById("add-button"));

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());

