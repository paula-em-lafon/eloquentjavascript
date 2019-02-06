function yourRobot({place, parcels}, route) {
  var routeHolder = null;
  for plac in parcel{
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobotAnimation(VillageState.random(), yourRobot, memory);