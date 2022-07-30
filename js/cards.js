const ProgramDetails = [
  {
    title: 'Food',
    description:
      'A typical dish consists of injera accompanied by a spicy stew, which frequently includes beef, lamb, vegetables and various types of legumes, such as lentils.',
    icon: './images/lecture.svg',
  },
  {
    title: 'Music',
    description:
      'The music of the Ethiopian Highlands uses a fundamental modal system called qenet, of which there are four main modes: tezeta, bati, ambassel, and anchihoy',
    icon: './images/workshop.svg',
  },
  {
    title: 'Theater',
    description:
      ' theater in Ethiopia has become a very popular art type mainly in the capital Addis Ababa. theater in Ethiopia has become a very popular art type mainly in the capital Addis Ababa..',
    icon: './images/forum.svg',
  },
  {
    title: 'Dance',
    description:
      'Eskista (Amharic: እስክስታ) is a traditional Ethiopian cultural dance from the Amhara ethnic group performed by men, women, and children.',
    icon: './images/ignite.svg',
  },
  {
    title: 'Drinks',
    description:'Tella, Borde, Shamita, Korefe, Cheka, Tej, Ogol, Booka, and Keribo are among the popular alcoholic beverages in the country.',
    icon: './images/cc.svg',
  },
];

ProgramDetails.forEach((program) => {
  const card = `<div class='content-card'>
    <img src='${program.icon}' alt='${program.title}'>
    <h4 class='content-title'>${program.title}</h4>
    <p>
        ${program.description}
    </p>
  </div>`;
  document.querySelector('.content').innerHTML += card;
});


const Speakers = [
  {
    image: './images/food13.jpg',
    name: 'Tibs',
    designation: 'Always available:It is made from meat.',
    description:
      'It is made from meat.',
  },
  {
    image: './images/food21.jpg',
    name: 'Tegabino',
    designation: 'It may sometomes:Made from a powder',
    description:
      'Made from a bee powder.',
  },
  {
    image: './images/food15.jpg',
    name: 'Shiro',
    designation: 'Made from bee powder:it is  Most Ethiopians daily food',
    description: 'it is  Most Ethiopians daily food',
  },
  {
    image: './images/food18.png',
    name: 'Kitfo',
    designation: 'Made from meat:It is Gurage ethinic group traditional food',
    description:'It is Gurage ethinic group traditional food.',
  },
  {
    image: './images/food20.jpg',
    name: 'Doro wot',
    designation: 'Made from chicken: It is Amhara Ethinic group traditional food.',
    description:'It is Amhara Ethinic group traditional food.',
  },
  {
    image: './images/food19.jpg',
    name: 'Key wot',
    designation: 'meat:It is normal food made from meat',
    description:'It is normal food made from meat',
  },
];

Speakers.forEach((speaker) => {
  const card = `<div class='speaker-card'>
    <div class='speaker-img'>
      <img src='${speaker.image}' alt='speaker one' />
    </div>
    <div class='speaker-details'>
      <h3>${speaker.name}</h3>
      <em>${speaker.designation}</em>
      <p>${speaker.description}</p>
    </div>
  </div>`;
  document.querySelector('.speaker-list').innerHTML += card;
});
