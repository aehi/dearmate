"use strict";

/* 카드 랜덤 플립 */

const cardNum = () => {
  let cards = []; // card들
  let i = 0;

  // 랜덤함수 중복없이 가져오기
  while (i < 3) {
    let n = Math.floor(Math.random() * 14) + 1;
    if (!sameNum(n)) {
      cards.push(n);
      i++;
    }
    function sameNum(n) {
      return cards.find((e) => e === n);
    }
  }

  // 중복없이 가져온 카드들을 id(number) ex) id="2"
  cards.map((item) => {
    const card = document.getElementById(item);
    card.classList.add("flip"); // class flip 추가

    setTimeout(() => {
      card.classList.remove("flip"); // 3초뒤 추가한 클래스 제거
    }, 3000);
  });
};

// 3100ms 마다 cardNum실행
setInterval(() => {
  cardNum();
}, 3100);
