//隨機挑選陣列內之項目
function selectRandomly(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function talkGenerator(character) {
  const target = {
    engineer: '工程師', designer: '設計師', entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!character) {
    return 'Please select one!'
  }
  let talk = '身為一個'
  //decide the target //必須要用括號標示才能以變數代替key值
  // const character = 'engineer'
  talk += target[character]

  //add one task chosen randomly
  talk += selectRandomly(task[character])
  //add one phrase chosen randomly
  talk += selectRandomly(phrase)
  talk += '吧'
  return talk
}
// talkGenerator()
module.exports = talkGenerator