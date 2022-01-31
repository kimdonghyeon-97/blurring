const loadText = document.querySelector('.loading-text')
// loading-text class를 지정하는 함수

const bg = document.querySelector('.bg')
// bg class를 지정하는 함수 

let load = 0

let int = setInterval(blurring, 30)
//  blurring 함수를 30ms 간격으로 실행

function blurring() {
    load++
    
    if(load > 99) {
       clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    // scale의 4번째 인자의 값이 커질수록 더 블러처리됨
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / 
    (in_max - in_min) + out_min;
}