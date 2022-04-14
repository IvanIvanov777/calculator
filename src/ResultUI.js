export class ResultUI {
  constructor() {

  }

  static getPurposeHTML(objRes){
    return`
    <h3>Предназначение</h3>
    <div class="result__line">
      <div class="result__title">Личное:</div>
      <div class="result__value">${objRes.personal}</div>
    </div>
    <div class="result__line">
      <div class="result__title">Социальное:</div>
      <div class="result__value">${objRes.social}</div>
    </div>
    <div class="result__line">
      <div class="result__title">Духовное:</div>
      <div class="result__value">${objRes.spiritual}</div>
    </div>
    <br>
    <div class="result__line">
      <div class="result__title">Мужской род:</div>
      <div class="result__value">${objRes.masculine.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">Женский род:</div>
      <div class="result__value">${objRes.feminine.join(' ')}</div>
    </div>
    <br>
    <div class="result__line">
      <div class="result__title">1 чакра:</div>
      <div class="result__value">${objRes.chakra1.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">2 чакра:</div>
      <div class="result__value">${objRes.chakra2.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">3 чакра:</div>
      <div class="result__value">${objRes.chakra3.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">4 чакра:</div>
      <div class="result__value">
        <span>1 линия: &nbsp</span><div class="result-data result__value-part1">${objRes.chakra4_1.join(' ')}</div>
        <br>
        <span>2 линия: &nbsp</span><div class="result-data result__value-part2">${objRes.chakra4_2.join(' ')}</div>
      </div>
    </div>
    <div class="result__line">
      <div class="result__title">5 чакра:</div>
      <div class="result__value">${objRes.chakra5.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">6 чакра:</div>
      <div class="result__value">${objRes.chakra6.join(' ')}</div>
    </div>
    <div class="result__line">
      <div class="result__title">7 чакра:</div>
      <div class="result__value">
        <span>1 линия: &nbsp</span><div class="result-data result__value-part1">${objRes.chakra7_1.join(' ')}</div>
        <br>
        <span>2 линия: &nbsp</span><div class="result-data result__value-part2">${objRes.chakra7_2.join(' ')}</div>
      </div>
    </div>
    `
  }


  static getFigureHTML(objRes){
    return `
    <div class="line line-0"></div>
    <div class="line line-45"></div>
    <div class="line line-90"></div>
    <div class="line line-135"></div>

    <div class="cell cell-1">${objRes.arrDigits[1]}</div>
    <div class="cell cell-2">${objRes.arrDigits[2]}</div>
    <div class="cell cell-3">${objRes.arrDigits[3]}</div>
    <div class="cell cell-4">${objRes.arrDigits[4]}</div>
    <div class="cell cell-5">${objRes.arrDigits[5]}</div>
    <div class="cell cell-6">${objRes.arrDigits[6]}</div>
    <div class="cell cell-7">${objRes.arrDigits[7]}</div>
    <div class="cell cell-8">${objRes.arrDigits[8]}</div>
    <div class="cell cell-9-10">${objRes.arrDigits[9]}/${objRes.arrDigits[10]}</div>
    <div class="cell cell-11">${objRes.arrDigits[11]}</div>
    <div class="cell cell-12">${objRes.arrDigits[12]}</div>
    <div class="cell cell-13">${objRes.arrDigits[13]}</div>
    <div class="cell cell-14">${objRes.arrDigits[14]}</div>
    <div class="cell cell-15">${objRes.arrDigits[15]}</div>
    <div class="cell cell-16">${objRes.arrDigits[16]}</div>
    <div class="cell cell-17">${objRes.arrDigits[17]}</div>
    <div class="cell cell-18">${objRes.arrDigits[18]}</div>
    <div class="cell cell-19">${objRes.arrDigits[19]}</div>
    <div class="cell cell-20">${objRes.arrDigits[20]}</div>
    <div class="cell cell-21">${objRes.arrDigits[21]}</div>
    <div class="cell cell-22">${objRes.arrDigits[22]}</div>
    <div class="cell cell-23">${objRes.arrDigits[23]}</div>
    <div class="cell cell-24">${objRes.arrDigits[24]}</div>
    <div class="cell cell-25">${objRes.arrDigits[25]}</div>
    <div class="cell cell-26">${objRes.arrDigits[26]}</div>

    <div class="label-img label-0">Финансовый<br>канал</div>
    <div class="label-img label-45">30 лет</div>
    <div class="label-img label-90">Таланты</div>
    <div class="label-img label-135">10 лет</div>
    <div class="label-img label-180">Дестко-родительские<br>отношения</div>
    <div class="label-img label-225">70 лет</div>
    <div class="label-img label-270">Личный канал<br>карма</div>
    <div class="label-img label-325">50 лет</div>
    `
  }

}