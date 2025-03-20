const myImage = document.querySelector('img');
/*这个是一个匿名函数的用法() => {}
    () 表示该函数没有参数。如果有参数可以写成 (param1, param2) => { ... }。
=> 是箭头符号，表示函数体的开始。
{} 是函数体，包含要执行的代码
 反正就是表示当myImage这个元素被点击时，执行这个函数体里的代码
 相当于什么：myImage.onclick = function() {
    // ...
};
    */
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
/*这个函数用来设置欢迎信息
*/
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storeName;
}

myButton.onclick = function () {
    setUserName();
};