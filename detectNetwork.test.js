/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function() {
	expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
	expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
	expect(detectNetwork('6441567890123456')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
	expect(detectNetwork('6441567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
	expect(detectNetwork('6451567890123456')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
	expect(detectNetwork('6451567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
	expect(detectNetwork('6461567890123456')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
	expect(detectNetwork('6461567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
	expect(detectNetwork('6471567890123456')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
	expect(detectNetwork('6471567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
	expect(detectNetwork('6481567890123456')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
	expect(detectNetwork('6481567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
	expect(detectNetwork('6491567890123456')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
	expect(detectNetwork('6491567890123456789')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
	expect(detectNetwork('6511567890123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
	expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  it('has a prefix of 5018 and a length of 12', function() {
	expect(detectNetwork('501856789012')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
	expect(detectNetwork('502056789012')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
	expect(detectNetwork('503856789012')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
	expect(detectNetwork('630456789012')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
	expect(detectNetwork('5018567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
	expect(detectNetwork('5020567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
	expect(detectNetwork('5038567890123')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
	expect(detectNetwork('6304567890123')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
	expect(detectNetwork('50185678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
	expect(detectNetwork('50205678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
	expect(detectNetwork('50385678901234')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
	expect(detectNetwork('63045678901234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
	expect(detectNetwork('501856789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
	expect(detectNetwork('502056789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
	expect(detectNetwork('503856789012345')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
	expect(detectNetwork('630456789012345')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
	expect(detectNetwork('5018567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
	expect(detectNetwork('5020567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
	expect(detectNetwork('5038567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
	expect(detectNetwork('6304567890123456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
	expect(detectNetwork('50185678901234567')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
	expect(detectNetwork('50205678901234567')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
	expect(detectNetwork('50385678901234567')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
	expect(detectNetwork('63045678901234567')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
	expect(detectNetwork('501856789012345678')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
	expect(detectNetwork('502056789012345678')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
	expect(detectNetwork('503856789012345678')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
	expect(detectNetwork('630456789012345678')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
	expect(detectNetwork('5018567890123456789')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
	expect(detectNetwork('5020567890123456789')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
	expect(detectNetwork('5038567890123456789')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
	expect(detectNetwork('6304567890123456789')).to.equal('Maestro');
  });
});


describe('China UnionPay', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  
  for(var prefix = 624; prefix < 627; prefix++){
	(function(prefix) {
		it('has a prefix of ' + prefix + ' and a length of 16', function() {
			expect(detectNetwork(prefix + '4567890123456')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 17', function() {
			expect(detectNetwork(prefix + '45678901234567')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
			expect(detectNetwork(prefix + '456789012345678')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
			expect(detectNetwork(prefix + '4567890123456789')).to.equal('China UnionPay');
		});
	})(prefix)
  }
  for(var prefix = 6282; prefix < 6289; prefix++){
	(function(prefix) {
		it('has a prefix of ' + prefix + ' and a length of 16', function() {
			expect(detectNetwork(prefix + '567890123456')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 17', function() {
			expect(detectNetwork(prefix + '5678901234567')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
			expect(detectNetwork(prefix + '56789012345678')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
			expect(detectNetwork(prefix + '567890123456789')).to.equal('China UnionPay');
		});
	})(prefix)
  }
  for(var prefix = 622126; prefix < 622926; prefix++){
	(function(prefix) {
		it('has a prefix of ' + prefix + ' and a length of 16', function() {
			expect(detectNetwork(prefix + '7890123456')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 17', function() {
			expect(detectNetwork(prefix + '78901234567')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
			expect(detectNetwork(prefix + '789012345678')).to.equal('China UnionPay');
		});
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
			expect(detectNetwork(prefix + '7890123456789')).to.equal('China UnionPay');
		});
	})(prefix)
  }
 
});

describe('Switch', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  
  var expect = chai.expect;
  
  var prefixes = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];
  var cardLengths = [16, 18, 19];
  
  var prefixLength = 0;
  var cardLength = 0;
  var prefix = '';
 
  for(var i = 0; i < prefixes.length; i++){
	  var prefix = 0;
	  if(prefixes[i].toString().length === 4){
		  prefix = prefixes[i]*100;
	  }
	  else{
		  prefix = prefixes[i];
	  }
	(function(prefix) {
		it('has a prefix of ' + prefix + ' and a length of 16', function() {
			expect(detectNetwork(prefix + '7890123456')).to.equal('Switch');
		});
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
			expect(detectNetwork(prefix + '789012345678')).to.equal('Switch');
		});
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
			expect(detectNetwork(prefix + '7890123456789')).to.equal('Switch');
		});
	})(prefix)
  }
});

describe('should support China UnionPay')
describe('should support Switch')
