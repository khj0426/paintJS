const canvas = document.getElementById('jsCanvas'); /*getElementByid() -> id가 주어진 문자열과 일치하는 요소를 찾고, 이를 나타내는 객체 리턴

*/

var ctx = canvas.getContext('2d');  /*https://yougome.tistory.com/206*/
/*canvas ->context*/

const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 600;
ctx.strokeStyle = 'black';

ctx.lineWidth = 2.5;

function onMousemove(event){
   
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    

}

let painting = false;

function startPainting(){
painting = true;
}



function onMousedown(event){
    painting = true;
}

function onMouseup(event){
    painting = false;
}

function onMouseleave(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove",onMousemove);
     /*addEventListener -> 이벤트 리스너는 DOM 객체에서 이벤트가 발생할 경우 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트이다.
이벤트 리스너를 이용하면 특정 DOM에 위에 말한 Javascirpt 이벤트가 발생할 때 특정 함수를 호출한다.
출처: https://ordinary-code.tistory.com/64 [김평범's OrdinaryCode]

캔버스 밖에선 안됨. 캔버스 안에서만 적용
*/

canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",onMouseup);
canvas.addEventListener("mouseleave",onMouseleave);
}

Array.from(colors).forEach(colors)


