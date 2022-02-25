// var a = 1000

// function foo(){
//  var a = 1001
//  function bar(){
//  a++;
//  var a = 1010;
//  console.log(a)
//  }
//  bar();
//  }
//  foo()

//  // var foo = new Promise((resolve, reject)=> {
// //     reject(Error('send help'))
// // })
// // foo.catch(error=> console.log(error.message))
// // foo.catch(error=> console.log(error.message))

// // // (Promise.resolve('200!')
// // // .then(() => {
// // //     throw Error('Help!')
// // // })
// // // .catch(error => {
// // //     return 'success'
// // // })
// // // .then(data => {
// // //     throw Error('Data failed')
// // // })
// // // .catch(error => console.log(error.message)))

// // // (function immediateFoo(foo) {
// // //     //     return (function immediateBar(bar) {
// // //     //         console.log(foo);
// // //     //     })(25)
// // //     // })(40)

var foo = 101
function func1() {
    return function() {
        console.log(foo);
    }
    var foo = 202
}
var func2 = func1
func2()