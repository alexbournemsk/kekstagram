import { getRandomNumber, getRandomArrayElement } from "./util.js";

//Все данные для фото, сгенерированные в этом модуле добавим в этот массив и экспортируем в модуль preview
let photos = [];


/*НАСТРОЙКИ*/
const numberOfPhotos = 25; //Сколько генерировать фотографий

//Количество лайков 
const likes = {
  MIN: 15,      
  MAX: 200,     
}


/*МАССИВЫ ДЛЯ ГЕНЕРАЦИИ */
const NAMES = [
  'Фома',
  'Энгельберт',
  'Ингеборга',
  'Кристоф',
  'Кшиштоф',
  'Энджи',
  'Бо',
  'Маккензи',
  'Кржмелик',
];

const SURNAMES = [
  'Киняев',
  'Драго',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Нионго',
  'Лукас',
  'Ирвинг',
  'Фой',
];

//Описание фогтографии
const descriptionPhoto = [
  'Зацените фото!',
  'Привет, друзья',
  'Хороший день!',
  'Old but gold!',
  'Люблю вас!'
]

//Массив для генерации текста комментов
const MESSAGE_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]


/*ФУНКЦИИ ДЛЯ ГЕНЕРАЦИИ ДАННЫХ*/

// Генерация комментов и описания коментатора
const addComments = function () {
  let comments = []
  for (let i = 0; i < getRandomNumber(1, 15); i++) {
    comments.push(
      {
        id: getRandomNumber(1, 999),
        avatar: `img/avatar-${i}.svg`,
        message: MESSAGE_TEMPLATES[getRandomNumber(0, 5)],
        name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES)
      }
    )
  }
  return comments
}

//Главная функция: описание фотографии, опубликованной пользователем с комментами

const createPhotos = function () {
  for (let i = 0; i < numberOfPhotos; i++) {
    photos.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: descriptionPhoto[getRandomNumber(0, 4)],
      likes: getRandomNumber(15, 200),
      comments: addComments()
    })
  }
}

createPhotos();

console.log('Data is loaded');
export { photos };