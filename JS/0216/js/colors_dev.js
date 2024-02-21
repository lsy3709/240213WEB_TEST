// 함수 정의시 사용하는 파라미터의 이름의 값은 아무거나 사용하면되지만, 
// 의미상으로 사용을 권장함.
// 순서 
// 1번, 함수를 호출한다. onclick="changeColorTest(this)"
// 2번, 함수를 정의한 곳으로 이동한다. 
// 3번, 함수를 정의한 곳에서 this 어디로 가냐면? self 간다. 
// 예) x = 1
// 예) 매개변수 , self = this , self 라는 변수에, this 를 할당했다. 대입했다. 

// 함수를 정의시 사용하는 function 이라는 키워드는 예약어라서, 
// 변수로 사용이 안됩니다. 나중에, 변수를 사용 하는 중에, 
// 모르고, 각 언어마다 키워드(예약어가 다 존재함. )
// 백엔드에서 잘 모르고 예약어 변수로 사용해서, 잘 실행이 안되는 경우가 종종 발생함. 

function nightDayHandler(self) {
    //함수(=메서드) 이름 작명시 changeColorTest , 단어와 단어 사이에 
    //2번째 단어의 첫글자가 대문자로 시작하고, 캐멀케이스(camelcase)
    // var target = document.querySelector('body');
    if (self.value === 'night') {
        // 이부분을 함수로 변경해서, 재사용 해보기, Body 태그의 
        // 글자색, 배경색을 변경하는 코드인데. 
        // 기존에는 부분 중복되는 부분을 target으로 변수에 할당해서, 리팩토링했고, 
        // 지금을 함수를 이용할 예정. 
        // target.style.backgroundColor = 'black';
        // BodySetBackgroudSetColor('black')
        Body.setBackgroundColor('black')
        // target.style.color = 'white';
        // BodySetColor('white')
        Body.setColor('white')
        self.value = 'day'

        // 추가한 코드인데. 
        // a 태그를 다중 선택자이용해서, alist 변수에 담아서
        // 각 a 태그 속성(색상변경)에 접근해서, 변경작업(반복문 이용해서)
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     // 해당 a 태그의 글자 색상을 변경하는 코드. 
        //     alist[i].style.color = 'red';
        //     // 테스트, 개발 환경에서, 콘솔(크롬 웹브라우저에 확인용)
        //     console.log(alist[i]);
        //     i = i + 1;
        // }
        // 함수 버전. 
        // LinksSetColor('red')

        // 객체 버전. 객체에 함수 담기. 
        Links.setColor('chocolate')

    } else {
        // target.style.backgroundColor = 'black';
        // BodySetBackgroudSetColor('black')
        Body.setBackgroundColor('white')
        // target.style.color = 'white';
        // BodySetColor('white')
        Body.setColor('black')
        self.value = 'night'

        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = 'blue';
        //     console.log(alist[i]);
        //     i = i + 1;
        // }
        // LinksSetColor('blue')
        // 객체 버전. 객체에 함수 담기. 
        Links.setColor('aquamarine')
    }
}
// a 태그 요소를 모두 선택하고, 색상도 변경하는 기능
// 함수로 분리 하기. 
// 전 : setColor
// 이름 변경 : LinksSetColor
function LinksSetColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        console.log(alist[i]);
        i = i + 1;
    }
}
// Body 태그 하위에 글자색을 변경하는 함수
// 주의사항,  함수를 사용시 인자값으로 문자열 타입으로 사용하기. 
function BodySetColor(color) {
    document.querySelector('body').style.color = color;
}
// Body 태그 하위에 배경색을 변경하는 함수
function BodySetBackgroudSetColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

// Body 라는 이름으로 객체 형태이고,
// 객체 안에 , 속성으로 익명 함수를 이용하고 있다. 
// var Body = {
//     // 키 : setColor
//     // 값 : function ~ 문장. 
//     setColor: function (color) {
//         document.querySelector('body').style.color = color;
//     }
//     ,
//     setBackgroundColor: function (color) {
//         document.querySelector('body').style.backgroundColor = color;
//     }
// }

// jquery 버전으로, 해당 css 속성 변경하는 샘플 
var Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    }
}

// 기존에 a 태그 4개 선택해서, 색 변경하는 기능을 -> 객체 함수로 담기.
var Links = {
    // 키 : setColor
    // 값 : function ~ 문장. 
    setColor: function (color) { // function 다음에 이름이 없는 익명함수. 
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}