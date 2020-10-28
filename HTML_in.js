//オブジェクトの生成
let human= { name: 'yamada'}

console.log(human.name)

//プロパティの追加 
let human = { name: 'yamada' }
console.log(human)

human.age = 25　//方法１
human['address'] = 'Tokyo' //方法２

console.log(human)

//プロパティの値を取得する
console.log(human.name)

//プロパティの値を変更する オブジェクト名.
let human = {
  name: "yamada",
  age: 25,
  address: 'Tokyo'
}

console.log(human.name)

human.name = "yabe" //ここ！
console.log(human.name)

<!--オブジェクトのメソッド-->
let human = {
  name: "yamada",
  age: 25,
  address: 'Tokyo',
// talkがメソッド
  talk: function(){
    console.log(`私の名前は${human.name}、${human.age}歳です。住所は${human.address}です`)
  }
}

human.talk()

//windowにアラートを表示
window.alert("ナスの味噌汁！！") //windowは省略できる

<!--HTMLの取得-->
//("#id")と書く
document.getElementById("id名")
//(".class名")と書く Elements に注意
document.getElementsByClassName("class名")
//("タグ")と書く
document.querySelectorAll("セレクタ名")
//セレクタ名を指定した要素のうち、一番最初に見つかった要素だけ取得
document.querySelector("セレクタ名")