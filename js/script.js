
function mencoes(subject) {
  const finalGrade = subject.getFinalGrade()
  const remainingWeight = subject.getWeightsOnNullGrades()

  let mm = (5 - finalGrade)/remainingWeight
  let ms = (7 - finalGrade)/remainingWeight
  let ss = (9 - finalGrade)/remainingWeight

  return {
    finalGrade,
    mention: ss < 0 ? 'SS' 
      : ms < 0 ? 'MS' 
      : mm < 0 ? 'MM' 
      : `--`,
    nextMention: mm > 0 ? `${mm.toFixed(2)} para MM` 
      : ms > 0 ? `${ms.toFixed(2)} para MS` 
      : ss > 0 ? `${ss.toFixed(2)} para SS` 
      : 'Não há mais menções',
  }
}

function constructDisciplina(subject) {
  const { finalGrade, mention, nextMention } = mencoes(subject)

  const divDisciplina = document.createElement('div')
  divDisciplina.classList.add('subject')

  const titleElement = document.createElement('h2')
  titleElement.innerText = subject.title
  divDisciplina.appendChild(titleElement)

  const container = document.createElement('div')
  container.classList.add('container')

  const table = document.createElement('table')
  table.classList.add('table')
  container.appendChild(table)
  const trs = Object.keys(subject.topics).map(key => {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${key}</td>
      <td>
        ${subject.topics[key].grade !== null 
          ? subject.topics[key].grade.toFixed(2) 
          : '?'}
      </td>`
    return tr
  })
  trs.forEach(tr => table.appendChild(tr))

  const p = document.createElement('p')
  p.innerText = `Nota final: ${finalGrade.toFixed(2)}\n (${mention}, ${nextMention})`
  container.appendChild(p)

  divDisciplina.appendChild(container)
  document.body.querySelector('.subjects').appendChild(divDisciplina)
}

function render() {
  const cn = new Subject('Cálculo Numérico', {
    'Prova 1': { grade: 5.6, weight: .3 },
    'Prova 2': { grade: 7.2, weight: .3 },
    'Prova 3': { grade: null, weight: .3 },
    'Atividades': { grade: 0, weight: .1 },
  })
  const pe = new Subject('Probabilidade e Estatística', {
    'Prova 1': { grade: 7, weight: .3 },
    'Prova 2': { grade: 10, weight: .3 },
    'Prova 3': { grade: 10, weight: .4 },
  })
  const a1 = new Subject('Álgebra 1', {
    'Prova 1': { grade: 5.8, weight: .4*.6 },
    'Prova 2': { grade: null, weight: .6*.6 },
    'Questionários': { grade: 9.2, weight: .3*.4 },
    'Tarefas': { grade: 6.831, weight: .7*.4 },
  })
  const tp1 = new Subject('Técnicas de Programação 1', {
    'Prova 1': { grade: 10, weight: .1 },
    'Prova 2': { grade: null, weight: .1 },
    'Trabalho': { grade: 9.5, weight: .5 },
    'Atividades': { grade: 10, weight: .3 },
  })

  constructDisciplina(cn)
  constructDisciplina(pe)
  constructDisciplina(a1)
  constructDisciplina(tp1)
}

render()

