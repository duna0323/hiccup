'use strict';
const userTallInput2 = document.getElementById('cm2');
const userMoveInput = document.getElementById('Move')
const KcalButton = document.getElementById('Kcal');
const KcalDivided = document.getElementById('Kcal-area')
const header = document.createElement('h3');
const paragraph = document.createElement('p');
const paragraph2 = document.createElement('div');
const userTall2 = userTallInput2.value;
const userMove = userMoveInput.value;


/**
 * 指定したHTML要素の子要素を全て削除する
 * @param {HTMLElement} element HTML の要素
 */
function removeAllChildren(element) {
  while (element.firstChild) { //子要素がある限り削除
      element.removeChild(element.firstChild);
  }
}

KcalButton.onclick = () => {
  if (userTall2.length === 0 ) { //身長または活動量が空の時は
    
    header.innerText = '計算方法';
    KcalDivided.appendChild(header);
    
    paragraph.innerText = '標準体重（ 身長(m) × 身長(m) × 22 ）× 活動量'
    KcalDivided.appendChild(paragraph);
    
  } else if (userTall2.indexOf('１') !== -1)　{ //半角英数でない入力の時は
    
    header.innerText = '全角で入力されました';
    KcalDivided.appendChild(header);

    paragraph.innerText = '身長を、半角で入力して下さい。';
    KcalDivided.appendChild(paragraph);
    
  } else {
    removeAllChildren(KcalDivided); //消す

    header.innerText = '１日の摂取カロリー';
    KcalDivided.appendChild(header);

    const dayKcal = kcalBMI(userTall2); //１日の摂取カロリー
    paragraph.innerText = dayKcal;
    KcalDivided.appendChild(paragraph);
  }
};

/**
 * 身長と活動量の値を渡すと計算結果を返す関数
 * @param {Int} userTall2 ユーザーの身長
 * @param {Int} userMove ユーザーの活動量
 * @return {Int} 計算結果
 */

function kcalBMI(userTall2) {
  const userTall2 = userTallInput2.value;
  const userMove = userMoveInput.value;
  const userBmi2 = userTall2 / 100 * userTall2 / 100;
  const bmi22kcal = userBmi2 * 22 * userMove;
  const kcalBMI22 = Math.round(bmi22kcal);

  let dayKcal = 'あなたの１日摂取カロリーの適量は、{kcalBMI22}kcalです。';

  dayKcal = dayKcal.replace(/\{kcalBMI22\}/g, kcalBMI22);

  console.log(kcalBMI22);
  console.log(userMove);
  return dayKcal;
}

userTallInput2.onkeydown = (event) => {
  if (event.key === 'Enter') {
    KcalButton.onclick();
  // TODO ボタンのonclick() 処理を呼び出す
  }
};
