import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  //creatElementでJS内でhtmlのDOMを生成できる
  const div = document.createElement("div");
  //classNameでdivのクラスを付与できる
  div.className = "list-row";

  const li = document.createElement("li");
  //li.innerTextでli入力した値を格納する
  li.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
