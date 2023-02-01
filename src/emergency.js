function filterLocation(filter) {
  let hotlineNodes = document.getElementsByClassName('hotline');
  for (let i = 0; i < hotlineNodes.length; i++) {
    let showDiv = false;
    for (let j = 0; j < hotlineNodes[i].classList.length; j++) {
      if (hotlineNodes[i].classList[j].toLowerCase().indexOf(filter) > -1) {
        showDiv = true;
        break
      } else if(hotlineNodes[i].classList[j].toLowerCase().indexOf('national') > -1) {
        showDiv = true;
        break
      }
    }
    if (showDiv) {
      hotlineNodes[i].style.display = 'inline-block';
    } else{
      hotlineNodes[i].style.display = 'none';
    }
  }
}

var reverseGeocoder = new BDCReverseGeocode();
reverseGeocoder.getClientLocation(function(result) {
  if (!result.countryCode == 'US') {
    return
  }
  filterLocation(result.principalSubdivision);
});

let hotlines = {
  'list': [
    {'name': '911 (National Emergency Hotline)', 'number': 911, 'national': true, '247': true, 'features': ['Ongoing overdoses.', 'Crimes.']},
    {'name': 'National Poison Control Center', 'number': 18002221222, 'national': true, '247': true, 'features': ['Assessing the severity of overdoses.', 'Giving steps on how to help those in overdose situations.']},
    {'name': '24/7 Drug Abuse & Addiction Helpline', 'number': 18442890879, 'national': true, '247': true, 'features': ['Information on drug addiction.', 'Information on the treatment of drug addiction.']},
    {'name': 'Boys Town National Hotline', 'number': 18004483000, 'national': true, '247': true, 'features': ['Multi-issue crises.']},
    {'name': 'SAMHSA National Hotline', 'number': 18006624357, 'national': true, '247': true, 'features': ['Referrals and information on substance use disorders and mental health problems.']},
    {'name': 'Center for Substance Abuse', 'number': 18777264727, 'national': true, '247': true, 'features': ['Information about mental and substance use disorders']},
    {'name': 'Alabama Mental Health & Recovery', 'number': 18443071760, 'national': false, '247': true, 'location': 'Alabama', 'features': ['Referrals to Alabaman services to treat drug addiction.']},
    {'name': 'Alaska\'s 2-11 Drug Hotline', 'number': 211, 'national': false, '247': false, 'location': 'Alaska', 'hours': 'M-F 8:30-5', 'location': 'Alaska', 'features': ['General helpline for Alaska.']},
    {'name': 'Alaska\'s Mental Health Careline', 'number': 8772664357, 'national': false, '247': true, 'location': 'Alaska', 'features': ['Suicide prevention and crisis intervention.']},
    {'name': 'Arizona\'s 2-11 Drug Hotline', 'number': 211, 'national': false, '247': true, 'location': 'Arizona', 'features': ['General helpline for Alaska.']}
  ]
};

for (let i = 0; i < hotlines.list.length; i++) {
  let currentHotline = hotlines.list[i];

  let container = document.createElement('DIV');
  let title = document.createElement('P');
  let number = document.createElement('A');
  let infoList = document.createElement('UL');
  let alwaysOpen = document.createElement('LI');
  let location = document.createElement('LI');
  let featuresLabel = document.createElement('P');
  let featuresList = document.createElement('UL');
  
  container.classList.add(currentHotline.name.replace(/\s/g, '-'));
  container.classList.add('article', 'hotline');

  if (currentHotline['247']) {
    container.classList.add('24/7');
  };
  if (currentHotline['national']) {
    container.classList.add('national');
  } else {
    container.classList.add(currentHotline['location']);
  };

  title.innerText = currentHotline.name;
  title.classList.add('divTitle');

  number.innerText = `Call ${currentHotline.name}`;
  number.href = `tel:${currentHotline['number']}`;
  number.classList.add('callLink');

  alwaysOpen.innerText = currentHotline['247'] ? 'Always Open' : `Hours: ${currentHotline['hours']}`;
  location.innerText = currentHotline['national'] ? 'Location: National' : `Location: ${currentHotline['location']}`;

  infoList.appendChild(alwaysOpen);
  infoList.appendChild(location);

  featuresLabel.innerText = 'What they can help you with:';
  for (let j = 0; j < currentHotline['features'].length; j++) {
    let feature = document.createElement('LI');
    feature.innerText = currentHotline['features'][j];
    featuresList.appendChild(feature);
  }
  
  container.appendChild(title);
  container.appendChild(number);
  container.appendChild(featuresLabel);
  container.appendChild(featuresList);

  document.getElementById('bodyDiv').appendChild(container);
}

var searchHotlines = document.getElementById('searchBar');
searchHotlines.addEventListener('keyup', search);

function search() {
  let regEx = /\s|\.|\'/g;
  var filter = searchHotlines.value.replace(regEx, '-').toLowerCase();
  let hotlineNodes = document.getElementsByClassName('hotline');
  for (let i = 0; i < hotlineNodes.length; i++) {
    let showDiv = false;
    for (let j = 0; j < hotlineNodes[i].classList.length; j++) {
      if (hotlineNodes[i].classList[j].toLowerCase().indexOf(filter) > -1) {
        showDiv = true;
        break;
      }
    }
    if (showDiv) {
      hotlineNodes[i].style.display = 'inline-block';
    } else{
      hotlineNodes[i].style.display = 'none';
    }
  }
}