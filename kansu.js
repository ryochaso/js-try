//<!--関数について-->

//関数の定義
function sayHello(){
  console.log("お味噌")
}

sayHello()

//返り値をreturnで明示する必要がある
function calc(num1,num2){
  return num1*num2
}
const num1 = 3
const num2 = 4
console.log(calc(num1,num2))

// 関数式
変数 = function( 引数 ){
  // 関数内の処理
}

//
hello()

function hello(){
  console.log('hello')
}
// 関数宣言
function hello(){
  console.log('hello')
}

// 関数式（無名関数）
const hello = function(){
  console.log('hello')
}

const calc = function(num1,num2){
  return num1*num2
}
const num1 = 3
const num2 = 4
console.log(calc(num1,num2))

// 即時関数 関数を定義と同時に実行する
(function countNum(num) {
  console.log(num)
})(1)

// アロー関数 functionを省いて() =>で記述
const 変数名 = () => {
  処理
}

const countNum = (num) =>{
  console.log(num)
}
countNum(1)