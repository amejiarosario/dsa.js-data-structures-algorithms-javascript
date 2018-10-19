/**
 *
 6.7 The Apocalypse: In the new post-apocalyptic world, the world queen is desperately concerned about the birth rate. Therefore, she decrees that all families should ensure that they have one girl or else they face massive fines. If all families abide by this policy-that is, they have continue to have children until they have one girl, at which point they immediately stop-what will the gender ratio of the new generation be? (Assume that the odds of someone having a boy or a girl on any given pregnancy is equal.) Solve this out logically and then write a computer simulation of it.
 */
function simulator(families = 1e6) {
  let boys = 0, girls = 0;
  const MAX_CHILDREN = 1;

  for(let family = 0; family < families; family++) {
    const pregnacies = parseInt(Math.random() * MAX_CHILDREN) + 1;

    let g = 0, b = 0;
    for(let c = 0; c < pregnacies; c++) {
      if(Math.random() > 0.5) {
        b++;
      } else {
        g++;
        break;
      }
    }

    // console.log(family, pregnacies, b, g);
    boys += b;
    girls += g;
  }

  console.log(boys, girls);

  console.log(`Gender ration is ${Math.round(boys/girls)}:1 boys to girls`);
}

simulator(1e6);