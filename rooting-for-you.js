const judgeVegetable = (vegetables, metric) => {
  let max = 0;
  let winner = '';
  for (let veg of vegetables) {
    if (veg[metric] > max) {
      max = veg[metric];
      winner = veg.submitter;
    }
  }
  return winner;
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));