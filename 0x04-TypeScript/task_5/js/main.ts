interface Credits {
  credits: number;
}

interface Major extends Credits {}

interface Minor extends Credits {}

function sumMajorCredits(subject1: Major, subject2: Major): Major {
  return {
    credits: subject1.credits + subject2.credits
  };
}

function sumMinorCredits(subject1: Minor, subject2: Minor): Minor {
  return {
    credits: subject1.credits + subject2.credits
  };
}
