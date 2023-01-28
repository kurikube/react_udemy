/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// va4 val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "object1",
//   age: 28
// };
// console.log(val4);

// val4.name = "object2";
// console.log(val4);

// val4.address = "Kobe";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "TestName";
// const age = 28;
// const age2 = 29;

// //「私の名前はTestNameです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age2}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数1
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// アロー関数2
const func2 = (str) =>{
  return str;
}
console.log(func2("func2です"));

// アロー関数3
const func3 = (str) => str;
console.log(func3("func3です"));

// アロー関数4
const func4 = (num1, num2) => {
  return num1 + num2;
};

console.log(func4(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name: "田中",
  age: 28,
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

//分割代入は配列でも使用可能
const myProfile3 = ['田中', 28];

const message3 = `名前は${myProfile3[0]}です。年齢は${myProfile3[1]}歳です。`;
console.log(message3);

const [name4, age4] = myProfile3;
const message4 = `名前は${name4}です。年齢は${age4}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello("田中");








