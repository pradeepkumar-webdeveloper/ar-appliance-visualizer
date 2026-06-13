// Appliance configurations
const appliances = {
  fridge: {
    geometry: 'primitive: box; width: 0.5; height: 0.9; depth: 0.5',
    material: 'color: #C0C0C0; metalness: 0.9; roughness: 0.1',
    label: '🧊 Fridge'
  },
  washer: {
    geometry: 'primitive: cylinder; radius: 0.3; height: 0.7',
    material: 'color: #FFFFFF; metalness: 0.5; roughness: 0.3',
    label: '🫧 Washer'
  },
  tv: {
    geometry: 'primitive: box; width: 1.0; height: 0.6; depth: 0.05',
    material: 'color: #1a1a1a; metalness: 0.7; roughness: 0.2',
    label: '📺 TV'
  }
};

let currentScale = 1;
let currentRotation = 0;
let currentAppliance = 'fridge';

function selectAppliance(type) {
  currentAppliance = type;
  const model = document.querySelector('#appliance-model');
  const config = appliances[type];
  model.setAttribute('geometry', config.geometry);
  model.setAttribute('material', config.material);
  currentScale = 1;
  currentRotation = 0;
  model.setAttribute('scale', '1 1 1');
  model.setAttribute('rotation', '0 0 0');

  // Update active button
  document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function scaleUp() {
  currentScale = Math.min(currentScale + 0.2, 3);
  document.querySelector('#appliance-model')
    .setAttribute('scale', `${currentScale} ${currentScale} ${currentScale}`);
}

function scaleDown() {
  currentScale = Math.max(currentScale - 0.2, 0.2);
  document.querySelector('#appliance-model')
    .setAttribute('scale', `${currentScale} ${currentScale} ${currentScale}`);
}

function rotateLeft() {
  currentRotation = (currentRotation + 45) % 360;
  document.querySelector('#appliance-model')
    .setAttribute('rotation', `0 ${currentRotation} 0`);
}

// Highlight first button on load
window.onload = () => {
  document.querySelector('.btn').classList.add('active');
};
