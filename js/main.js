
function constructSubject(subject) {
  const finalGrade = subject.getFinalGrade()
  const mention = subject.getMention()
  const nextMention = subject.getNextMention()

  const divDisciplina = document.createElement('div')
  divDisciplina.classList.add('subject')

  const titleElement = document.createElement('h2')
  titleElement.innerText = subject.title
  divDisciplina.appendChild(titleElement)

  const container = document.createElement('div')
  container.classList.add('container')

  const table = subject.getTopicsHTMLTable()
  container.innerHTML += table

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
    'Prova 3': { grade: 5.7, weight: .3 },
    'Atividades': { grade: 8, weight: .1 },
  })
  const pe = new Subject('Probabilidade e Estatística', {
    'Prova 1': { grade: 7, weight: .3 },
    'Prova 2': { grade: 10, weight: .3 },
    'Prova 3': { grade: 10, weight: .4 },
  })
  const a1 = new Subject('Álgebra 1', {
    'Prova 1': { grade: 5.8, weight: .4*.6 },
    'Prova 2': { grade: 4.7, weight: .6*.6 },
    'Questionários': { grade: 9.929, weight: .3*.4 },
    'Tarefas': { grade: 7.523, weight: .7*.4 },
  })
  const tp1 = new Subject('Técnicas de Programação 1', {
    'Prova 1': { grade: 10, weight: .1 },
    'Prova 2': { grade: 10, weight: .1 },
    'Trabalho': { grade: 9.5, weight: .5 },
    'Atividades': { grade: 10, weight: .3 },
  })

  constructSubject(cn)
  constructSubject(pe)
  constructSubject(a1)
  constructSubject(tp1)
}

render()

