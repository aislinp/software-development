/*
{'name': 'Name', 'fullName': 'scientific name', 'effects': ['side', 'effects'], 'signs': ['signs', 'of', 'overdose'], 'appearance': ['what', 'it', 'looks', 'like']},
{'name': 'Name', 'fullName': 'scientific name', 'effects': ['side', 'effects'], 'signs': ['signs', 'of', 'overdose'], 'appearance': ['what', 'it', 'looks', 'like'], 'category': 'category'}
*/

let drugs = {
  'drugs': [
    {'name': 'LSD', 'fullName': 'lysergic acid diethylamide', 'effects': ['changes in perception', 'changes in mood', 'changes in thought', 'hallucinations', 'space distortion', 'time distortion'], 'signs': ['euphoria', 'pupil dilation', 'visual hallucinations', 'auditory hallucinations', 'confusion', 'trouble concentrating', 'headaches', 'nausea', 'fast heartbeat', 'irregular heartbeat', 'increased body temperature', 'fast breathing', 'vomiting', 'facial flushes', 'sweating', 'chills'], 'appearance': ['tabs', 'liquid', 'gelatin sheets', 'capsules'], 'category': 'psychedelic'},
    {'name': 'Magic Mushrooms', 'fullName': 'psilocybin', 'effects': ['euphoria', 'altered visuals', 'time distortion', 'mild nausea', 'sweating', 'auditory hallucinations', 'visual hallucinations', 'space distortion'], 'signs': ['anxiety', 'paranoia', 'delusions'], 'appearance': ['mushrooms with a cap and a long stem', 'gray', 'brown', 'white', 'tan', 'white powder', 'dried mushrooms'], 'category': 'psychedelic'},
    {'name': 'DMT', 'fullName': 'N,N-Dimethyltryptamine', 'effects': ['rush', 'euphoria', 'changes in mood', 'increased sensitivity', 'fast heartbeat', 'increased blood pressure', 'dilated pupils', 'visual hallucinations', 'dissociation'], 'signs': ['anxiety', 'delusions', 'psychosis', 'hallucinations', 'paranoia'], 'appearance': ['white powder', 'crystalline'], 'category': 'psychedelic'},
    {'name': 'Mescaline', 'fullName': '3,4,5-trimethoxyphenethylamine', 'effects': ['euphoria', 'increased energy', 'space distortion', 'time distortion', 'trouble concentrating', 'trouble thinking', 'increased blood pressure', 'fast heartbeat', 'intense nausea', 'vomiting'], 'signs': ['overdoses are rare.'], 'appearance': ['powder', 'tablet', 'capsule', 'liquid'], 'category': 'psychedelic'},
    {'name': 'NBOMes', 'fullName': '25-NB', 'effects': ['visual hallucinations', 'auditory hallucinations', 'euphoria', 'sweating', 'confusion', 'memory issues', 'increased blood pressure', 'fast heartbeat', 'paranoia'], 'signs': ['intense confusion', 'agitation', 'seizure', 'kidney failure', 'nausea', 'vomiting', 'overheating', 'coma'], 'appearance': ['blotters', 'liquid', 'powder', 'pill'], 'category': 'psychedelic'},
    {'name': 'Salvia', 'fullName': 'Salvia divinorum', 'effects': ['anxiety', 'amnesia', 'hallucinations', 'sedation', 'low energy', 'pain relief', 'confusion', 'delusion', 'visual distortions', 'laughter', 'time distortion'], 'signs': ['overdoses are rare.'], 'appearance': ['fresh leaves', 'dried leaves'], 'category': 'psychedelic'},
    {'name': 'Ayahuasca', 'fullName': 'Banisteriopsis caapi', 'effects': ['nausea', 'vomiting', 'euphoria', 'increased blood pressure', 'fast heartbeat', 'visual hallucinations', 'auditory hallucinations', 'anxiety'], 'signs': ['Cannot overdose'], 'appearance': ['reddish-brown brewed drink'], 'category': 'psychedelic'},
    {'name': 'Ketamine', 'fullName': 'Ketamine', 'effects': ['euphoria', 'relaxation', 'auditory hallucinations', 'visual hallucinations', 'fast heartbeat', 'increased blood pressure',  'anxiety' , 'vomiting'], 'signs': ['paralyzation', 'convulsions'], 'appearance': ['clear liquid', 'off white powder'], 'category': 'dissociative'},
    {'name': 'MXE', 'fullName': 'Methoxetamine', 'effects': ['dissociation', 'hallucinations', 'euphoria', 'slurring or difficulty speaking', 'disorientation'], 'signs': ['paralyzation', 'convulsions'], 'appearance': ['off-white powder', 'beige powder', 'yellow powder', 'liquid'], 'category': 'dissociative'},
    {'name': 'Marijuana', 'fullName': 'Cannabis', 'effects': ['relaxation', 'euphoria', 'increased appetite', 'slower reflexes', 'bloodshot eyes', 'fast heartbeat'], 'signs': ['chest pain', 'rapid heartbeat', 'nausea', 'vomiting', 'auditory hallucinations', 'visual hallucinations', 'trouble breathing'], 'appearance': ['blunts', 'dried leaves', 'edibles'], 'category': 'cannabinoids'},
    {'name': 'BHO', 'fullName': 'Butane hash oil', 'effects': ['relaxation', 'euphoria', 'laughter', 'excitement', 'increased appetite'], 'signs': ['dissociation', 'anxiety', 'panic', 'confusion', 'paranoia'], 'appearance': ['transparent golden', 'light brown', 'tan', 'black'], 'category': 'cannabinoids'},
    {'name': 'CBD', 'fullName': 'Cannabidiol', 'effects': ['diarrhea', 'drowsiness', 'fatigue', 'dry mouth', 'vomiting'], 'signs': ['overdoses are rare'], 'appearance': ['colorless liquid'], 'category': 'cannabinoids'},
    {'name': 'Synthetic CBD', 'fullName': 'Synthetic cannabinoids', 'effects': ['relaxation', 'euphoria', 'loss of coordination', 'fast heartbeat', 'irregular heartbeat', 'racing thoughts', 'agitation', 'anxiety', 'paranoia', 'psychosis', 'aggressive behavior', ' violent behaviour', 'chest pain', 'raised blood pressure'], 'signs': ['chest pain', 'delusional behaviour', 'vomiting', 'breathing difficulties', 'overheating', 'breakdown of muscle tissue', 'acute kidney injury', 'seizures', 'stroke', 'death'], 'appearance': ['powders', 'herbs'], 'category': 'cannabinoids'},
    {'name': 'Laughing Gas', 'fullName': 'Nitrous Oxide', 'effects': ['euphoria', 'numbness of the body', 'sedation', 'giddiness', 'uncontrolled laughter', 'uncoordinated movements'], 'signs': ['blurred vision', 'confusion', 'dizziness', 'sweating', 'fatigue', 'sudden death'], 'appearance': ['colorless gas', 'metal container'], 'category': 'dissociative'},
    {'name': 'OxyContin', 'fullName': 'Oxycodone', 'effects': ['pain relief', 'dizziness', 'tiredness', 'confusion', 'difficulty concentrating', 'euphoria', 'restlessness', 'stiff muscles', 'constipation', 'dry mouth', 'stomachache', 'nausea', 'difficulty urinating', 'slow pulse', 'sweating', 'flushing', 'itching'], 'signs': ['chest pain or discomfort', 'small pupils', 'decreased awareness or responsiveness', 'extreme drowsiness and loss of consciousness', 'no muscle tone or movement', 'slow or irregular heartbeat'], 'appearance': ['capsule', 'liquid', 'tablet'], 'category': 'opioids'},
    {'name': 'Opium', 'fullName': 'Lachryma papaveris', 'effects': ['euphoria', 'relaxation', 'slow breathing', 'slow heartbeat', 'impaired reflexes', 'temporary constipation', 'loss of appetite'], 'signs': ['very slow breathing', 'loss of consciousness', 'tiny pupils'], 'appearance': ['liquid', 'powder'], 'category': 'opioids'},
    {'name': 'Methadone', 'fullName': 'Methadone', 'effects': ['sweating', 'difficulty urinating', 'loss of appetite', 'nausea', 'vomiting', 'abdominal cramps', 'constipation', 'aching muscles', 'irregular periods', 'rashes', 'itching', 'fatigue', 'confusion'], 'signs': ['slow breathing', 'slack muscles', 'seizures', 'drowsiness', 'unconsciousness', 'cold skin', 'blueish skin', 'coma'], 'appearance': ['pills', 'liquid'], 'category': 'opioids'},
    {'name': 'Cocaine', 'fullName': 'Cocaine', 'effects': ['loss of appetite', 'dilated pupils', 'increase in body temperature', 'fast heartbeat', 'euphoria'], 'signs': ['dizziness', 'hallucinations', 'nausea', 'vomiting', 'tremors', 'chest pain'], 'appearance': ['powder', 'white', 'light pink', 'rock-like', 'beige-like'], 'category': 'stimulant'},
    {'name': 'Heroin', 'fullName': 'Diacetylmorphine', 'effects': ['euphoria', 'pain relief', 'relaxation', 'drowsiness', 'clumsiness', 'confusion', 'dissociation', 'slurred speech', 'slow speech', 'slow breathing', 'slow heartbeat', 'dry mouth', 'tiny pupils', 'reduced appetite', 'vomiting'], 'signs': ['trouble concentrating', 'extreme drowsiness', 'falling asleep', 'tiny pupils', 'difficulty urinating', 'itchiness', 'low blood pressure', 'irregular heartbeat', 'cold skin', 'slow breathing', 'hypothermia', 'death'], 'appearance': ['fine white powder', 'off-white granules', 'light brown rock'], 'category': 'opioids'},
    {'name': 'Fentanyl', 'fullName': 'Fetanyl', 'effects': ['euphoria', 'pain relief', 'nausea', 'vomiting', 'constipation', 'diarrhea', 'reduced appetite', 'indigestion', 'drowsiness', 'confusion', 'weakness', 'fatigue', 'dizziness', 'headache', 'slurred speech', 'impaired balance', 'slow heartbeat', 'decreased blood pressure', 'rash'], 'signs': ['chest pain', 'slow breathing', 'seizure', 'passing out', 'coma', 'death'], 'appearance': ['liquid', 'skin patches', 'sprays', 'lozenges'], 'category': 'opioids'},
    {'name': 'Buprenorphine', 'fullName': 'Buprenorphine', 'effects': ['constipation', 'headache', 'sweating', 'drowsiness', 'loss of appetite', 'nausea', 'vomiting', 'abdominal pain', 'skin rashes', 'tooth decay'], 'signs': ['overdoses are rare.'], 'appearance': ['tablets', 'film'], 'category': 'opioids'},
    {'name': 'Codeine', 'fullName': '3-Methylmorphine', 'effects': ['dizziness', 'tiredness', 'confusion', 'difficulty concentrating', 'euphoria', 'restlessness', 'blurred vision', 'dry mouth', 'sweating', 'rash', 'decreased blood pressure', 'slow heartbeat', 'stomach-ache', 'nausea', 'vomiting', 'constipation', 'difficulty urinating'], 'signs': ['severe constipation', 'agitation', 'apathy', 'very slow breathing', 'hallucinations', 'seizures', 'coma', 'death'], 'appearance': ['tablets', 'capsules', 'powders', 'liquid'], 'category': 'opioids'},
    {'name': 'Alcohol', 'fullName': 'Ethanol', 'effects': ['relaxation', 'trouble concentrating', 'slower reflexes', 'increased confidence'], 'signs': ['confusion', 'blurred vision', 'clumsiness', 'memory loss', 'nausea', 'vomiting', 'passing out', 'coma', 'death'], 'appearance': ['liquid'], 'category': 'depressants'},
    {'name': 'Benzo', 'fullName': 'Benzodiazepine', 'effects': ['calmness', 'reduced stress', 'reduced anxiety', 'euphoria', 'confusion', 'dry mouth', 'drowsiness', 'feelings of isolation', 'headache', 'nausea', 'diarrhea', 'constipation', 'blurred vision', 'impaired coordination', 'dizziness', 'tremors', 'impaired thinking', 'memory loss', 'slurred speech', 'stuttering', 'double vision', 'depression'], 'signs': ['excitability', 'mood swings', 'aggression', 'sedation', 'sleep', 'slow breathing', 'unconsciousness', 'coma', 'death'], 'appearance': ['pills', 'tablets'], 'category': 'depressants'},
    {'name': 'Nicotine', 'fullName': 'Nicotine ', 'effects': ['abdominal pain', 'constipation', 'dizziness', 'drowsiness', 'increased appetite', 'nervousness', 'fast heartbeat'], 'signs': ['chest pain', 'confusion', 'severe headache', 'pounding heartbeat', 'slurred speech', 'weakness on one side of the body'], 'appearance': ['cigarettes', 'vape', 'patches', 'gum'], 'category': 'stimulant'}
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
  var nodeLocation;
  for (nodeLocation = 0; nodeLocation < drugs.drugs.length; nodeLocation++) {
    if (drugs.drugs[nodeLocation].name == drug.name) {
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
  wikiLink.href = `https://en.wikipedia.org/wiki/${drug.fullName}`;
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

  document.getElementById('bodyDiv').insertBefore(container, document.getElementById('bodyDiv').childNodes[nodeLocation])
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
