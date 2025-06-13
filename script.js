const lists = {
  easy: [
    'Stuffed animal', 'Toy car', 'Something red', 'A shirt with a number on it', 'A VHS tape',
    'Jewelry that sparkles', 'A cooking utensil', 'A baseball cap', 'A sticker or patch', 'A candle',
    'A spoon', 'A vinyl record', 'A cartoon character', 'A keychain', 'Something that makes noise',
    'A plastic animal', 'A blue bottle', 'A toy robot', 'A jigsaw puzzle', 'A magnet'
  ],
  medium: [
    'A rotary phone', 'An item with a U.S. flag', 'A sign with a price written in marker', 'Something that glows',
    'An item made of leather', 'A cassette player', 'A pocket knife', 'A salt shaker', 'A painting of an animal',
    'A coin older than 1990', 'A unicorn', 'A spoon with a name on it', 'A fake flower', 'A mug with a pun',
    'A lava lamp', 'A lantern', 'A small statue', 'A sports trophy', 'Something steampunk', 'A dragon'
  ],
  hard: [
    'A toy from the 80s', 'A foreign license plate', 'A hand-painted sign', 'A chess piece', 'A pin-up poster',
    'A harmonica', 'A souvenir from another state', 'A Polaroid camera', 'An Elvis item', 'A neon sign',
    'A wooden duck', 'A marionette', 'A record player', 'A pocket watch', 'A flip phone',
    'A sheriff’s badge', 'A PEZ dispenser', 'A Betty Boop figure', 'A toolbox older than you', 'A propeller'
  ],
  veryhard: [
    'A signed baseball', 'A war medal', 'A vintage typewriter', 'A sword', 'A working Game Boy',
    'A rotary dial TV', 'A taxidermy animal', 'An accordion', 'A sealed board game from the 90s',
    'A pinball machine', 'A mug from a defunct brand', 'A fossil', 'A space-themed lunchbox',
    'A yo-yo with branding', 'A vintage fan', 'A sock monkey', 'A celebrity cutout',
    'A comic book from the 70s', 'A View-Master', 'A carnival glass bowl'
  ]
};

function startHunt(level) {
  document.getElementById('difficulty-selection').style.display = 'none';
  document.getElementById('hunt').style.display = 'block';

  const titleMap = {
    easy: 'Easy Hunt',
    medium: 'Medium Hunt',
    hard: 'Hard Hunt',
    veryhard: 'Very Hard Hunt'
  };

  document.getElementById('hunt-title').textContent = titleMap[level];
  const list = document.getElementById('hunt-list');
  list.innerHTML = '';

  lists[level].forEach((item, index) => {
    const li = document.createElement('li');
    const id = `${level}-${index}`;
    const checked = localStorage.getItem(id) === 'true';

    li.innerHTML = `<label><input type="checkbox" id="${id}" ${checked ? 'checked' : ''}/> ${item}</label>`;
    list.appendChild(li);

    li.querySelector('input').addEventListener('change', (e) => {
      localStorage.setItem(id, e.target.checked);
    });
  });
}
