
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
}


