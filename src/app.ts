const button = document.querySelector("button")!;

/**
 * ボタンを押したときのイベント
 * @param message 表示するメッセージ
 */
function clickHandler(message: string) {
    console.log("Click! " + message);
}

button.addEventListener("click", clickHandler.bind(null, "Hello Typescript"));
