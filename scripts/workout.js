'use strict';

const userWeightInput2 = document.getElementById('kg2');
const userMETsInput = document.getElementById("Run");
const METsButton = document.getElementById('METs');
const METsDivided = document.getElementById('METs-area')
const header = document.createElement('h3');
const paragraph = document.createElement('p');
const paragraph2 = document.createElement('div');
const userWeight2 = userWeightInput2.value;
const userMETs = userMETsInput.value;

/**
 * 指定したHTML要素の子要素を全て削除する
 * @param {HTMLElement} element HTML の要素
 */
function removeAllChildren(element) {
  while (element.firstChild) { //子要素がある限り削除
      element.removeChild(element.firstChild);
  }
}

METsButton.onclick = () => {
  const userWeight2 = userWeightInput2.value;
  if (userWeight2.length === 0) { //体重が空の時は
    
      header.innerText = '運動30分あたりの消費カロリー 計算方法';
      METsDivided.appendChild(header);
      
      paragraph.innerText = '体重(kg) × 1.05 × (運動METs - 1METs) ÷ 2';
      METsDivided.appendChild(paragraph);
      
  } else if ( userWeight2.indexOf('１') !== -1)　{ //半角英数でない入力の時は
      
      header.innerText = '全角で入力されました';
      METsDivided.appendChild(header);

      paragraph.innerText = '体重を、半角で入力して下さい。';
      METsDivided.appendChild(paragraph);
      
  } else {
      removeAllChildren(METsDivided); //消す

      header.innerText = '運動30分あたりの消費カロリー';
      METsDivided.appendChild(header);

      const runKcal = kcalMETs(userWeight2); //運動消費カロリー
      paragraph.innerText = runKcal;
      METsDivided.appendChild(paragraph);
  }
};

/**
 * 身長と活動量の値を渡すと計算結果を返す関数
 * @param {Int} userWeight2 ユーザーの体重
 * @param {Int} userMETs ユーザーの運動メッツ数
 * @return {Int} 計算結果
 */

function kcalMETs(userWeight2) {
  const userMETs = userMETsInput.value;
  const user30run = userWeight2 * 1.05 * userMETs / 2;
  const run30Kcal = Math.round(user30run);

  let runKcal = 'あなたの30分の運動消費カロリーは、{run30Kcal}kcalです。';

  runKcal = runKcal.replace(/\{run30Kcal\}/g, run30Kcal);

  console.log(runKcal);
  console.log(userWeight2);
  console.log(userMETs);
  return runKcal;
}

userWeightInput2.onkeydown = (event) => {
  if (event.key === 'Enter') {
    METsButton.onclick();
  // TODO ボタンのonclick() 処理を呼び出す
  }
};