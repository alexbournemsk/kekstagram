"use strict"

//Массивы для генерации имён
const NAMES = [
  'Фома',
  'Энгельберт',
  'Ингеборга',
  'Кристоф',
  'Кшиштоф',
  'Энджи',
  'Бо',
  'Маккензи',
  'Кржмелик'
];
            
const SURNAMES = [
  'Киняев',
  'Драго',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Нионго',
  'Лукас',
  'Ирвинг'
];

const MESSAGE_TEMPLATES = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',

]

//Генератор целых чисел в заданном диапазоне
const getRandomNumber = (lower,upper) => {
  upper = Math.floor(upper);
  lower = Math.ceil(lower);
  return Math.floor(Math.random() * (upper - lower + 1) + lower); 
}          


//Генератор имён
const createName = () => {
  return NAMES[getRandomNumber(0,NAMES.length-1)] + ' ' + SURNAMES[getRandomNumber(0,SURNAMES.length-1)]
}

//Генератор текста для комментов
const createMessage = () => {
  return MESSAGE_TEMPLATES[getRandomNumber(0,MESSAGE_TEMPLATES.length-1)];
}
 
//Генератор комментов
const createComment = (i) => {
    return {
    id: i,
    avatar: 'img/avatar-' + getRandomNumber(1,6) + '.svg',
    message: [createMessage()],
    name: createName()
  }
} 

//Генерируем массив со случайными комментами
const comments = new Array(25).fill(null).map((e,i)=>createComment(i+1));


// Описание фотографии, опубликованной пользователем.
const createPostDescription = function (i) {
  return {
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: '',
    likes: getRandomNumber(15,200),
    comments: comments[i] 
    
  } 
}

// Генерируем массив с постами и комментами к ним
const similarPosts = new Array(25).fill(null).map((e,i) => createPostDescription(i));


