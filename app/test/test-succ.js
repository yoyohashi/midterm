describe("succ: 引数に指定した整数の、次の整数を返す関数 succ を定義せよ", function(){

  context("引数が整数の場合", function(){
    it("0の次は1である", function(){
      succ(0).should.equal(1);
    });
    it("-1の次は0である", function(){
      succ(-1).should.equal(0);
    });
    it("9999の次は10000である", function(){
      succ(9999).should.equal(10000);
    });
  });
    
});
