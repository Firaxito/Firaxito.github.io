const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const numberOfElements = 5;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const vsbAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false,
  duration: 600,
  loopComplete: (a) => console.log('end'),
  //update: () => console.log(staggersAnimation.progress)
})
.add({
  translateX: 0,
  backgroundColor: 'rgb(0, 164, 153)',
  translateY: anime.stagger(12, {from: 'center', direction: 'reverse'}),
  rotate: 0,
  delay: anime.stagger(50, {from: 'center', grid: [1, 5]}),
})
.add({
  translateX: anime.stagger('0.6rem', {grid: [5, 5], from: 'center', axis: 'x'}),
  //translateY: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'y'}),
  delay: anime.stagger(200, {grid: [5, 5], from: 'center', direction: 'reverse'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: 1,
  rotate: 360,
  duration: 1000,
  delay: 30000,
})
.add({
  translateX: 0,
  backgroundColor: 'rgb(240, 35, 65)',
  duration: 1000,
})
.add({
  translateX: 0,
  backgroundColor: 'rgb(0, 164, 153)',
  duration: 1000
});


vsbAnimation.play();