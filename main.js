class Speakers {
  constructor(img, name, title, description) {
    this.img = img;
    this.name = name;
    this.title = title;
    this.description = description;
  }
}

const container = document.getElementById('feature-wrapper');
const speakerList = document.createElement('ul');
const reatSpeaker = document.createElement('div');
const addMore = document.createElement('div');
const addBtn = document.createElement('button');
const seeLess = document.createElement('div');
const seeLessBtn = document.createElement('button');
addBtn.innerText = 'See More';
addMore.appendChild(addBtn);
addBtn.classList.add('add-more');
seeLessBtn.innerText = 'See Less';
seeLess.appendChild(seeLessBtn);
seeLessBtn.classList.add('see-less');
reatSpeaker.classList.add('rest-spearker');
speakerList.classList.add('speaker-list');
container.appendChild(speakerList);
container.appendChild(reatSpeaker);

const speaker1 = new Speakers(
  'images/speaker-1.jpg',
  'John Dave',
  'Web Developer at Amazon',
  'Dave has worked for 15 years in Amzaon we have invited him to tell us his jouerny.',
);
const speaker2 = new Speakers(
  'images/speaker-2.png',
  'Robert Lwis',
  'Back end Developer at Google',
  'He has worked for 12 years in goolge.He will tell us how join google company in the future.',
);
const speaker3 = new Speakers(
  'images/speaker-3.png',
  'Heaven Newton',
  'AI Developer at facebook',
  'We have invited Heaven to explaind how to integrate AI with development.',
);
const speaker4 = new Speakers(
  'images/speaker-4.png',
  'Hewan Joseph',
  'Front End Deveoper in Micoverse',
  'HWe have invited her to tell more about Microverse',
);
const speaker5 = new Speakers(
  'images/speaker-5.png',
  'Mary Ruben',
  'Professional JavaScript and React developer',
  'has been a developer for 7 years and has been invited to speak on conferences all over the world.',
);
const speaker6 = new Speakers(
  'images/speaker-6.png',
  'Julie May',
  'Professional Full stack Software Developer',
  'has been a developer for 7 years and has been invited to speak on conferences all over the world.',
);

const speakerArr = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];

window.addEventListener('load', () => {
  speakerList.innerHTML = '';
  const fullSpeaker = () => {
    speakerList.innerHTML = '';
    for (let i = 0; i < speakerArr.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('speaker-item');
      const img = document.createElement('img');
      img.setAttribute('src', speakerArr[i].img);
      const name = document.createElement('h4');
      name.textContent = speakerArr[i].name;
      const italics = document.createElement('i');
      italics.textContent = speakerArr[i].title;
      const title = document.createElement('p');
      title.classList.add('colored-text');
      title.appendChild(italics);
      const description = document.createElement('p');
      description.textContent = speakerArr[i].description;
      const div1 = document.createElement('div');
      const hr = document.createElement('hr');
      title.appendChild(hr);
      const div2 = document.createElement('div');
      div1.appendChild(img);
      div2.appendChild(name);
      div2.appendChild(title);
      div2.appendChild(description);
      list.appendChild(div1);
      list.appendChild(div2);
      speakerList.appendChild(list);
    }
  };

  fullSpeaker();

  const renderSpeaker = () => {
    speakerList.innerHTML = '';
    const firstHalfSpeaker = speakerArr.slice(0, 3);
    for (let i = 0; i < firstHalfSpeaker.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('speaker-item');
      const img = document.createElement('img');
      img.setAttribute('src', firstHalfSpeaker[i].img);
      const name = document.createElement('h4');
      name.textContent = firstHalfSpeaker[i].name;
      const italics = document.createElement('i');
      italics.textContent = firstHalfSpeaker[i].title;
      const title = document.createElement('p');
      title.classList.add('colored-text');
      title.appendChild(italics);
      const description = document.createElement('p');
      description.textContent = firstHalfSpeaker[i].description;
      const div1 = document.createElement('div');
      const hr = document.createElement('hr');
      title.appendChild(hr);
      const div2 = document.createElement('div');
      div1.appendChild(img);
      div2.appendChild(name);
      div2.appendChild(title);
      div2.appendChild(description);
      list.appendChild(div1);
      list.appendChild(div2);
      speakerList.appendChild(list);
    }
    speakerList.appendChild(addMore);
  };

  const renderRestSpeaker = () => {
    addMore.addEventListener('click', () => {
      const secondHalfSpeaker = speakerArr.slice(3);
      for (let i = 0; i < secondHalfSpeaker.length; i += 1) {
        const list2 = document.createElement('li');
        list2.classList.add('speaker-item');
        list2.classList.add('list2');
        const img = document.createElement('img');
        img.setAttribute('src', secondHalfSpeaker[i].img);
        const name = document.createElement('h4');
        name.textContent = secondHalfSpeaker[i].name;
        const italics = document.createElement('i');
        italics.textContent = secondHalfSpeaker[i].title;
        const title = document.createElement('p');
        title.classList.add('colored-text');
        title.appendChild(italics);
        const description = document.createElement('p');
        description.textContent = secondHalfSpeaker[i].description;
        const div1 = document.createElement('div');
        const hr = document.createElement('hr');
        title.appendChild(hr);
        const div2 = document.createElement('div');
        div1.appendChild(img);
        div2.appendChild(name);
        div2.appendChild(title);
        div2.appendChild(description);
        list2.appendChild(div1);
        list2.appendChild(div2);
        speakerList.appendChild(list2);
        speakerList.appendChild(seeLess);
      }

      addMore.style.display = 'none';

      seeLess.addEventListener('click', () => {
        speakerList.innerHTML = '';
        renderSpeaker();
        addMore.style.display = 'flex';
      });
    });
  };

  const smallDevice = window.matchMedia('(min-width: 900px)');

  function handleDeviceChange(e) {
    if (e.matches) {
      fullSpeaker();
    } else {
      speakerList.innerHTML = '';
      renderSpeaker();
      renderRestSpeaker();
    }
  }

  smallDevice.addListener(handleDeviceChange);
  // Run it initially
  handleDeviceChange(smallDevice);
});
