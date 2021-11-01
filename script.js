
function null_weight_accumulator(data) {
  return Object.values(data)
    .map(({ nota, peso }) => nota == null ? peso : 0)
    .reduce((a, b) => a + b)
}

function calc_nota_final(data) {
  return Object.values(data)
    .map(({ nota, peso }) => nota * peso)
    .reduce((a, b) => a + b)
}

function mencoes(disciplina, data) {
  const notaFinal = calc_nota_final(data)
  let pesoRestante = null_weight_accumulator(data)
  pesoRestante = pesoRestante == 0 ? 1 : pesoRestante

  let mm = (5 - notaFinal)/pesoRestante
  let ms = (7 - notaFinal)/pesoRestante
  let ss = (9 - notaFinal)/pesoRestante

  mm = mm > 0 ? `${mm.toFixed(2)}` : 'Obtido'
  ms = ms > 0 ? `${ms.toFixed(2)}` : 'Obtido'
  ss = ss > 0 ? `${ss.toFixed(2)}` : 'Obtido'

  console.log('=================================')
  console.log(disciplina)
  console.log(`Nota atual: ${notaFinal.toFixed(2)}`)
  console.log(`Precisa de x pontos para tirar...`)
  console.log(`MM: x >= ${mm}`)
  console.log(`MS: x >= ${ms}`)
  console.log(`SS: x >= ${ss}`)
  console.log('=================================')
}

function constructDisciplina(title, data) {
  mencoes(title, data)

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
    tr.innerHTML = `<td>${key}</td>
      <td>${data[key].nota !== null ? data[key].nota.toFixed(2) : '?'}</td>`
    return tr
  })
  trs.forEach(tr => table.appendChild(tr))

  document.body.appendChild(disciplina)
}

function render() {
  const cnData = {
    'Prova 1': { nota: 5.6, peso: .3 },
    'Prova 2': { nota: 7.2, peso: .3 },
    'Prova 3': { nota: null, peso: .3 },
    'Atividades': { nota: 0, peso: .1 },
  }
  
  const peData = {
    'Prova 1': { nota: 7, peso: .3 },
    'Prova 2': { nota: 10, peso: .3 },
    'Prova 3': { nota: 10, peso: .4 },
  }
  
  const a1Data = {
    'Prova 1': { nota: 5.8, peso: .3*.4 },
    'Prova 2': { nota: null, peso: .7*.4 },
    'Questionários': { nota: 9.2, peso: .4*.6 },
    'Tarefas': { nota: 6.831, peso: .6*.6 },
  }
  // 9.9*.3*.4 + 6.831*.7*.4 + 5.8*.4*.6 + x*.6*.6
  
  const tp1Data = {
    'Prova 1': { nota: 10, peso: .1 },
    'Prova 2': { nota: null, peso: .1 },
    'Trabalho': { nota: 9.5, peso: .5 },
    'Atividades': { nota: 10, peso: .3 },
  }

  constructDisciplina('Cálculo numérico', cnData)
  constructDisciplina('Probabilidade e Estatística', peData)
  constructDisciplina('Álgebra 1', a1Data)
  constructDisciplina('Técnicas de Programação 1', tp1Data)
}

render()

