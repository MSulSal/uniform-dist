import Sketch from "react-p5";

const Distribution = () => {
  let randomCounts = [];
  let total = 20;
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(0);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  };

  // When the window is resized, recalculate the width and height.
  const windowResized = (p5) => {
    const canvasParent = p5.canvas.parentNode;
    const newWidth = canvasParent.offsetWidth;
    const newHeight = newWidth * 0.5;
    p5.resizeCanvas(newWidth, newHeight);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    let index = p5.floor(p5.random(randomCounts.length));
    randomCounts[index]++;
    p5.fill(0, 255, 0);
    p5.stroke(0);
    let w = p5.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Distribution;
