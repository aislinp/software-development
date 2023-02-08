/*
{'name': 'Name': 'fullName': 'scientific name', 'effects': ['side', 'effects'], 'signs': ['signs', 'of', 'overdose'], 'appearance': ['what', 'it', 'looks', 'like']},
{'name': 'Name': 'fullName': 'scientific name', 'effects': ['side', 'effects'], 'signs': ['signs', 'of', 'overdose'], 'appearance': ['what', 'it', 'looks', 'like'], 'category': 'category'}
*/

let drugs = {
  'drugs': [
    {'name': 'LSD', 'fullName': 'lysergic acid diethylamide', 'effects': ['changes in perception', 'changes in mood', 'changes in thought', 'hallucinations', 'space distortion', 'time distortion'], 'signs': ['euphoria', 'pupil dilation', 'visual hallucinations', 'auditory hallucinations', 'confusion', 'trouble concentrating', 'headaches', 'nausea', 'fast heartbeat', 'irregular heartbeat', 'increased body temperature', 'fast breathing', 'vomiting', 'facial flushes', 'sweating', 'chills'], 'appearance': ['tabs', 'liquid', 'gelatin sheets', 'capsules'], 'category': 'psychedelic'},
    {'name': 'Magic Mushrooms', 'fullName': 'psilocybin', 'effects': ['euphoria', 'altered visuals', 'time distortion', 'mild nausea', 'sweating', 'auditory hallucinations', 'visual hallucinations', 'space distortion'], 'signs': ['anxiety', 'paranoia', 'delusions'], 'appearance': ['mushrooms with a cap and a long stem', 'gray', 'brown', 'white', 'tan', 'white powder', 'dried mushrooms'], 'category': 'psychedelic'},
    {'name': 'DMT', 'fullName': 'N-Dimethyltryptamine', 'effects': ['rush', 'euphoria', 'changes in mood', 'increased sensitivity', 'fast heartbeat', 'increased blood pressure', 'dilated pupils', 'visual hallucinations', 'dissociation'], 'signs': ['anxiety', 'delusions', 'psychosis', 'hallucinations', 'paranoia'], 'appearance': ['white powder', 'crystalline']},
    {'name': 'Mescaline', 'fullName': '5-trimethoxyphenethylamine', 'effects': ['euphoria', 'increased energy', 'space distortion', 'time distortion', 'trouble concentrating', 'trouble thinking', 'increased blood pressure', 'fast heartbeat', 'intense nausea', 'vomiting'], 'signs': ['overdoses are rare.'], 'appearance': ['powder', 'tablet', 'capsule', 'liquid']},
    {'name': 'NBOMes', 'fullName': '25-NB', 'effects': ['visual hallucinations', 'auditory hallucinations', 'euphoria', 'sweating', 'confusion', 'memory issues', 'increased blood pressure', 'fast heartbeat', 'paranoia'], 'signs': ['intense confusion', 'agitation', 'seizure', 'kidney failure', 'nausea', 'vomiting', 'overheating', 'coma'], 'appearance': ['blotters', 'liquid', 'powder', 'pill']},
    {'name': 'Salvia', 'fullName': 'Saliva divinorum', 'effects': ['anxiety', 'amnesia', 'hallucinations', 'sedation', 'low energy', 'pain relief', 'confusion', 'delusion', 'visual distortions', 'laughter', 'time distortion'], 'signs': ['overdoses are rare.'], 'appearance': ['fresh leaves', 'dried leaves']},
    {'name': 'Ayahuasca', 'fullName': 'Banisteriopsis caapi', 'effects': ['nausea', 'vomiting', 'euphoria', 'increased blood pressure', 'fast heartbeat', 'visual hallucinations', 'auditory hallucinations', 'anxiety'], 'signs': ['signs', 'of', 'overdose'], 'appearance': ['Ayahuasca is a brown-reddish drink with strong taste and smell'], 'category': 'category'}
  ]
};

document.getElementById('emergencyButtonDiv').addEventListener('click', function f(e) {
  window.location.assign('/emergency.html');
  document.getElementById('emergencyButtonDiv').removeEventListener('click', f);
});

for (let i = 0; i < drugs.drugs.length; i++) {
  let drug = drugs.drugs[i];

  let container = document.createElement('DIV');
  let title = document.createElement('P');
  let photo = document.createElement('IMG');

  let searchQueries = [];
  
  for (let j = 0; j < drug.effects.length; j++) {
    searchQueries.push(drug.effects[j].replace(/\s/g, '-'));
  }
  for (let j = 0; j < drug.signs.length; j++) {
    searchQueries.push(drug.signs[j].replace(/\s/g, '-'));
  }
  for (let j = 0; j < drug.appearance.length; j++) {
    searchQueries.push(drug.appearance[j].replace(/\s/g, '-'));
  }
  
  
  container.classList.add(...searchQueries);
  container.classList.add(drug.name.replace(/\s/g, '-'), drug.fullName.replace(/\s/g, '-'));
  container.classList.add('article', 'drug');

  title.innerText = drug.name;
  title.classList.add('textButton', 'divTitle');
  title.addEventListener('click', () => {
    buildInfoDiv(drug);
  });

  photo.src = `/img/${drug.name.replace(/\s/g, '')}.png`;
  photo.classList.add('articleIMG');

  container.appendChild(title);
  container.appendChild(photo);

  document.getElementById('bodyDiv').appendChild(container);
}

function buildInfoDiv(drug) {
  var marginMultiplier;
  for (marginMultiplier = 0; marginMultiplier < drugs.drugs.length; marginMultiplier++) {
    if (drugs.drugs[marginMultiplier].name == drug.name) {
      break;
    }
  }
  
  if (document.getElementById('infoDiv')) document.getElementById('infoDiv').remove();
  
  let container = document.createElement('DIV');
  let closeButton = document.createElement('P');
  let name = document.createElement('P');
  let caption = document.createElement('P');
  let wikiLink = document.createElement('A');
  let effectsLabel = document.createElement('P');
  let effects = document.createElement('UL');
  let signsLabel = document.createElement('P');
  let signs = document.createElement('UL');
  let appearanceLabel = document.createElement('P');
  let appearances = document.createElement('UL');

  container.id = 'infoDiv';

  closeButton.innerHTML = '&times;';
  closeButton.id = 'closeButton';

  name.classList.add('divTitle');
  name.innerText = drug.name;

  caption.classList.add('divCaption');
  caption.innerHTML = `scientific name: <i>${drug.fullName}</i>`;

  wikiLink.innerText = `Wikipedia link to ${drug.name}.`;
  wikiLink.href = `https://en.wikipedia.org/wiki/${drug.name}`;
  wikiLink.target = '_blank';
  wikiLink.rel = 'noopener noreferrer';

  effectsLabel.innerText = `The side effects of taking ${drug.name} are as follows:`;
    
  for (let i = 0; i < drug.effects.length; i++) {
    let sideEffect = document.createElement('LI');
    sideEffect.innerText = drug.effects[i];
    effects.appendChild(sideEffect);
  }

  signsLabel.innerText = `The signs of an overdose of ${drug.name} are as follows:`;

  for (let i = 0; i < drug.signs.length; i++) {
    let sign = document.createElement('LI');
    sign.innerText = drug.signs[i];
    signs.appendChild(sign);
  }

  appearanceLabel.innerText = `The possible appearances of ${drug.name} are as follows:`;

  for (let i = 0; i < drug.appearance.length; i++) {
    let appearance = document.createElement('LI');
    appearance.innerText = drug.appearance[i];
    appearances.appendChild(appearance);
  }

  let infoNodes = [closeButton, name, caption, wikiLink, effectsLabel, effects, signsLabel, signs, appearanceLabel, appearances];

  for (let i = 0; i < infoNodes.length; i++) {
    container.appendChild(infoNodes[i]);
  }

  
  closeButton.addEventListener('click', () => {
    for (i = 0; i < document.getElementById('bodyDiv').childNodes.length; i++) {
      if (document.getElementById('bodyDiv').childNodes[i].id == 'infoDiv') {
        document.getElementById('bodyDiv').removeChild(document.getElementById('bodyDiv').childNodes[i]);
      }
    }
  });
  window.addEventListener('keyup', function f(e) {
    if (e.key == 'Escape') {
      for (i = 0; i < document.getElementById('bodyDiv').childNodes.length; i++) {
        if (document.getElementById('bodyDiv').childNodes[i].id == 'infoDiv') {
          document.getElementById('bodyDiv').removeChild(document.getElementById('bodyDiv').childNodes[i]);
        }
      }
      window.removeEventListener('keyup', f);
    }
  });

  document.getElementById('bodyDiv').insertBefore(container, document.getElementById('bodyDiv').childNodes[marginMultiplier])
}

let searchDrugs = document.getElementById('searchBar');
searchDrugs.addEventListener('keyup', search);

function search() {
  let regEx = /\s|\.|\'/g;
  let filter = searchDrugs.value.replace(regEx, '-').toLowerCase();
  drugNodes = document.getElementsByClassName('article');
  for (i = 0; i < drugNodes.length; i++) {
    let showDiv = false;
    for (let j = 0; j < drugNodes[i].classList.length; j++) {
      if (drugNodes[i].classList[j].toLowerCase().indexOf(filter) > -1) {
        showDiv = true;
        break;
      }
    }
    if (showDiv) {
      drugNodes[i].style.display = 'inline-block';
    } else{
      drugNodes[i].style.display = 'none';
    }
  }
}
