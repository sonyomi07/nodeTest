/*
function hello() {
    console.log('hello');
}

hello();
*/

/*
var hello2 = function() {
    console.log('hello2')
}

hello2();
*/

var hello = () => {
    console.log('Hello');
}

hello();

function testHello(myfn){
    myfn();
}

testHello(hello);

/*------------------------------------------*/

function add(a, b) {
    console.log(`add 결과 : ${a + b}`);
    return a + b;
}

