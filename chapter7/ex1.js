// robot compare

function compareRobots(robot1, memory1, robot2, memory2) {
  var result1 = 0;
  var result2 = 0;
  for(let i = 0; i < 100; i++){
  	village = VillageState.random();
    result1 = result1 + runRobot2(village, robot1 ,memory1);
   	result2 = result2 + runRobot2(village, robot2 ,memory2);
  }
  console.log(result1/100 + ", " + result2/100)
}

function runRobot2(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

compareRobots(routeRobot, [], goalOrientedRobot, []);