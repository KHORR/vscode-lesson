'use strict';

// $('a').mouseover(function() {
//   console.log('マウスオーバーしました');
// });

// function showMessage() {
//   console.log('マウスオーバーしてます');
// }

// const numbers = [1, 4, 7, 8, 10];
// const evenNumbers = numbers.filter(number => {
//   if (number %2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
//   });
// console.log(evenNumbers);



  // window.onload = function() {
  //   // セレクタ：処理対象となるDOM要素を指定する記法
  //   // メソッド：処理
  //   // メソッドチェーン
  // $(function(){
  //   // $('p').css('color', 'red');
  //   // console.log($('input').val());
  //   // $('input').val('hello,again!');

  // });
  
  //   $('input').val('hello,again!');
  //   $('p').addClass('mystyle');
  //   $('#sub >li:eq(2)').css('color','red');
  //   var li = $('<li>').text('just added');
  //   // $('ul > li:eq(0)').before(li);
  //   $('ul > li:eq(0)').before(li);
  //   $('ul > li:eq(3)').before(li);
  //   $('ul > li:eq(5)').before(li);
  //   $('ul > li:eq(5)').after(li);
  //   $('#wrapper').children('a').css('color','red');
  //   $('a').attr('href','new.html');
    // li.insertBefore($('ul > li:eq(0)'));
  //   li.insertAfter($('ul > li:eq(0)'));
  // };

//  console.log($('a').attr('href'));
//  console.log($('a').attr('href'));
//  console.log($('a').attr('href'));


  // const h1 = document.querySelector('h1');
  // h1.addEventListener('click',() => {
  // h1.textContent = 'Changed!';
  // });
//   const cafe = {
//     name: "Progateカフェ",
//     businessHours: {
//     opening: "10:00(AM)",
//     closing: "8:00(PM)"
//     },
//     // menusプロパティに配列を代入してください
// menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
// };

// console.log(`店名: ${cafe.name}`);
// console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
// console.log(`----------------------------`);
// console.log("おすすめメニューはこちら");

// // for文を用いて配列menusの中身を表示させてください
// for (let i=0; i < cafe.menus.length; i++){
//   console.log(cafe.menus[i]);
// }
// for (let i = 0; i < cafe.menus.length; i++) {
// //   console.log(cafe.menus[i]);
// //   }
// const sentence = "あああ,いいい,ううう,えええ";
// const result = sentence.split(",");
// console.log(result);

// 下記動かないエラーになるsentenceis not defined
// for(let l of sentence.split(",")){
//   console.log(l);
//   }

// const add = (number1,number2) => {
//   console.log(number1 + number2);
// };
// add(5,8);
// $(function(){
//   console.log($('a').attr('href'));
// });
// window.onload = () => {
  // const signal = 'red';
//     if (signal === 'red') {
//     console.log('stop!');
//     } else if (signal === 'yellow') {
//     console.log('caution!');
//     } else if (signal === 'blue'){
//     console.log('go!');
//     }
//   }

    // switch(signal){
    //   case 'red':
    //     console.log('stop!');
    //     break;
    //   case 'yellow':
    //     console.log('caution!');
    //     break;
    //   case 'blue':
    //     console.log('go!');
    //     break;
    //   default:
    //       console.log('wrong singnal!');
    //   break;
    // }




// $(function(){
//   $('#sub > li:eq(2)').css('color','red');
//   $('#sub > li:eq(3)').css('color','blue').css('background-color','yellow');
// });
// $(function(){
//   $('a').attr('href','new.html');
// });

// $(function(){
//   $('p').text('just changed');
// });
// $(function(){
//   $('#box').click(function(){
//     alert("hi!");
//   }); 
//   $('#box').mouseover(function() {
//     $(this).css('background', 'green');
//     })
//   .mouseout(function() {
//     $(this).css('background', 'red');
//     })
//   .mousemove(function(e) {
//       $(this).text(e.pageX);
//   });
// });
// $(function(){

// for(let number = 1; number <=100; number++){
//   if (number %3 === 0){
//     console.log('3の倍数です');
//   } else {
//   console.log(number);
// }
// }
// });

// $(function(){
//   class Animal {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
    
//     greet() {
//     console.log("こんにちは");
//     }
    
//     info() {
//     this.greet();
//     console.log(`名前は${this.name}です`);
//     console.log(`${this.age}歳です`);
//     }
//     }
    
//     // Animalクラスを継承してDogクラスを定義してください
//     class Dog extends Animal {

//     }
    
//     const animal = new Animal("レオ", 3);
//     animal.info();
// });

// 下記が実行されないというかまず書き方がわかってない
  // sentence = "あああ,いいい,ううう,えええ";
  // l =sentence.split(",");
  //   console.log(l);
// $(function(){
//   // sentence = "あああ,いいい,ううう,えええ";
//   for(let l of sentence.split(",")){
//     console.log(l);
//   }
// });

// const h1 = document.querySelector('h1');
// h1.addEventListener('click',() => {
//   h1.textContent ='changed!';
// });

// 下記動かない
// const h1 = document.querySelector('h1');

// h1.addEventListener('click',() => {
// h1.textContent ='Changes!';
// });

// window.onload = function() {
// window.onload = () => {
//   // $('a').attr('href','new.html');
// const h1 = document.querySelector('h1');

// h1.addEventListener('click',() => {
// h1.textContent ='Changed!';
// $('h1').css('color','red');
// });
// // $('h1').css('color','red');
// };

// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 1000}
//   ];
//   console.log(characters[0]);
//   console.log(characters[1].name);

  // switch (signal) {
  //   case 'red':
  //     console.log('stop!');
  //   break;
  //   case 'yellow':
  //     console.log('caution!');
  //   break;
  // }
  // lines = [0, 1, 2, 3, 4]
//   // window.onload = () => {
//   const lines = [0, 1, 2, 3, 4]
//   for(let l of lines){
//     console.log(l);
//   }
// // }

// // const characters = [
// //   {name: "にんじゃわんこ", age: 14},
// //   {name: "ひつじ仙人", age: 100},
// //   {name: "ベイビーわんこ", age: 5},
// //   {name: "とりずきん"}
// //   ];
  
// //   for (let i = 0; i < characters.length; i++) {
// //   console.log("--------------------");
  
// //   const character = characters[i];
  
// //   console.log(`名前は${character.name}です`);
  
//   // console.log(`年齢は${charcter.age}ですぞ！。`);
//   // }
//   // if(character.age === undefined){
//     // if (character.age === undefined) {
//     //   console.log("年齢は秘密です");
//     //   } else {
//     //   console.log(`${character.age}歳です`);
//     //   }
//     // }

//   const sentence1 = "あああ,いいい,ううう,えええ";
//   for(let l of sentence1.split(",")){
//     console.log(l);
//   }

//   const animals = ["dog", "cat", "sheep"];
//   for(let i=0; i < animals.length; i++){
//     console.log(animals[i]);
//   }
  
//   console.log($('input').val());
//   $('input').val('hello, again!');

//   const h1 = document.querySelector('h1');
//   h1.addEventListener('click',() => {
//     h1.textContent='changed!';
//     // 文字を赤にするを追加したいが、下記の書き方でよいのか？
//     $('h1').css('color','red');
//   })

    // const scores = [80, 90, 40, 70];
    // scores.splice(1, 1, 40, 50);
    // scores.push(60, 50);
    // scores.shift();
    // console.log(scores[1]);
    // scores[2] = 44;
    // console.log(scores);
    // console.log(scores.length);
    // console.log(`Score: ${scores[0]}`);
    // console.log(`Score: ${scores[1]}`);
    // console.log(`Score: ${scores[2]}`);
    // for(let i = 0; i < 3; i++) {
    // for(let i = 0; i < scores.length; i++) {
    //   console.log(`Score ${i}: ${scores[i]}`);
    // }

    // const otherScores =[10, 20,30];
    // const scores = [80, 90, 40, 70, ...otherScores];
    // // console.log(scores);

    // function sum(a, b, c) {
    //   console.log(a + b +c);
    // }

    // sum(...otherScores);
  
    // const sentence = "あああ,いいい,ううう,えええ";
    // for(let l of sentence.split(",")){
    //   console.log(l);
    //   }
    // どっとインストールJS分割代入
    // const scores = [80, 90, 40, 100];

    // const [a, b, c, d] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // const [a, b, ...others] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(others);

    // let x = 30;
    // let y = 70;
    // [x, y] = [y, x];
    // console.log(x);
    // console.log(y);
    // const scores = [80, 90, 40, 100];
    // scores.forEach((score, index) => {
    //   console.log(`Score ${index}: ${score}`);
    //   // console.log(score);
    // });

    // const scores = [80, 90, 40, 100];
    // const[a,b,c,d] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // const scores = [80, 90, 40, 50];
    // const[a,b,...others] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(others);
    // console.log(d);
    // const prices = [180, 190, 200];
    // const updatedPrices = prices.map((price) => {
    //    return price + 20;
    // });  
    // # const updatedPrices = prices.map(price => price + 20);
    //  console.log(updatedPrices);

    //  const numbers = [1, 4, 7, 8, 10];

    //  const evenNumbers = numbers.filter(number => {
    //    if (number % 2 === 0) {
    //      return true;
    //    } else {
    //      return false;
    //    }
    //  });
   
    //  const evenNumbers = numbers.filter(number => number % 2 === 0);
   
    //  console.log(evenNumbers);
    // const point = [100, 180];
    // // const point = {x: 100, y: 180};
    // console.log(point);

    // const point = {
    //   x: 100, 
    //   y: 180,
    // };
    // const keys = Object.keys(point);
    // console.log(keys);
    // keys.forEach(key => {
    //   console.log(key);
    //   console.log(`Key: ${key}`);
    // });
    // const prices = [180, 190, 200];
    // const updatedPrices = prices.map((price) => {
    //   return price + 20;
    // });
    // console.log(updatedPrices);

    // const otherProps = {
    //   r: 4,
    //   color:'red',
    //   }
      
    //   const point = {
    //   x: 100,
    //   y: 180,
    //   ...otherProps,
    //   };
      
    //   // console.log(point);
    //   const {x, r, ...others} = point;   
    //   console.log(x);   
    //   console.log(r);   
    //   console.log(others);   

      // const point = {
      //   x: 100,
      //   y: 180,
      //   };
      //   const keys = Object.keys(point);
      //   console.log(keys);
      //   keys.forEach(key => {
      //     console.log(key);
      //     console.log(`Key: ${key}`);
      //   });
      // const numbers = [1, 4, 7, 8, 10];
      // const evenNumbers = numbers.filter(number => {
      //   if(number %2 === 0) {
      //   return true;
      // } else {
      //   return false;
      // }
      // });

      // console.log(evenNumbers);
      // const otherProps = {
      //   r: 4,
      //   color:'red',
      //   }
        
      //   const point = {
      //   x: 100,
      //   y: 180,
      //   ...otherProps,
      //   };
        
      //   console.log(point);
      // const point = {
      //   x: 100,
      //   y: 180,
      //   };
      //   const obj = Object.keys(point);
      //   console.log(obj);
      // const numbers = [1, 4, 7, 8, 10];

      // const evenNumbers = numbers.filter(number => number % 2 === 0);

      // console.log(evenNumbers);
      // const point = {
      //   x: 100,
      //   y: 180,
      //   };
        
      //   point.x = 120;
      //   point.z =150;
      //   delete point.y;
      //   console.log(point);
      // let x = [1, 2];
      // let y = x;
      // x[0] = 5;
      // console.log(x); // [5, 2]
      // // console.log(y); // [5, 2]
      // const str = 'hello';

      // // console.log(str.length);
    
      // // str.substring(開始位置, 終了位置);
      // console.log(str.substring(2, 4));
    
      // console.log(str[1]);
      // // str[1] = 'a';
      // const d = [2019, 11, 14];

      // console.log(d.join('/'));
      // console.log(d.join(''));
    
      // const t = '17:08:24';
      // console.log(t.split(':'));
      // const [hour, minute, second] = t.split(':');
      // console.log(hour);
      // console.log(minute);
      // console.log(second);
      // console.log(`hour: ${hour}`);
      // console.log(`minute: ${minute}`);
      // console.log(`second: ${second}`);

      // const characters = [
      //   {name: "にんじゃわんこ", age: 14},
      //   {name: "ひつじ仙人", age: 1000}
      //   ];
      //   console.log(characters[0]);
      //   console.log(characters[1].name);
      //   const str1 = 'hello';
      //   console.log(str1.substring(2,4));
      // const d = [2019, 11, 14];
      // console.log(d.join('/'));
      // const t = '17:08:24';
      // console.log(t.split(':'));
      // const[h, m, s] = t.split(':');
      // console.log(`h: ${h}`);
      // console.log(m);
      // console.log(s);
    //   const numbers = [1, 4, 7, 8, 10];
    //   const evenNumbers = numbers.filter(numbers => {
    //     if (numbers %2 ===0) {
    //   return true;
    // } else {
    //   return false;
    // } 
    // });

      // console.log(evenNumbers);
 
        
        // const point = {
        //   x: 100,
        //   y: 180,
        //   };
        //   const keys = Object.keys(point);
        //   console.log(keys);
        //   keys.forEach(key => {
        //     // console.log(key);
        //     console.log(`Key: ${key}`);
        //   });
     
       
        
          // 
        //  console.log(Math.floor(Math.random() * 6)  1);
        // // // // // 
        // scores.forEach(score => {
          // const scores = [80, 90, 40, 100];

          // const otherProps = {
          //   r: 4,
          //   color:'red',
          //   }
            
          //   const point = {
          //   x: 100,
          //   y: 180,
          //   ...otherProps,
          //   };
            
          //   const{x, r, ...others} = point;
          //   console.log(x);
          //   console.log(r);
          //   console.log(others);
          // const point = {
          //   x: 100,
          //   y: 180,
          //   };
          //   const keys =Object.keys(point);
          //   console.log(keys);
          // const object1 = {
          //   a: 'somestring',
          //   b: 42,
          //   c: false
          // };
          
          // console.log(Object.keys(object1));
          // const str = 'hello';
          // console.log(str.substring(2,4));
          // const signal = 'blue'
          // switch(signal){
          //   case 'red':
          //     console.log('stop!');
          //     break;
          //   case 'yellow':
          //     console.log('caution!');
          //     break;
          //   case 'blue':
          //   case 'green':
          //     console.log('go!');
          //     break;
          //   default:
          //     console.log('caution!');
          //     break;
          // }

          // const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
          // for(let i = 0; i < animals.length; i++) {
          //   console.log(animals[i]);
          // }
          // let i = 0;
          // function showTime() {
          //   console.log(new Date());
          // };
          // setTimeout(showTime, 1000);

          // var li = $('<li>').text('just added');
          // $('ul').append(li);
          // // // // // 
          // let sum = 0;
          // scores.forEach(score => {
          //   sum += score;
          // });
          // const avg = sum / scores.length;
          // console.log(sum);
          // console.log(avg);
          // let i = 0;
          // function showTime() {
          //   console.log(new Date());
            
          //   i++;
          //   if(i > 2) {
          //     clearInterval(intervalid);
          //   }
          // };
          // const intervalid = setInterval(showTime, 1000);
          // function showTime() {
          //   console.log(new Date());
          //   };
          //   setTimeout(showTime, 5000);
    //  let sum =0;
    //       // // // // 
    //       scores.forEach(score => {
    //       sum += score;
    //       });
          
    //       const avg = sum / scores.length;
    //       console.log(avg);
    //       console.log(Math.floor(avg));
    //       console.log(Math.ceil(avg));
    //       console.log(Math.round(avg));
    //       console.log(avg.toFixed(3));
    //       console.log(Math.random());
// console.log(Math.random());
// console.log(Math.floor(Math.random()*3));
// console.log(Math.floor(Math.random()*3 + 1));
// // // // // 
// let sum = 0;
// scores.forEach(score => {
//   sum += score;
// });
// const avg = sum / scores.length;
// console.log(sum);
// // console.log(avg);
// const scores = [80, 90, 40, 100];
// const [a, b, ...others] = scores;
// console.log(a);
// console.log(b);
// console.log(others);
// // // // 
// let sum = 0;
// scores.forEach(score => {
//   sum += score;
// });
// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);
// const sentence = "あああ,いいい,ううう,えええ";
// for(let l of sentence.split(",")) {
//   console.log(l);
// };
// class Post {
//   constructor(text) {
//     this.text = text;
//     this.likeCount = 0;
//   }

//   show() {
//     console.log(`${this.text} - ${this.likeCount}likes`);  
//   }

//   like() {
//     this.likeCount++;
//     this.show();
//   }

//   // 静的メソッド
//   // thisは使えない
//   // static showInfo() {
//   //   console.log('Post class version 1.0')
//   // }
// };
// class SponsoredPost {
//   constructor(text, sponsor) {
//     this.text = text;
//     this.likeCount = 0;
//     this.sponsor = sponsor;
//   }

//   show() {
//     console.log(`${this.text} - ${this.likeCount}likes`);  
//     console.log(`...sponsord by ${this.sponsor}`);  
//   }

//   like() {
//     this.likeCount++;
//     this.show();
//   }

//   // 静的メソッド
//   // thisは使えない
//   // static showInfo() {
//   //   console.log('Post class version 1.0')
//   // }
// }
// const posts = [
//   new Post('JabaScriptの勉強中…'),
//   new Post('プログラミング楽しい…'),
//   new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
// ];

// // posts[0].likeCount++;
// // posts[2].show();
// posts[2].like();
// Post.showInfo();
// posts[0].show();
// posts[1].show();
// const name = 5;
// try {
//   console.log(name.toUpperCase());
// } catch(e) {
//   console.log(e);
// }
// console.log('Finish!');
// const prices = [180, 190, 200];
// const updatedPrices = prices.map(price => price + 20);
// console.log(updatedPrices);

// const point = {
//   x: 100,
//   y: 180,
//   };
  
//   point.x = 120;
//   point.y = 180;
//   point.z =220;
//   delete point.y;
//   console.log(point);
// class Post {
//   constructor(text) {
//     this.text = text;
//     this.likeCount = 0;
//   }

//   show() {
//     console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
// }
// const posts = [
//   new Post('JabaScriptの勉強中…'),
//   new Post('プログラミング楽しい…'),
//   ];
  

  
  // show(posts[0]);
  // posts[0].show();
  // posts[1].show();
//  
// const prices = [180, 190, 200];
// const updatedPrices = prices.map((price) => {
//   return price + 20;
// });
// console.log(updatedPrices);
// class Post {
//   constructor(text) {
//   this.text = text;
//   this.likeCount = 0;
//   }
  
//   show() {
//   console.log(`${this.text} - ${this.likeCount}likes`);
//   }
  
//   like() {
//   this.likeCount++;
//   this.show();
//   }
//   //静的メソッド
//   //thisは使えない
//   static showInfo() {
//     console.log('Post classversion 1.0');
//   }
//   }
//   const posts = [
//   new Post('JabaScriptの勉強中…'),
//   new Post('プログラミング楽しい…'),
//   ];
  
  
//   // posts[0].like();
//   Post.showInfo();
// const h1 = document.querySelector('h1');
// h1.addEventListener('click', () => {
// h1.textContent = 'Changed!';
// // $('h1').css('color', 'red');
// document.fgColor = "#0080ff"; // text：文字の基本色
// document.bgColor = "#eeeeff"; // bgcolor：背景色
// });

// const posts = [
//   {
//   text: 'JabaScriptの勉強中…',
//   likeCount: 0,
//   },
//   {
//   text: 'プログラミング楽しい…',
//   likeCount: 0,
//   },
//   ];
//   function show(post) {
//     console.log(`${post.text} ${post.likeCount}いいね`);
//   }
  // show(post[0]);
  
  // const posts = [
  //   {
  //     text: 'JavaScriptの勉強中…',
  //     likeCount: 0,
  //   },
  //   {
  //     text: 'プログラミング楽しい！',
  //     likeCount: 0,
  //   },
  // ];

  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}いいね`);
  // }

  // show(posts[1]);
//   const str = 'hello';
//  console.log(str.substring(2,4));
//  console.log(str.substring(1,2));
//  console.log(str.substring.class);
// window.onload = function() {
//   $('#main > .item').css('color','blue');
// };

  // $('#sub > li:eq(2)').siblings().css('color','red');
  // $('a[href$="jp"]').css('background','red');

  // 下記それぞれ複数あるはずだが１つしか取り出せないのか？
  // console.log($('p > a').attr('href'));
  // console.log($('a').attr('href'));

  // $('p').text('justchanged');
// $('p').empty();
// $('#box').mouseover(function() {
//   $(this).css('background','green');
// })
// .mouseout(function() {
//   $(this).css('background','red');
// });

// $('#name').focus(function() {
//   $(this).css('background','gray');
// })
// .blur(function() {
//   $(this).css('background','white');
// });

// $('button').click(function() {
//   var p = $('<p>').text('vanish!').addClass('vanish');
//   $(this).after);
// })

// $('body').on('click','.vanish', function() {
//   $(this).remove();
// });

// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 1000}
//   ];
//   console.log(characters[0]);
//   console.log(characters[1].name);
//   console.log(characters[1].age);
// const scores = [80, 90, 40, 70];
// scores.splice(1, 1, 40, 50);

// for(let i = 0; i < scores.length; i++) {
//   console.log(`Score ${i}: ${scores[i]}`);
// }
// function showTime() {
//   console.log(new Date());
// };
// setTimeout(showTime, 2000);
// setInterval(showTime, 2000);
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 100},
//   {name: "ベイビーわんこ", age: 5},
//   ];
//   for(let i = 0; i < characters.length; i++) {
//     const character = characters[i];
//     console.log(`名前は${character.name}です`);
//     console.log(`${character.age}歳です`);
//   }
  // const point = {
  //   x: 100,
  //   y: 180,
  //   };
  //   console.log(Object.keys(point));
    // const keys = Object.keys(point);
    // // console.log(keys);
    // keys.forEach(key => {
    //   console.log(`Key: ${key}`);
    // });
    // let i = 0;
    // function showTime() {
    //   console.log(new Date());
    //   i++;
    //   if (i > 2) {
    //     clearInterval(intervalid);
    //   }
    // };
    //   const intervalid = setInterval(showTime, 1000);
    // // // // 
    // let sum = 0;
    // scores.forEach(score => {
    //   sum += score;
    // });
    // const avg = sum / scores.length;
    // console.log(sum);
    // console.log(avg);
    // let number = 1;
    // while(number <=100){
    //   console.log(number);
    //   number += 1;
    // }
    // const lines = [0, 1, 2, 3, 4]
    // for(let l of lines){
    //   console.log(l);
    // }
    // const posts = [
    //   {
    //   text: 'JabaScriptの勉強中…',
    //   likeCount: 0,
    //   show() {
    //     console.log(`${this.text} - ${this.likeCount}いいね`);
    //   }
    //   },
    //   {
    //   text: 'プログラミング楽しい…',
    //   likeCount: 0,
    //   show() {
    //     console.log(`${this.text} - ${this.likeCount}いいね`);
    //   }
    //   },
    //   ];
      

      
    //   posts[0].show();
    //   posts[1].show();

    // let x = 30;
    // let y = 70;
    // [x, y] = [y, x];
    // console.log(x);
    // console.log(y);
    // const scores = [80, 90, 40, 100];
    // const [a, b, c, d] = scores;
    // console.log(a);
    // const d = new Date();
    // console.log(d);
    // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);    
    // const posts = [
    //   {
    //   text: 'JabaScriptの勉強中…',
    //   likeCount: 0,
    //   },
    //   {
    //   text: 'プログラミング楽しい…',
    //   likeCount: 0,
    //   },
    //   ];
    //   function show(post) {
    //     console.log(`${post.text} - ${post.likeCount}いいね`);
    //   }
    //   show(posts[0]);
    // $('p').text('just changed');
    // $('p').html('<a href="">click me!</a>');
    // $('p').html('<a href="http://google.com">click me!</a>');
    // const posts = [
    //   {
    //   text: 'JabaScriptの勉強中…',
    //   likeCount: 0,
    //   },
    //   {
    //   text: 'プログラミング楽しい…',
    //   likeCount: 0,
    //   },
    //   ];
    //   function show(post) {
    //     console.log(`${post.text}-${post.likeCount}`);
    //   }
    //   show(posts[0]);
    //   show(posts[1]);
    // class Post {
    //   constructor(text) {
    //   this.text = text;
    //   this.likeCount = 0;
    //   }
      
    //   show() {
    //   console.log(`${this.text} - ${this.likeCount}likes`);
    //   }
      
    //   like() {
    //   this.likeCount++;
    //   this.show();
    //   }
    //   //静的メソッド
    //   //thisは使えない
    //   static showInfo() {
    //     console.log('Post class version 1.0')
    //   } 
    //   }
    //   const posts = [
    //   new Post('JabaScriptの勉強中…'),
    //   new Post('プログラミング楽しい…'),
    //   ];

      
      // posts[0].like();
      // Post.showInfo();
// $('a[href*="dotinstall"]').css('background','red');
// $('a[href$="jp"]').css('background','red');
// const d = new Date();
// d.setDate(d.getDate() + 3);
// console.log(d);

// const d =new Date();
// d.setDate(d.getDate()+ 3);
// console.log(d);

// const signal = 'pink'
// switch(signal) {
//   case 'red':
//   console.log('stop!');
//   break;
//   case 'yellow':
//   console.log('caution!');
//   break;
//   case 'blue':
//     case 'green':
//   console.log('go!');
//   break;
//   default:
//     console.log('wrong signal');
//   break;
// }
// const otherProps = {
//   r: 4,
//   color:'red',
//   }
  
//   const point = {
//   x: 100,
//   y: 180,
//   ...otherProps,
//   };
  
//   console.log(point);


//   const {x, r, ...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);
// let i = 0;
// function showTime() {
//   console.log(new Date());
//   i++;
//   if (i > 2) {
//     clearInterval(intervalid);
//   }
//   };
// // setTimeout(showTime, 1000);
// const intervalid = setInterval(showTime, 1000);
// let i = 0;
// function showTime() {
//   console.log(new Date());
//   i++;
//   if (i > 2){
//     clearInterval(intervalid);
//   };
//   }
// //   const intervalid = setInterval(showTime, 1000);
// class Post {
//   constructer(){
//     this.text = text;
//     this.likeCount = 0; 
//   }
//   show() {
//   console.log(`${this.text} - ${this.likeCount}いいね`);
//   }
// }
// const posts = [
//    new Post('JabaScriptの勉強中…')
//    new Post('プログラミング楽しい…')
//    ];
//   // show(posts[0]);
//   posts[0].show();
//   posts[1].show();


// const d = [2019, 11, 14];
// console.log(d.join('/'));
// console.log(d.join(''));
// const t = '17:08:24';
// console.log(t.split(':'));
// const[hour, minute, second] = t.split(':');
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(`Hour: ${hour}`);
// console.log(`Minute: ${minute}`);
// console.log(`Second: ${second}`);

// const prices = [180, 190, 200];
// const updatedPrices = prices.map(price => 
// price + 20);

// console.log(updatedPrices);

// const h1 = document.querySelector('h1');
// h1.addEventListener('click',() => {
//   h1.textContent = 'Changed!';
// });

// const numbers = [1, 4, 7, 8, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);


// console.log(evenNumbers);

// function showTime() {
//   console.log(new Date());
//   };
//   setTimeout(showTime, 1000);
// const numbers = [1, 4, 7, 8, 10];
// const evenNumbers = numbers.filter(number => {
//   if (number %2 === 0) {
//     return true;
//   } else {
//     return false;
//   }

// });

// console.log(evenNumbers);

// const posts = [
//   {
//     text: 'JabaScriptの勉強中…',
//     likeCount: 0,
//     show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//         }
//   },
//   {
//   text: 'プログラミング楽しい…',
//   likeCount: 0,
//   },
//   ];
  
  
  // show(posts[0]);
  // posts[0].show();

  // const prices = [180, 190, 200];
  // const updatedPrices = prices.map(price => {
  //   return price +20;
  // });
  // console.log(updatedPrices);
  // const characters = [
  //   {name: "にんじゃわんこ", age: 14},
  //   {name: "ひつじ仙人", age: 1000}
  //   ];
    
  //   console.log(characters[0]);
  //   console.log(characters[1].name);

  // // // // 
  // let sum = 0;
  // scores.forEach(score => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // console.log(sum);
  // console.log(avg);

  // let number = 1;
  // while (number <= 100) {
  //   console.log(number);
  //   number += 1;
  // }
  // // // // 
  // let sum = 0;
  // scores.forEach(score => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // console.log(sum);
  // console.log(avg);
  // const lines = [0, 1, 2, 3, 4]
  // for(let l of lines) {
  //   console.log(l);
  // }
  // const name = 'taguchi';
// まちがって数字が入力された
// const name = 5;
// try {
//   console.log(name.toUpperCase());
// } catch(e) {
//   console.log(e);
// }
// console.log('Finish!');
// const point = {
//   x: 100,
//   y: 180,
//   };
//   console.loconst
// const d = new Date();
// console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`)
// console.log(d);
// let i = 0;
// function showTime() {
  // console.log(new Date());
  // i++;
  // if (i > 2) {
  //   clearInterval(intervalid);
  // }
  // };
  // const intervalid = setInterval(showTime, 1000);
  // const numbers = [1, 4, 7, 8, 10];
  // const evenNumbers = numbers.filter(number => {
  //   if (number %2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // console.log(evenNumbers);
  // const prices = [180, 190, 200];
  // const updatedPrices = prices.map((price) => {
  //  return price + 20;
  // });
  // console.log(updatedPrices);
  // function showTime() {
  //   console.log(new Date());
    
  //   };
    
  //   setInterval(showTime, 1000);
 
  // const scores = [80, 90, 40, 70];
  // scores.splice(1, 3, 50, 60, 70);
  // for(let i = 0; i <scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // // //   // console.log(`Score ${i}: ${scores[i]}`);
  // const d = new Date();
  // d.setDate(d.getDate() + 3);
//   // console.log(d);function showTime() {
// let i = 0;  
// function showTime() {
//     console.log(new Date());
//     };
//     i++;
//     if (i > 2) {
//       clearInterval(intervalid);
//     }
    
//     setInterval(showTime, 1000);
// const d = [2019, 11, 14];
// console.log(d.join('/'));
// console.log(d.join(''));

// const t = '17:08:24';
// console.log(t.split(':'));
// const[hour, minute, second] = t.split(':');
// console.log(hour);
// console.log(minute);
// console.log(second);
// $('p').text('just changed!');
// $('#box').click(function(){
//   alert("hi!");
// });
// const numbers = [1, 4, 7, 8, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);


// console.log(evenNumbers);
// let i = 0;
// function showTime() {
  // console.log(new Date());
  // i++;
  // if (i > 2) {
  //   clearInterval(interValid);
  // }
  // };
  
  // // // const interValid = setInterval(showTime, 1000);
  // const posts = [
  //   {
  //   text: 'JabaScriptの勉強中…',
  //   likeCount: 0,
  //   },
  //   {
  //   text: 'プログラミング楽しい…',
  //   likeCount: 0,
  //   },
  //   ];
  //   function show(post) {
  //     console.log(`${post.text}-${post.likeCount}いいね`);
  //   }
  // // //   show(posts[0]);
  
// $('button').click(function() {
//   var p = $('<p>').text('vanish!').addClass('vanish');
//   $(this).before(p);
//   });
  
//   $('body').on('click', '.vanish', function() { $(this).remove();
//   });
// // // // 
// let sum =0;
// scores.forEach(score => {
// sum += score;
// })
// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);
// let number =1;
// while(number <= 100) {
//   console.log(number);
//   number += 2;
// // }// const name = 'taguchi';
// まちがって数字が入力された

// class Post {
//   constructor(text) {
//     this.text = text;
//     this.likeCount = 0;
//   }

//   show() {
//   console.log(`${this.text} - ${this.likeCount}いいね`);
//   }
// }
// const posts = [
//   new Post('JabaScriptの勉強中…'),
//   new Post('プログラミング楽しい…'),
//   ];
//   // show(posts[0]);
//   posts[0].show();
// //   posts[1].show();
// const d = '17:08:24';
// const j = d.split(':');
// console.log(j);
// const [h, m, s] = d.split(':');
// console.log(`h: ${h}`);
// console.log(`m: ${m}`);
// console.log(`s: ${s}`);
// $('#box').toggle(800,function() {
//   alert('hi!')
// // });
// let sum = 0;
// // // // 
// scores.forEach(score => {
// sum += score;
// });

// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);
// console.log(avg.toFixed(3));
// console.log(Math.floor(avg));
// console.log(Math.ceil(avg));
// console.log(Math.round(avg));
// console.log(Math.random(avg));
// const d = new Date();
// const md = `${d.getMonth() + 1}月${d.getDate()}`;
// console.log(md);
// $('a[href*="dotinstall"]').css('background','red');
// // $('a[href$="jp"]').css('background','red');
// // // // 
// const posts = [
//   {
//   text: 'JabaScriptの勉強中…',
//   likeCount: 0,
//   },
//   {
//   text: 'プログラミング楽しい…',
//   likeCount: 0,
//   },
//   ];
//   function show(post) {
//     console.log(`${post.text}-${post.likeCount}いいね`);
//   }
//   console.log(posts[0]);
// //   console.log(posts[1]);
// let sum = 0;
// // // // 
// scores.forEach(score => {
//   sum += score;
// });
// const avg = sum / scores.length;
// console.log(sum);
// console.log(avg);

// for(let i = 0; i <= 100; i++)
// // // console.log(i);lines = [0, 1, 2, 3, 4]
// const lines = [0, 1, 2, 3, 4]
// for(let l of lines) {
//   console.log(l);
// }
// const posts = [
//   {
//   text: 'JabaScriptの勉強中…',
//   likeCount: 0,
//     show() {
//     console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   },
//   {
//   text: 'プログラミング楽しい…',
//   likeCount: 0,
//   },
//   ];
  
  
// // //   posts[0].show();
// const half = (number) => {
//   // numberを2で割った値を戻り値として返してください
//   return number / 2;
//   };
  
  // // // 定数resultを定義してください
  // // const d = [2019, 11, 14];const point = {
 
 
  
    // const prices = [180, 190, 200];
    // const updatedPrices = prices.forEach(price => {
    //   return price + 20;
    // });
    // console.log(updatedPrices);
    
 
      

// 「〇〇歳です」を出力してください
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 100},
//   {name: "ベイビーわんこ", age: 5},
//   ];
  
//   // for文を完成させてください
//   for (let i = 0; i < characters.length; i++) {
//   console.log("--------------------");
  
//   // 定数characterを定義してください
//   const character = characters[i];
  
//   // 「名前は〇〇です」を出力してください
//   console.log(`名前は${character.name}です`);
  
//   // 「〇〇歳です」を出力してください
//   console.log(`${character.age}歳です`);
  
//   }
  
// $('button').click(function() {
//   var p = $('<p>').text('vanish!').addClass('vanish');
//   $(this).before(p);
//   });
  
//   $('body').on(click',.vanish',function() {
//   $(this).remove();
// // // //   });class Post {
$('a[href*="dotinstall"]').css('background','red');
$('a[href$="jp"]').css('background','skyblue');
