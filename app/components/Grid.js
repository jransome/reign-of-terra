/* jshint esversion: 6 */
import * as constants from '../Constants'
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Square from './Square.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Switch,
  TouchableOpacity
} from 'react-native';

var testData = [ {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.21
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.207
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.21
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.207
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.207
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.204
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.207
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.204
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.204
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.20099999999999998
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.204
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.20099999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.20099999999999998
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.19799999999999998
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.20099999999999998
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.19799999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.19799999999999998
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.19499999999999998
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.19799999999999998
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.19499999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.195
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.192
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.195
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.192
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.458,
      "longitude" : -0.192
    },
    "bottomRight" : {
      "latitude" : 51.458,
      "longitude" : -0.189
    },
    "topLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.192
    },
    "topRight" : {
      "latitude" : 51.461,
      "longitude" : -0.189
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.21
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.207
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.21
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.207
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.207
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.204
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.207
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.204
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.204
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.20099999999999998
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.204
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.20099999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.20099999999999998
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.19799999999999998
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.20099999999999998
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.19799999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.19799999999999998
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.19499999999999998
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.19799999999999998
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.19499999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.195
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.192
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.195
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.192
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.461,
      "longitude" : -0.192
    },
    "bottomRight" : {
      "latitude" : 51.461,
      "longitude" : -0.189
    },
    "topLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.192
    },
    "topRight" : {
      "latitude" : 51.464,
      "longitude" : -0.189
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.21
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.207
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.21
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.207
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.207
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.204
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.207
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.204
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.204
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.20099999999999998
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.204
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.20099999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.20099999999999998
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.19799999999999998
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.20099999999999998
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.19799999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.19799999999999998
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.19499999999999998
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.19799999999999998
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.19499999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.195
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.192
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.195
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.192
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.464,
      "longitude" : -0.192
    },
    "bottomRight" : {
      "latitude" : 51.464,
      "longitude" : -0.189
    },
    "topLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.192
    },
    "topRight" : {
      "latitude" : 51.467,
      "longitude" : -0.189
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.21
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.207
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.21
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.207
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.207
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.204
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.207
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.204
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.204
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.20099999999999998
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.204
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.20099999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.20099999999999998
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.19799999999999998
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.20099999999999998
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.19799999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.19799999999999998
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.19499999999999998
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.19799999999999998
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.19499999999999998
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.195
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.192
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.195
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.192
    }
  },
  "ownerID" : 0
}, {
  "colour" : "rgba(200, 200, 200, 0.2)",
  "coordinates" : {
    "bottomLeft" : {
      "latitude" : 51.467,
      "longitude" : -0.192
    },
    "bottomRight" : {
      "latitude" : 51.467,
      "longitude" : -0.189
    },
    "topLeft" : {
      "latitude" : 51.47,
      "longitude" : -0.192
    },
    "topRight" : {
      "latitude" : 51.47,
      "longitude" : -0.189
    }
  },
  "ownerID" : 0
} ]



export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      gridJsx: [],
      currentSquare: null,
    }
    this.dbGridRef = constants.firebaseApp.database().ref().child('grid_test');
    this.setupDatabaseListener();
    // this.initialiseGrid();
  }

  setupDatabaseListener(){
    var self = this;
    console.log("listener")
    var refreshGrid = function(data) {
      var val = data.val();
      self.state.grid = val;
      console.log(val === testData)
      console.log(val)
      console.log(testData)
      self.state.gridJsx = self.generateGridJsx(val);
    };
    this.dbGridRef.on('value', refreshGrid);
  }

  retreiveGrid(){
    // this.state.grid = this.dbRef;
    // console.log("retreive grid")
    // console.log(this.state.grid)
  }

  initialiseGrid() {
    // function generateSquareCoordsFromOrigin(origin){
    //   return newSquare = {
    //     coordinates: {
    //       bottomLeft: origin,
    //       topLeft: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude },
    //       topRight: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
    //       bottomRight: { latitude: origin.latitude, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
    //     },
    //     ownerID: 0,
    //     colour: 'rgba(200, 200, 200, 0.2)',
    //   };
    // };
    //
    // // Start at bottom left origin and draw left-right, bottom to top
    // for (var i = 0; i < constants.GRID_HEIGHT; i++) {
    //   for (var j = 0; j < constants.GRID_WIDTH; j++) {
    //     var origin = { latitude: constants.MAP_ORIGIN.bottomLatitude + i * constants.SQUARE_HEIGHT_WIDTH, longitude: constants.MAP_ORIGIN.leftLongitude + j * constants.SQUARE_HEIGHT_WIDTH }
    //     var newSquare = generateSquareCoordsFromOrigin(origin)
    //     this.state.grid.push(newSquare);
    //   }
    // }
    this.state.grid = testData;
    this.state.gridJsx = this.generateGridJsx(this.state.grid);
  };

  generateGridJsx(grid){
    var jsxArray = []
    grid.map(function(square){
      jsxArray.push(<Square coordinates={square.coordinates} fillColor={square.colour} ownerID={square.ownerID}/>);
    })
    return jsxArray;
  };

  updateGrid() {
    this.setState(previous => ({

    }))
  }

  render() {
    return <View>{this.state.gridJsx}</View>
  }
}
