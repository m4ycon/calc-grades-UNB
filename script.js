
function null_weight_accumulator(notas) {
  return notas
    .map(([n, w]) => n == null ? w : 0)
    .reduce((a, b) => a + b)
}

function calc_nota_final(notas) {
  return notas
    .map(([n, w]) => n * w)
    .reduce((a, b) => a + b)
}

function mencoes(disciplina, notas) {
  const nota_final = calc_nota_final(notas)
  let peso_restante = null_weight_accumulator(notas)
  peso_restante = peso_restante == 0 ? 1 : peso_restante

  let mm = (5 - nota_final)/peso_restante
  let ms = (7 - nota_final)/peso_restante
  let ss = (9 - nota_final)/peso_restante

  mm = mm > 0 ? `${mm.toFixed(2)}` : 'Obtido'
  ms = ms > 0 ? `${ms.toFixed(2)}` : 'Obtido'
  ss = ss > 0 ? `${ss.toFixed(2)}` : 'Obtido'

  console.log('='*40)
  console.log(disciplina)
  console.log(`Nota atual: ${nota_final.toFixed(2)}`)
  console.log(`Precisa de x pontos para tirar...`)
  console.log(`MM: x >= ${mm}`)
  console.log(`MS: x >= ${ms}`)
  console.log(`SS: x >= ${ss}`)
  console.log('='*40)
}

function CN(p1, p2, p3, atv) {
  notas = [[p1, .3], [p2, .3], [p3, .3], [atv, .1]]
  mencoes('Cálculo numérico', notas)
}

function PE(p1, p2, p3) {
  notas = [[p1, .3], [p2, .3], [p3, .4]]
  mencoes('Probabilidade e Estatística', notas)
}

function ALG1(p1, p2, nq, nt) {
  notas = [[nq, .3*.4], [nt, .7*.4], [p1, .4*.6], [p2, .6*.6]]
  mencoes('Álgebra 1', notas)
}

function TP1(p1, p2, trab, atv) {
  notas = [[p1, .1], [p2, .1], [trab, .5], [atv, .3]]
  mencoes('Técnicas de Programação 1', notas)
}

function constructDisciplina(title, data) {
  const disciplina = document.createElement('div')
  disciplina.classList.add('disciplina')

  const titleElement = document.createElement('h2')
  titleElement.innerText = title
  disciplina.appendChild(titleElement)

  const table = document.createElement('table')
  table.classList.add('table')
  disciplina.appendChild(table)
  const trs = Object.keys(data).map(key => {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${key}</td><td>${data[key]}</td>`
    return tr
  })

  trs.forEach(tr => table.appendChild(tr))

  document.body.appendChild(disciplina)
}

function render() {
  const cnData = {
    'Prova 1': 5.6,
    'Prova 2': 7.2,
    'Prova 3': null,
    'Atividades': 0,
  }
  CN(cnData['Prova 1'], cnData['Prova 2'], cnData['Prova 3'], cnData['Atividades'])
  
  const peData = {
    prova1: 7,
    prova2: 10,
    prova3: 10,
  }
  PE(peData.prova1, peData.prova2, peData.prova3)
  
  const a1Data = {
    prova1: 5.8,
    prova2: null,
    nq: 9.2,
    nt: 6.831,
  }
  ALG1(a1Data.prova1, a1Data.prova2, a1Data.nq, a1Data.nt)
  // 9.9*.3*.4 + 6.831*.7*.4 + 5.8*.4*.6 + x*.6*.6
  
  const tp1Data = {
    prova1: 10,
    prova2: null,
    trab: 9.5,
    atv: 10,
  }
  TP1(tp1Data.prova1, tp1Data.prova2, tp1Data.trab, tp1Data.atv)

  constructDisciplina('Cálculo numérico', cnData)
  constructDisciplina('Probabilidade e Estatística', peData)
  constructDisciplina('Álgebra 1', a1Data)
  constructDisciplina('Técnicas de Programação 1', tp1Data)
}

render()

