(function() {
  'use strict';

  // two way databinding (to UI)

//UI に結びつくモデルはよく View Model と呼ばれるので vm という変数名にしておく。そのあと new Vue として、どの領域の Vue と結びつけるかを elements の略である el というキーで指定する。CSS のセレクターのように表現すればいいので #app と書けば OK 
  var vm = new Vue({
    el: '#app',
  //あとはこのモデルに data を保持してもらう。data というキーにしてあげて、キーと値で指定すればいいので、今回 name というキーで taguchi くんという値を保持してもらいましょう。
    data: {
      name: ''
      // memory_lebel_select: 'taguchi'
    }
  })
})();

