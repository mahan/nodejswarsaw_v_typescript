
enum DrawingStates {
  BeforeDraw,
  Drawing,
  AfterDraw
}


let drawState: DrawingStates = DrawingStates.Drawing;

function logDrawState(ds: DrawingStates) {
  switch (ds) {
    case DrawingStates.BeforeDraw: {
      console.log('BeforeDraw');
      break;
    }
    case DrawingStates.Drawing: {
      console.log('Drawing');
      break;
    }
    case DrawingStates.AfterDraw: {
      console.log('AfterDraw');
      break;
    }
  }
}


logDrawState(drawState);
//easy version
console.log(DrawingStates[drawState], ' = ', drawState);
