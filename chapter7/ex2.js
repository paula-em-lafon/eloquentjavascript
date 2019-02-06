//new robot function works better

function yourRobot({place, parcels}, route) {
  if (route.length == 0) {
    placeholder = roads;
    for(let i = 0; i< parcels.length;i++){
      let parcel = parcels[i];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
      if(route.length < placeholder.length){
        placeholder = route
      }
    }
    route = placeholder;
  }
  return {direction: route[0], memory: route.slice(1)};
}

compareRobots(goalOrientedRobot, [], yourRobot, []);