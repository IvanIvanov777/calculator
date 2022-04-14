import "./scss/index.scss"
import { Calculator } from './Calc'
import { ResultUI } from './ResultUI'
import IMask from 'imask';

const calculator = new Calculator()

// DOM elems
const $input_form = document.getElementById('input-form')
const $input_surname = $input_form.querySelector('[data-input="surname"]')
const $input_name = $input_form.querySelector('[data-input="name"]')
const $input_patronymic = $input_form.querySelector('[data-input="patronymic"]')
const $input_surname_father = $input_form.querySelector('[data-input="surname-father"]')
const $input_surname_mother = $input_form.querySelector('[data-input="surname-mother"]')
const $input_birthday = $input_form.querySelector('[data-input="birthday"]')
const $sex = $input_form.querySelector('#w')

const maskOptions = {
  mask: Date,
  min: new Date(1000, 0, 1),
  max: new Date(2025, 0, 1),
  lazy: false
};
let mask = null

// $input_birthday.focus()

const $inputs_text = document.querySelectorAll('.input-text:not(:last-child) input') //Input fields without birthday
const $calc_result = document.querySelector('.calc__result')
const $result_img = $calc_result.querySelector('.result__img')
const $submit_btn = $input_form.querySelector('#submit')

// handlers


const submitHandler = (e) => {
  // alert(window.innerWidth)

  e.preventDefault()

  if (checkAndHighlightInputs()) {
    const res = {}
    res.surname = $input_surname.value
    res.name = $input_name.value
    res.patronymic = $input_patronymic.value
    res.surname_mother = $input_surname_mother.value
    res.surname_father = $input_surname_father.value
    res.birthday = $input_birthday.value
    // res.sex = $input_form.querySelector('input[name="sex"]:checked').id
    res.sex = $sex.checked ? 'w' : 'm'
    calculator.setInputData(res)
    renderResult(calculator.сalculateData())
  }
}

const inputDateHandler = (e) => {
  
  $input_birthday.value.trim().match(/^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g)
    ? $input_birthday.classList.remove('invalid')
    : $input_birthday.classList.add('invalid')
}

const inputTextHandler = (e) => {
  const $this = e.target
  $this.value.trim().match(/^[а-яА-ЯёЁ]+$/) ? $this.classList.remove('invalid') : $this.classList.add('invalid')
}

const focusHandler = e => {
  if (!mask){
    mask = IMask($input_birthday, maskOptions);
  }
}

// const blurHandler = e => {
//   if (e.target.value === `__.__.____`) {
//     e.target.value = ''
//   }
// }


//events

$submit_btn.addEventListener('click', submitHandler)

// check emptyInput
$input_birthday.addEventListener('focus', focusHandler)
// $input_birthday.addEventListener('blur', blurHandler)
$inputs_text.forEach(item => item.addEventListener('change', inputTextHandler))
$input_birthday.addEventListener('change', inputDateHandler)

// functions

const renderResult = objRes => {
  $calc_result.classList.remove('hide')
  document.querySelector('.result__purpose').innerHTML = ResultUI.getPurposeHTML(objRes)
  $result_img.innerHTML = ResultUI.getFigureHTML(objRes)

  // objRes.arrDigits.forEach((item, i) => {
  //   if (i == 0 || i == 9 || i == 10) return
  //   $result_img.querySelector(`.cell-${i}`).innerHTML = item
  // })
  // $result_img.querySelector('.cell-9-10').innerHTML = `${objRes.arrDigits[9]}/${objRes.arrDigits[10]}`
}

const checkAndHighlightInputs = () => {
  let result = checkAndHighlightDate()
  $inputs_text.forEach($item => {
    if ($item.value.trim().match(/^[а-яА-ЯёЁ]+$/)) {
      $item.classList.remove('invalid')
    }
    else {
      $item.classList.add('invalid')
      result = false
    }
  })
  return result
}

const checkAndHighlightDate = () => {
  if ($input_birthday.value.trim().match(/^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g)) {
    $input_birthday.classList.remove('invalid')
    return true
  }
  else {
    $input_birthday.classList.add('invalid')
    return false
  }
}