'use strict';

const userTallInput = document.getElementById('cm');
const userWeightInput = document.getElementById('kg');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const header = document.createElement('h3');
const paragraph = document.createElement('p');
const paragraph2 = document.createElement('div');
const userTall = userTallInput.value;
const userWeight = userWeightInput.value;

/**
 * 指定したHTML要素の子要素を全て削除する
 * @param {HTMLElement} element HTML の要素
 */
function removeAllChildren(element) {
  while (element.firstChild) { //子要素がある限り削除
      element.removeChild(element.firstChild);
  }
}

assessmentButton.onclick = () => {
  const userTall = userTallInput.value;
  const userWeight = userWeightInput.value;
  if (userTall.length === 0 || userWeight.length === 0) { //身長または体重が空の時は
    
      header.innerText = '計算方法';
      resultDivided.appendChild(header);
      
      paragraph.innerText = 'BMI = 体重(kg) ÷ 身長(m) ÷ 身長(m)';
      resultDivided.appendChild(paragraph);

      paragraph2.innerText = '標準体重 = 身長(m) × 身長(m) × 22';
      resultDivided.appendChild(paragraph2);
      
  } else if ( userTall.indexOf('１') !== -1)　{ //半角英数でない入力の時は
      
      header.innerText = '全角で入力されました';
      resultDivided.appendChild(header);

      paragraph.innerText = '身長と体重を、半角で入力して下さい。';
      resultDivided.appendChild(paragraph);
      
  } else {
      removeAllChildren(resultDivided); //消す

      header.innerText = '診断結果';
      resultDivided.appendChild(header);

      const result = assessment(userTall); //標準体重
      paragraph.innerText = result;
      resultDivided.appendChild(paragraph);

      const anser = checkBMI(userWeight);//BMI
      paragraph2.innerText = anser;
      resultDivided.appendChild(paragraph2);
  }
};

/**
 * 身長と体重の値を渡すと診断結果を返す関数
 * @param {Int} userTall ユーザーの身長
 * @param {Int} userWeight ユーザーの体重
 * @return {Int} 診断結果
 */


function assessment(userTall) {
  const userBmi = userTall / 100 * userTall / 100;
  const bmi22Weight = userBmi * 22 * 10;
  const Weight = Math.round(bmi22Weight);
  const BMI22Weight = Weight / 10;

  let result = 'あなたの標準体重は、{BMI22Weight}kgです。';

  result = result.replace(/\{BMI22Weight\}/g, BMI22Weight);
  return result;
}

function checkBMI(userWeight) {
  const userTall = userTallInput.value;
  const userBmi = userTall / 100 * userTall / 100;
  const user10BMi = userWeight / userBmi * 10;
  const BMI10 = Math.round(user10BMi);
  const userBMI = BMI10 / 10;

  let anser = 'あなたのBMIは、{userBMI}です。';

  anser = anser.replace(/\{userBMI\}/g, userBMI);
  console.log(anser);
  return anser;
};


userTallInput.onkeydown = (event) => {
  if (event.key === 'Enter') {
      assessmentButton.onclick();
  // TODO ボタンのonclick() 処理を呼び出す
  }
};

userWeightInput.onkeydown = (event) => {
  if (event.key === 'Enter') {
      assessmentButton.onclick();
  // TODO ボタンのonclick() 処理を呼び出す
  }
};
