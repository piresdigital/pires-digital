import { useEffect } from 'react';
import { Color } from './metaballColor.js';

export default function Metaball(props){

  const backgroundColor = props.backgroundColor;
  const blobColor = props.blobColor;

  useEffect(()=>{
    
    const metaballContainer = document.getElementById('metaball');

    function metaballInit() {
      if(!metaballContainer){
        return null;
      }

      function hexToGL(hexStr) {
        //check if valid hex value
        if (/^#([0-9A-F]{3}){1,2}$/i.test(hexStr)) {
          let col = new Color(hexStr);
          let out = col.toArray().map((x) => {
            let conv = Math.round(x * 1000) / 1000;
            if (conv.toString().indexOf('.') === -1) conv += '.';
            return conv;
          });
          return `vec4(${out}, 1.0)`;
        } else {
          console.log('Color provided is not a HEX color.', hexStr);
          return 'vec4(1.0, 1.0, 1.0, 1.0)';
        }
      }
    
      // An implementation of the pen from Alfons Nilsson,
      // https://codepen.io/TC5550/pen/WNNWoaO
    
      var canvas = document.createElement("canvas");
      canvas.style.cssText = 'position: absolute; width: 100%; height: 100%; top: 0; left: 0; bottom: 0; right: 0; overflow: hidden;';
    
      var width = canvas.width = window.innerWidth * 0.75;
      var height = canvas.height = window.innerHeight * 0.75;
    
      metaballContainer.appendChild(canvas);
      var gl = canvas.getContext('webgl');
    
      var mouse = {x: 0, y: 0};
    
      var numMetaballs = props.numMetaballs ? props.numMetaballs : 20;
      var metaballs = [];
    
      for (var i = 0; i < numMetaballs; i++) {
        var radius = Math.random() * 100 + 20;
        metaballs.push({
          x: Math.random() * (width - 2 * radius) + radius,
          y: Math.random() * (height - 2 * radius) + radius,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          r: radius * 0.75
        });
      }
    
      var vertexShaderSrc = `
      attribute vec2 position;
    
      void main() {
      gl_Position = vec4(position, 0.0, 1.0);
      }
      `;
    
      var fragmentShaderSrc = `
      precision highp float;
    
      const float WIDTH = ` + (width >> 0) + `.0;
      const float HEIGHT = ` + (height >> 0) + `.0;
    
      uniform vec3 metaballs[` + numMetaballs + `];
    
      void main(){
      float x = gl_FragCoord.x;
      float y = gl_FragCoord.y;
    
      float sum = 0.0;
      for (int i = 0; i < ` + numMetaballs + `; i++) {
      vec3 metaball = metaballs[i];
      float dx = metaball.x - x;
      float dy = metaball.y - y;
      float radius = metaball.z;
    
      sum += (radius * radius) / (dx * dx + dy * dy);
      }
    
      if (sum >= 0.99) {
      gl_FragColor = ${ blobColor ? hexToGL(blobColor) : 'vec4(0.9,0.9,0.9, 1.0)'};
      return;
      }
    
      gl_FragColor = ${ backgroundColor ? hexToGL(backgroundColor) : 'vec4(1.0, 1.0, 1.0, 1.0)'};
      }
    
      `;
    
      var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
      var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);
    
      var program = gl.createProgram();
    
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);
    
      var vertexData = new Float32Array([
        -1.0,  1.0, // top left
        -1.0, -1.0, // bottom left
        1.0,  1.0, // top right
        1.0, -1.0, // bottom right
      ]);
      var vertexDataBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
    
      var positionHandle = getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionHandle);
      gl.vertexAttribPointer(positionHandle,
                            2, // position is a vec2
                            gl.FLOAT, // each component is a float
                            gl.FALSE, // don't normalize values
                            2 * 4, // two 4 byte float components per vertex
                            0 // offset into each span of vertex data
                            );
    
      var metaballsHandle = getUniformLocation(program, 'metaballs');
    
      loop();
      function loop() {
        for (var i = 0; i < numMetaballs; i++) {
          var metaball = metaballs[i];
          metaball.x += metaball.vx;
          metaball.y += metaball.vy;
    
          if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
          if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
        }
    
        var dataToSendToGPU = new Float32Array(3 * numMetaballs);
        for (var i = 0; i < numMetaballs; i++) {
          var baseIndex = 3 * i;
          var mb = metaballs[i];
          dataToSendToGPU[baseIndex + 0] = mb.x;
          dataToSendToGPU[baseIndex + 1] = mb.y;
          dataToSendToGPU[baseIndex + 2] = mb.r;
        }
        gl.uniform3fv(metaballsHandle, dataToSendToGPU);
        
        //Draw
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    
        requestAnimationFrame(loop);
      }
    
      function compileShader(shaderSource, shaderType) {
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, shaderSource);
        gl.compileShader(shader);
    
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
        }
    
        return shader;
      }
    
      function getUniformLocation(program, name) {
        var uniformLocation = gl.getUniformLocation(program, name);
        if (uniformLocation === -1) {
          throw 'Can not find uniform ' + name + '.';
        }
        return uniformLocation;
      }
    
      function getAttribLocation(program, name) {
        var attributeLocation = gl.getAttribLocation(program, name);
        if (attributeLocation === -1) {
          throw 'Can not find attribute ' + name + '.';
        }
        return attributeLocation;
      }
    
      canvas.onmousemove = function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    }

    metaballInit();

  },[false]);

  return(
    <>
      <div id="metaball"></div>
      
      <style jsx>
        {`
        #metaball {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
        @media screen and (max-width: 500px) {
          #metaball {
            display: none;
          }
        }
        `}
      </style>
    </>
  );

}