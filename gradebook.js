function getAverage(scores) {
    let sum = 0;
  
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
  
    return sum / scores.length;
  }

function getGrade(score) {
if (score === 100) { return 'A++'; }
if (score >= 90 && score <= 99) { return 'A'; }
if (score >= 80 && score <= 89) { return 'B'; }
if (score >= 70 && score <= 79) { return 'C'; }
if (score >= 60 && score <= 69) { return 'D'; }
if (score <= 59) { return 'F'; }	
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
