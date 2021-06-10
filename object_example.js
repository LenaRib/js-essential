const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  empty: true,
  content: {},
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  whatInside: function (nastedObj) {
    if (nastedObj) this.empty = false;
    this.content = nastedObj;
  },
};

const book = {
  name: 'black swan',
  author: 'Nassim Taleb',
  cost: 14.99,
  publisher: 'CoLibri',
  pages: 712,
  percentRead: 56,
  opened: true,
  isOpened: function (status) {
    this.opened = status;
  },
};