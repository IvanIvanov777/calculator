export class Calculator {
  constructor(clientData) {
    clientData && this.setInputData(clientData)
  }

  setInputData({
    surname,
    name,
    patronymic,
    surname_father,
    surname_mother,
    birthday,
    sex
  }) {
    this.surname = surname.toUpperCase().trim()
    this.name = name.toUpperCase().trim()
    this.patronymic = patronymic.toUpperCase().trim()
    this.surname_father = surname_father.toUpperCase().trim()
    this.surname_mother = surname_mother.toUpperCase().trim()
    this.birthday = birthday.trim().split('.')
    this.sex = sex
    // console.log('Calc input data...', this);
    this.digits = []
    this.resultObj = {}
  }

  сalculateData() {
    const _digits = []
    const obj = {}

    // _digits[1] = this.#getSumNums(this.birthday.getDate())
    // _digits[2] = this.#getSumNums(this.birthday.getMonth() + 1)

    _digits[1] = this.#getSumNums(+this.birthday[0])
    _digits[2] = this.#getSumNums(+this.birthday[1])

    

    _digits[3] = this.#getSumNums(...this.#mapNumToArr(this.birthday[2]))
    // _digits[3] = this.#getSumNums(+this.birthday[2])
    _digits[4] = this.#getSumNums(_digits[1], _digits[2], _digits[3])
    _digits[5] = this.#getCodeFromWord(this.surname)
    _digits[6] = this.sex === 'w'
      ? this.#getCodeFromWord(this.surname_father)
      : this.#getCodeFromWord(this.patronymic)
    _digits[7] = this.#getCodeFromWord(this.name)
    _digits[8] = this.#getCodeFromWord(this.surname_mother)
    _digits[9] = this.#getSumNums(_digits[1], _digits[2], _digits[3], _digits[4])
    _digits[10] = this.#getSumNums(_digits[5], _digits[6], _digits[7], _digits[8])
    _digits[11] = this.#getSumNums(_digits[5], _digits[9])
    _digits[12] = this.#getSumNums(_digits[5], _digits[11])
    _digits[13] = this.#getSumNums(_digits[9], _digits[6])
    _digits[14] = this.#getSumNums(_digits[13], _digits[6])
    _digits[15] = this.#getSumNums(_digits[9], _digits[7])
    _digits[16] = this.#getSumNums(_digits[15], _digits[7])
    _digits[17] = this.#getSumNums(_digits[9], _digits[8])
    _digits[18] = this.#getSumNums(_digits[17], _digits[8])
    _digits[19] = this.#getSumNums(_digits[9], _digits[1])
    _digits[20] = this.#getSumNums(_digits[19], _digits[1])
    _digits[21] = this.#getSumNums(_digits[9], _digits[3])
    _digits[22] = this.#getSumNums(_digits[21], _digits[3])
    _digits[23] = this.#getSumNums(_digits[9], _digits[2])
    _digits[24] = this.#getSumNums(_digits[23], _digits[2])
    _digits[25] = this.#getSumNums(_digits[9], _digits[4])
    _digits[26] = this.#getSumNums(_digits[25], _digits[4])

    obj.personal = this.#getSumNums(this.#getSumNums(_digits[2], _digits[4]), this.#getSumNums(_digits[1], _digits[3]))
    obj.social = this.#getSumNums(this.#getSumNums(_digits[5], _digits[6]), this.#getSumNums(_digits[7], _digits[8])) // bug?
    obj.spiritual = this.#getSumNums(obj.personal, obj.social) //bug?
    obj.masculine = [_digits[5], _digits[6], this.#getSumNums(_digits[5], _digits[6])] //bug?
    obj.feminine = [_digits[7], _digits[8], this.#getSumNums(_digits[7], _digits[8])]
    obj.chakra1 = [_digits[4], _digits[3], this.#getSumNums(_digits[4], _digits[3])]
    obj.chakra2 = [_digits[26], _digits[22], this.#getSumNums(_digits[26], _digits[22])]
    obj.chakra3 = [_digits[25], _digits[21], this.#getSumNums(_digits[25], _digits[21])]
    obj.chakra4_1 = [_digits[9], _digits[10], this.#getSumNums(_digits[9], _digits[10])] //bug?
    obj.chakra4_2 = [_digits[5], _digits[6], this.#getSumNums(_digits[5], _digits[6])] //bug?
    obj.chakra5 = [_digits[7], _digits[8], this.#getSumNums(_digits[7], _digits[8])]
    obj.chakra6 = [_digits[23], _digits[19], this.#getSumNums(_digits[23], _digits[19])]
    obj.chakra7_1 = [_digits[24], _digits[20], this.#getSumNums(_digits[24], _digits[20])]
    obj.chakra7_2 = [_digits[2], _digits[1], this.#getSumNums(_digits[2], _digits[1])]
    obj.arrDigits = _digits

    // console.log('Calc ouput data...', obj);
    return obj
  }


  #getSumNums(...nums) {
    const value = [...nums].reduce((acc, item) => +acc + +item)
    return (value > 22) ? this.#sumDigitsForNumber(value) : value
  }

  #sumDigitsForNumber(num) {
    return [...String(num)].reduce((acc, item) => +item + +acc)
  }

  #getCodeFromLetter(letter) {
    switch (letter) {
      case 'А':
      case 'И':
      case 'С':
      case 'Ъ':
        return 1
      case 'Б':
      case 'Й':
      case 'Т':
      case 'Ы':
        return 2
      case 'В':
      case 'К':
      case 'У':
      case 'Ь':
        return 3
      case 'Г':
      case 'Л':
      case 'Ф':
      case 'Э':
        return 4
      case 'Д':
      case 'М':
      case 'Х':
      case 'Ю':
        return 5
      case 'Е':
      case 'Н':
      case 'Ц':
      case 'Я':
        return 6
      case 'Ё':
      case 'О':
      case 'Ч':
        return 7
      case 'Ж':
      case 'П':
      case 'Ш':
        return 8
      case 'З':
      case 'Р':
      case 'Щ':
        return 9
      default:
        // console.log('ERROR ')
        return 0
    }
  }

  #getCodeFromWord(str) {
    let code = str.split('').reduce(((acc, item) => +this.#getCodeFromLetter(item) + +acc), 0)
    // for (const c of str) {
    //   code += this.#getCodeFromLetter(c)
    // }
    if (code > 22) {
      return this.#sumDigitsForNumber(code)
    }
    return code
  }

  #mapNumToArr(num) {
    return String(num)
      .split('')
      .map(item => +item)
  }
}
