describe("leapYear: 閏年判定を行う関数を leapYear を次の条件を満たすように定義せよ", function(){

  context("引数が自然数の時", function(){
    context("その数が4の倍数でない時", function(){
      it("falseを返す", function(){
        leapYear(1999).should.equal(false);
        leapYear(1235).should.equal(false);
        leapYear(2001).should.equal(false);
      });
    });
    context("その数が4の倍数で、100の倍数でも400の倍数でもない時", function(){
      it("trueを返す", function(){
        leapYear(2012).should.equal(true);
        leapYear(2004).should.equal(true);
        leapYear(1996).should.equal(true);
      });
    });
    context("その数が100の倍数だが、400の倍数ではない時", function(){
      it("falseを返す", function(){
        leapYear(1900).should.equal(false);
        leapYear(1700).should.equal(false);
        leapYear(1300).should.equal(false);
      });
    });
    context("その数が400の倍数の時", function(){
      it("trueを返す", function(){
        leapYear(1600).should.equal(true);
        leapYear(2000).should.equal(true);
        leapYear(2800).should.equal(true);
      });
    });
    
  });

  context("引数が正数であるが、自然数でない場合", function(){
    it("falseを返す", function(){
      leapYear(1999.1).should.equal(false);
      leapYear(3.14159).should.equal(false);
      leapYear(1.41421356).should.equal(false);
    });
  });

  context("引数が0の場合", function(){
    it("falseを返す", function(){
      leapYear(0).should.equal(false);
    });
  });

  context("引数が負数の場合", function(){
    it("falseを返す", function(){
      leapYear(-200).should.equal(false);
      leapYear(-3.1415).should.equal(false);
    });
  });

  context("引数が数ではない場合", function(){
    it("falseを返す", function(){
      leapYear("1999").should.equal(false);
      leapYear("2000").should.equal(false);
      leapYear({}).should.equal(false);
    });
  });
    
});
