var GAME = {
  canvas : {
    width : 1000,
    height : 1000
  },
  started : true,
  level : 1
};

var PLAYER = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  caught : false,
  onclue : false,
  multiplayer : true,
  src : ""
};

var DESK = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var GUARD = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var TEXTBOOK = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var CHAIR = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var CLUE = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var BEAM = {
  initialized: false,
  x : 0,
  y : 0,
  theta: 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};
