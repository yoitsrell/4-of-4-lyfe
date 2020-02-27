/******************
 * YOUR CODE HERE *
 ******************/
const addAll = function(arr){
  let result = 0 

  for (const item of arr){
    //console.log(addAll)
    result += item
  }
  return result
}

const countSpaces = function(arr){
  let outcome = 0

  for (const item of arr){
    //console.log()
    if(item === ' '){
      outcome++
    }
  }
  return outcome
}

const countTrues = function(arr){
  let outcome = 0

  for (const item of arr){
    //console.log()
    if (item === true){
      outcome++
    }

  }
  return outcome
}

const makeFriendly = function(arr){
  let outcome = ''

  for (const item of arr){
    //console.log()
    //if (item === '!')
    {
    outcome += item.replace('.','!' )
    }
  }
  return outcome
}

const cubeAll = function(arr){
  let outcome = 0

  for (const item of arr){
    //console.log()
    outcome = item * item * item
  }
  return outcome
}

const addNoises = function(arr){
  let outcome = ''

  for (const item of arr){
    //console.log()
  }
  return outcome
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/



if (typeof addAll === 'undefined') {
  addAll = undefined;
}

if (typeof countSpaces === 'undefined') {
  countSpaces = undefined;
}

if (typeof countTrues === 'undefined') {
  countTrues = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}


describe('addAll', () => {
  it(`adds all the numbers in the array`, () => {
    const nums1 = [5, 3, 7, -11, 1003];
    const nums2 = [8, 1, 2, -53, -812];

    expect(addAll(nums1)).toBe(1007);
    expect(addAll(nums2)).toBe(-854);
  })

  it(`doesn't modify the original array`, () => {
    const nums1 = [5, 3];
    const nums2 = [11, 8];
    const original1 = [5, 3];
    const original2 = [11, 8];

    addAll(nums1);
    addAll(nums2);

    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  })

  it(`isn't reassignable`, () => {
    expect(() => addAll = 500).toThrow();
  })
})

describe(`countSpaces`, () => {
  it(`counts all the spaces in a multi-space string`, () => {
    const sentence1 = 'well hello there my crumpet';
    const sentence2 = 'strings 4 eva';

    expect(countSpaces(sentence1)).toBe(4);
    expect(countSpaces(sentence2)).toBe(2);
  })

  it(`correctly identifies strings with no spaces`, () => {
    const sentence1 = 'supercalifragilisticexpialidocious';
    const sentence2 = 'antidisestablishmentarianism';
    const sentence3 = 'pneunultramicroscopicsilicovulcanoconiosis';

    expect(countSpaces(sentence1)).toBe(0);
    expect(countSpaces(sentence2)).toBe(0);
    expect(countSpaces(sentence3)).toBe(0);
  })

  it(`doesn't count all non-letters as spaces`, () => {
    const sentence1 = 'how now, brown cow';
    const sentence2 = '@(*@ are you even talking about?';

    expect(countSpaces(sentence1)).toBe(3);
    expect(countSpaces(sentence2)).toBe(5);
  })

  it(`isn't reassignable`, () => {
    expect(() => countSpaces = 500).toThrow();
  })
})

describe(`countTrues`, () => {
  it(`counts all the trues in a true-only array`, () => {
    const bools1 = [true, true, true];
    const bools2 = [true, true, true, true, true];

    expect(countTrues(bools1)).toBe(3);
    expect(countTrues(bools2)).toBe(5);
  })

  it(`counts all the trues in an array of assorted booleans`, () => {
    const bools1 = [true, false, true, false];
    const bools2 = [true, false, false, true, true, false, false, true];

    expect(countTrues(bools1)).toBe(2);
    expect(countTrues(bools2)).toBe(4);
  })

  it(`doesn't confuse truthy values with true values`, () => {
    const values1 = [true, 'hello', 3, true, []]

    expect(countTrues(values1)).toBe(2);
  })

  it(`doesn't confuse the string 'true' with the boolean true`, () => {
    const values1 = [true, 'true', 'true', true, 'true'];
    const values2 = [true, 'true', 'true', true, true, 'true', 'true', true];

    expect(countTrues(values1)).toBe(2);
    expect(countTrues(values2)).toBe(4);
  })

  it(`isn't reassignable`, () => {
    expect(() => countTrues = 500).toThrow();
  })
})

describe('makeFriendly', () => {
  it(`given a paragraph, returns a paragraph where each sentence ends with an exclamation point instead of the period it held before.`, () => {
    const paragraph1 = `Do you see the story. Do you see anything. It seems to me I am trying to tell you a dream.`;
    const paragraph2 = `Like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker.`;
      const paragraph3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing. It’s the too-huge world vaulting us, and it’s good-bye. But we lean forward to the next crazy venture beneath the skies. Nothing behind me, everything ahead of me, as is ever so on the road.`;

    const friendly1 = `Do you see the story! Do you see anything! It seems to me I am trying to tell you a dream!`;
    const friendly2 = `Like a running blaze on a plain, like a flash of lightning in the clouds! We live in the flicker!`;
    const friendly3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing! It’s the too-huge world vaulting us, and it’s good-bye! But we lean forward to the next crazy venture beneath the skies! Nothing behind me, everything ahead of me, as is ever so on the road!`;

    expect(makeFriendly(paragraph1)).toEqual(friendly1);
    expect(makeFriendly(paragraph2)).toEqual(friendly2);
    expect(makeFriendly(paragraph3)).toEqual(friendly3);
  })
})

describe('cubeAll', () => {
  it(`given an array of numbers, returns an array where each number has been cubed`, () => {
    const nums1 = [3, 2, 5];
    const cubes1 = [27, 8, 125];
    const nums2 = [1, 10, -2];
    const cubes2 = [1, 1000, -8];

    expect(cubeAll(nums1)).toEqual(cubes1);
    expect(cubeAll(nums2)).toEqual(cubes2);
  })
})

describe('addNoises', () => {
    it('adds the appropriate noises for each animal in the given array', () => {
    const dogs = [
      'Fido',
      'Rolph',
      'Maisie',
    ];

    const cats = [
      'Garfield',
      'Heathcliff',
    ]

    const dinos = [
      'Barnie',
      'Sharp Tooth',
    ]

    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const withNoises1 = ['Fido says "Woof!"', 'Garfield says "Meow!"', 'Sharp Tooth says "ROWR."'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const withNoises2 = ['Rolph says "Woof!"', 'Maisie says "Woof!"', 'Barnie says "ROWR."', 'Heathcliff says "Meow!"'];

    expect(addNoises(animals1)).toEqual(withNoises1);
    expect(addNoises(animals2)).toEqual(withNoises2);
  })
})
