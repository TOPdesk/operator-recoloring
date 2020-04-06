const background = document.querySelector('#background');
const messageBackground = document.querySelector('#background-msg');
const onBackground = document.querySelector('#on-background');
const messageOnBackground = document.querySelector('#on-background-msg');
const sampleBackground = document.querySelector('#background-sample');

const surface = document.querySelector('#surface');
const messageSurface = document.querySelector('#surface-msg');
const onSurface = document.querySelector('#on-surface');
const messageOnSurface = document.querySelector('#on-surface-msg');
const sampleSurface = document.querySelector('#surface-sample');

const primary = document.querySelector('#primary')
const messagePrimary = document.querySelector('#primary-msg')
const primaryMuted = document.querySelector('#primary-muted')
const messagePrimaryMuted = document.querySelector('#primary-muted-msg')
const onPrimary = document.querySelector('#on-primary')
const messageOnPrimary = document.querySelector('#on-primary-msg')
const samplePrimary = document.querySelector('#primary-sample')

const error = document.querySelector('#error');
const messageError = document.querySelector('#error-msg');
const onError = document.querySelector('#on-error');
const messageOnError = document.querySelector('#on-error-msg');
const sampleError = document.querySelector('#error-sample');

const disabled = document.querySelector('#disabled');
const messageDisabled = document.querySelector('#disabled-msg');
const onDisabled = document.querySelector('#on-disabled');
const messageOnDisabled = document.querySelector('#on-disabled-msg');
const sampleDisabled = document.querySelector('#disabled-sample');

const selection = document.querySelector('#selection');
const messageSelection = document.querySelector('#selection-msg');
const onSelection = document.querySelector('#on-selection');
const messageOnSelection = document.querySelector('#on-selection-msg');
const sampleSelection = document.querySelector('#selection-sample');

const rgbValues = (color) => {
  let r, g, b;
  if (color[1].length == 3) {
    r = parseInt(`${color[1][0]}${color[1][0]}`, 16);
    g = parseInt(`${color[1][1]}${color[1][1]}`, 16);
    b = parseInt(`${color[1][2]}${color[1][2]}`, 16);
  } else {
    r = parseInt(`${color[1][0]}${color[1][1]}`, 16);
    g = parseInt(`${color[1][2]}${color[1][3]}`, 16);
    b = parseInt(`${color[1][4]}${color[1][5]}`, 16);
  }
  
  return {r, g, b};
}

const workers = {};
const status = document.querySelector('#status');
const colorRegex = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;
const partialColor = /^#?[a-f\d]{0,6}$/i;

const onColorInput = (message, sampleCallback) => (event) => {
  const value = event.target.value;
  const color = colorRegex.exec(value);
  const inputId = event.target.id;
  const inputLabel = event.target.labels[0].innerText;
  
  oldWorker = workers[inputId];
  if (oldWorker) {
    oldWorker.terminate();
    delete workers[inputId];
    status.innerText = `${inputLabel} calculation terminated`;
  }
  
  if (color) {
    sampleCallback(`#${color[1]}`);
    message.innerText = "Calculating...";
    status.innerText = `Calculating ${inputLabel}`;
    
    const worker = new Worker('./worker.js');
    workers[inputId] = worker;
    worker.postMessage(rgbValues(color));
    worker.onmessage = (event) => {
      message.innerText = event.data;
      worker.terminate();
      delete workers[inputId];
      status.innerText = `completed ${inputLabel}`; 
    }
    
    return;
  }
  
  sampleCallback('#fff');
  if (partialColor.test(value)) {
    message.innerText = '';
  }
  else {
    message.innerText = `Use '#' and 0-9a-f, e.g #0cf or #00ccff`;
    status.innerText = `Illegal character in ${inputLabel}`;
  }
  message.innerText = partialColor.test(value) ? '' : 'Use #0cf or #00ccff';
}

const backgroundCallback = (sample) => (hexColor) => {
  sample.style.background = hexColor;
}
const textCallback = (sample) => (hexColor) => {
  sample.style.color = hexColor;
}

const primaryCallback = (hexColor) => {
  const muted = primaryMuted.value.match(colorRegex)
  
  samplePrimary.style.background = `linear-gradient(135deg, 
    ${hexColor} 50%,
    ${muted ? `#${muted[1]}` : '#fff'} 50%
  )`
}

const primaryMutedCallback = (hexColor) => {
  const base = primary.value.match(colorRegex)
  
  samplePrimary.style.background = `linear-gradient(135deg, 
    ${base ? `#${base[1]}` : '#fff'} 50%,
    ${hexColor} 50%
  )`
}

background.addEventListener('input', onColorInput(messageBackground, backgroundCallback(sampleBackground)));
onBackground.addEventListener('input', onColorInput(messageOnBackground, textCallback(sampleBackground)));

surface.addEventListener('input', onColorInput(messageSurface, backgroundCallback(sampleSurface)));
onSurface.addEventListener('input', onColorInput(messageOnSurface, textCallback(sampleSurface)));

primary.addEventListener('input', onColorInput(messagePrimary, primaryCallback));
primaryMuted.addEventListener('input', onColorInput(messagePrimaryMuted, primaryMutedCallback));
onPrimary.addEventListener('input', onColorInput(messageOnPrimary, textCallback(samplePrimary)));

error.addEventListener('input', onColorInput(messageError, backgroundCallback(sampleError)));
onError.addEventListener('input', onColorInput(messageError, textCallback(sampleError)));

disabled.addEventListener('input', onColorInput(messageDisabled, backgroundCallback(sampleDisabled)));
onDisabled.addEventListener('input', onColorInput(messageDisabled, textCallback(sampleDisabled)));

selection.addEventListener('input', onColorInput(messageSelection, backgroundCallback(sampleSelection)));
onSelection.addEventListener('input', onColorInput(messageSelection, textCallback(sampleSelection)));

const applyTheme = (colors) => {
  background.value = colors.background;
  onBackground.value = colors.onBackground;
  sampleBackground.style.background = colors.background;
  sampleBackground.style.color = colors.onBackground;

  surface.value = colors.surface;
  onSurface.value = colors.onSurface;
  sampleSurface.style.background = colors.surface;
  sampleSurface.style.color = colors.onSurface;

  primary.value = colors.primary;
  primaryMuted.value = colors.primaryMuted; 
  onPrimary.value = colors.onPrimary;
  samplePrimary.style.background = `linear-gradient(135deg, ${colors.primary} 50%, ${colors.primaryMuted} 50%)`;
  samplePrimary.style.color = colors.onPrimary;

  error.value = colors.error;
  onError.value = colors.onError;
  sampleError.style.background = colors.error;
  sampleError.style.color = colors.onError;

  disabled.value = colors.disabled;
  onDisabled.value = colors.onDisabled;
  sampleDisabled.style.background = colors.disabled;
  sampleDisabled.style.color = colors.onDisabled;

  selection.value = colors.selection;
  onSelection.value = colors.onSelection;
  sampleSelection.style.background = colors.selection;
  sampleSelection.style.color = colors.onSelection;
}

applyTheme({
  background: '#0c0c0c',
  onBackground: '#fcfcfc',
  surface: '#404040',
  onSurface: '#fcfcfc',
  primary: '#eda911',
  primaryMuted: '#d5970e',
  onPrimary: '#0c0c0c',
  error: '#ff0070',
  onError: '#0c0c0c',
  disabled: '#404040',
  onDisabled: '#8c8c8c',
  selection: '#fcfcfc',
  onSelection: '#0c0c0c'
});