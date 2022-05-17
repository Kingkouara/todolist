import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  //creatElementでJS内でhtmlのDOMを生成できる
  const div = document.createElement("div");
  //classNameでdivのクラスを付与できる
  div.className = "list-row";

  const li = document.createElement("li");
  //li.innerTextでli入力した値を格納する
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了リストに追加する要素
  completeButton.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを削除
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(li);
    div.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(div);

    deleteFromIncomplteList(completeButton.parentNode);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomplteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
