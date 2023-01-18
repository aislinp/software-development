const hotlines = {
  'list': [
    {'name': '911 (National Emergency Hotline)', 'number': 911, 'national': true, '247': true},
    {'name': 'National Poison Control Center', 'number': 18002221222, 'national': true, '247': true},
    {'name': '24/7 Drug Abuse & Addiction Helpline', 'number': 18442890879, 'national': true, '247': true},
    {'name': 'Boys Town National Hotline', 'number': 18004483000, 'national': true, '247': true},
    {'name': 'SAMHSA National Hotline', 'number': 18006624357, 'national': true, '247': true},
    {'name': 'Cocaine Addiction Treatment', 'number': 18005599503, 'national': true, '247': true},
    {'name': 'Center for Substance Abuse', 'number': 18777264727, 'national': true, '247': true},
    {'name': 'Alabama Mental Health & Recovery', 'number': 18443071760, 'national': false, '247': true, 'location': 'Alabama'},
    {'name': 'Alaska\'s 2-11 Drug Hotline', 'number': 211, 'national': false, '247': false, 'location': 'Alaska', 'hours': 'M-F 8:30-5', 'location': 'Alaska'},
    {'name': 'Alaska\'s Mental Health Careline', 'number': 8772664357, 'national': false, '247': true, 'location': 'Alaska'},
    {'name': 'Arizona\'s 2-11 Drug Hotline', 'number': 211, 'national': false, '247': true, 'location': 'Arizona'}
  ]
}

for (let i = 0; i < hotlines.list.length; i++) {
  let currentHotline = hotlines.list[i];

  let container = document.createElement('DIV');
  let title = document.createElement('P');
  let number = document.createElement('A');
  let features = document.createElement('UL');
  let alwaysOpen = document.createElement('LI');
  let location = document.createElement('LI');
  
  container.classList.add(currentHotline.name.replace(/\s/g, '-'));
  container.classList.add('article', 'hotline');

  if (currentHotline['247']) {
    container.classList.add('24/7');
  }
  if (currentHotline['national']) {
    container.classList.add('national');
  }

  title.innerText = currentHotline.name;
  title.classList.add('divTitle');

  number.innerText = `Call ${currentHotline.name}`;
  number.href = `tel:${currentHotline['number']}`;
  number.classList.add('callLink');

  alwaysOpen.innerText = currentHotline['247'] ? 'Always Open' : `Hours: ${currentHotline['hours']}`;
  location.innerText = currentHotline['national'] ? 'Location: National' : `Location: ${currentHotline['location']}`;

  features.appendChild(alwaysOpen);
  features.appendChild(location);
  
  container.appendChild(title);
  container.appendChild(number);
  container.appendChild(features);

  document.getElementById('bodyDiv').appendChild(container);
}

var searchHotlines = document.getElementById('searchBar');
searchHotlines.addEventListener('keyup', search);

function search() {
	let regEx = /\s|\.|\'/g
	var filter = searchHotlines.value.replace(regEx, '-').toLowerCase();
	hotlineNodes = document.getElementsByClassName('hotline');
	for (i = 0; i < hotlineNodes.length; i++) {
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
