VSCodeでTypeScriptをデバッグするためのテンプレート
Template of debugging TypeScript with VSCode
====

Overview

## Description
最小のデバッグ環境と、Typescriptのおすすめのコンパイル設定です。
Minimum debugging environment and recommended compilation settings for Typescript.


## How to use
[【TypeScript】VSCodeでデバッグできるようにする](https://qiita.com/nemutas/items/66f33010b6b3cba129e1)


## Install
[Node.js](https://nodejs.org/ja/)
[Typscript](https://typescript-jp.gitbook.io/deep-dive/getting-started)
[VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)


## VSCode Extensions
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)


## Some tsconfig.json settings

```
"sourceMap": true
```
tsファイルとコンパイルしたjsファイルを.js.mapファイルによって紐づけて、tsコード内でブレークポイントをいれることができるようにします。
Link the ts file and the compiled js file with the .js.map file, so that breakpoints can be placed in the ts code.

```		
"removeComments": true
```
tsファイルをjsファイルにコンパイルするときに、コメント文を削除します。
Remove comment text when compiling ts files to js files.

```
"noEmitOnError": true
```
tsファイルにエラーが出ている場合に、jsファイルにコンパイルしないようにします。
Do not compile to a js file if there is an error in the ts file.

```
"noUnusedLocals": true
```
使用されていないローカル変数に対して、エラーを表示します。
Displays errors for unused local variables.

```
"noUnusedParameters": true
```
使用されていない関数パラメーターに対して、エラーを表示します。
Displays errors for function parameters that are not used.

```
"noImplicitReturns": true
```
returnがある関数内で、暗黙的なreturn（returnを省略する）ことを禁止します。
Prohibits an implicit return (omitting the return) in a function that has a return.


## Author
[nemutas](https://github.com/nemutas)