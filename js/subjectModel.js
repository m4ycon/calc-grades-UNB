
class Subject {
  constructor(title, topics) {
    this.title = title;
    this.topics = topics; // { topic1: { grade, weight }, ... }
  }

  getFinalGrade() {
    return Object.values(this.topics)
      .map(({ grade, weight }) => grade * weight)
      .reduce((a, b) => a + b)
  }

  getWeightsOnNullGrades() {
    const pesoRestante = Object.values(this.topics)
      .map(({ grade, weight }) => grade == null ? weight : 0)
      .reduce((a, b) => a + b)

    return pesoRestante == 0 ? 1 : pesoRestante
  }

  getMention() {
    const finalGrade = this.getFinalGrade()
    const remainingWeight = this.getWeightsOnNullGrades()

    // calcula quanto falta para cada menção, se <= 0, já temos a menção
    const mm = (5 - finalGrade) / remainingWeight
    const ms = (7 - finalGrade) / remainingWeight
    const ss = (9 - finalGrade) / remainingWeight

    return ss <= 0 ? 'SS' 
      : ms <= 0 ? 'MS' 
      : mm <= 0 ? 'MM' 
      : `--`
  }
  
  getNextMention() {
    const finalGrade = this.getFinalGrade()
    const remainingWeight = this.getWeightsOnNullGrades()

    const mm = (5 - finalGrade)/remainingWeight
    const ms = (7 - finalGrade)/remainingWeight
    const ss = (9 - finalGrade)/remainingWeight

    return mm > 0 ? `${mm.toFixed(2)} para MM` 
      : ms > 0 ? `${ms.toFixed(2)} para MS` 
      : ss > 0 ? `${ss.toFixed(2)} para SS` 
      : 'Não há mais menções'
  }

  getTopicsHTMLTable() {
    return '<table class="table">' 
      + Object.entries(this.topics)
          .map(([topic, { grade }]) => `
            <tr>
              <td>${topic}</td>
              <td>${grade !== null ? grade.toFixed(2) : '?'}</td>
            </tr>
          `).join('') 
      + '</table>'
  }
}


