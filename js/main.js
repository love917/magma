//text ani
let pTag1 = document.querySelector(".mg-featured-reel-wrap .items");
let count = 0;

//pTag1를 복사하여 붙임
let newItems = pTag1.cloneNode(true);//clone :복사

//복사한 내용을 태그에 삽입
let nextElement = document.querySelector(".mg-featured-reel-wrap");
nextElement.appendChild(newItems)
//pTag1.offsetWidth --> p 태그 1의 넓이 *2(두배)
nextElement.style.width = pTag1.offsetWidth *2 +"px";

function marqueeText(count,element,direction){
    //밑에animate 함수에서 무한으로 커지는것을 한계를 만들어서 유지하도록함
    //scrollWidth ==> 숨어있는 공간이 있더라도 원래의 넓이를 찾아서 가져옴
    if(count>element.scrollWidth/2){
        count = 0;
        element.style.transform = `translate3d(0,0,0)`
    }
    element.style.transform = `translate3d(${count * direction}px,0,0)`;
    return count;
}
function animate(){//호출될떄 마다마다 할 일
    count++;
    count = marqueeText(count,nextElement,1)
    requestAnimationFrame(animate)//setInterval의 업글된 버전
}

animate()