// 다음과 같이 사용할 수 있어야 합니다

// sport.playerNames() 호출은
// ["Lebron James plays basketball", "Kevin Durant plays basketball"] 을 리턴합니다.

//const name = undefined; //자네는 뭘 원하는 문장인가???????

let sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function(){ //sports.playerNamers()
    // "Lebron James +' plays '+ basketball"  을 리턴합니다.

    let nameArr = [];
    for(let i=0; i<2; i++){
      nameArr.push(this.players[i].name+' plays '+this.name);
    }
    return nameArr;
    

    //return [this.players.name.bind()];
  }
};

module.exports = sport;