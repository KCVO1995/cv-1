let html = document.getElementById('html')
let style = document.querySelector('#style')
let n = 0
let s2 = ''
let s = 
`/*你好，我叫小辉
* 接下来我演示一下我的前端功底
* 首先我要准备一个div*/
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
*/ 
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 加两个乾坤球 */
#div1::before{
    width: 200px;
    height: 200px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    border-radius: 50%; 
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}`

let step = () => {
    setTimeout(() => {
        //如果是回车，换成<br>
        //如果是空格，换成&nbsp;
        s[n] === '\n' ? s2 += '<br>' :
        s[n] === ' ' ? s2 += '&nbsp;' :
        s2 += s[n]
        html.innerHTML = s2
        style.innerHTML = s.substring(0, n+1)
        window.scrollTo(0, 8000)
        html.scrollTo(0, 8000)
        if (n+1 < s.length){
            n = n + 1
            step()
        }
    }, 50);
}

step()

//demo.innerHTML = s.substring(0, n)