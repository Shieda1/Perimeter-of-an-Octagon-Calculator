// https://calculator.swiftutors.com/perimeter-of-an-octagon-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofOctagonRadio = document.getElementById('perimeterofOctagonRadio');
const edgeLengthRadio = document.getElementById('edgeLengthRadio');

let perimeterofOctagon;
let edgeLength = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

perimeterofOctagonRadio.addEventListener('click', function() {
  variable1.textContent = 'Edge Length';
  edgeLength = v1;
  result.textContent = '';
});

edgeLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Octagon';
  perimeterofOctagon = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofOctagonRadio.checked)
    result.textContent = `Perimeter of Octagon = ${computePerimeterofOctagon().toFixed(5)}`;

  else if(edgeLengthRadio.checked)
    result.textContent = `Edge Length = ${computeEdgeLength().toFixed(5)}`;
})

// calculation

function computePerimeterofOctagon() {
  return 8 * Number(edgeLength.value);
}

function computeEdgeLength() {
  return Number(perimeterofOctagon.value) / 8;
}