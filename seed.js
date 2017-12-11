const db = require('./server/db');
const {Students, Campuses} = require('./server/db/models');

const campuses = [
  { name: 'Pluto Academy', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg/450px-Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg', description: 'This academy is the best!' },
  { name: 'Saturn University', imageUrl: 'https://nssdc.gsfc.nasa.gov/planetary/banner/saturn.gif', description: 'This University rules!' },
  { name: 'Mars Planet', imageUrl: 'https://solarsystem.nasa.gov/images/planets/mars-globe-valles-marineris-enhanced_348.jpg', description: 'This Planet is the bomb!' },
  { name: 'Earth Institute', imageUrl: '', description: 'This Institute is awesome!' },
];

const students = [{
  firstName: 'Cody',
  lastName: 'Smith',
  email: 'cody@gmail.com',
  gpa: 2.5,
  campusId: 1
}, {
  firstName: 'Sam',
  lastName: 'Apple',
  email: 'sam@gmail.com',
  gpa: 3.6,
  campusId: 2
}, {
  firstName: 'Tina',
  lastName: 'Turner',
  email: 'tina@gmail.com',
  gpa: 0.3,
  campusId: 3
}, {
  firstName: 'Richard',
  lastName: 'Little',
  email: 'rich@gmail.com',
  gpa: 3.8,
  campusId: 4
}, {
  firstName: 'Lisa',
  lastName: 'Lampey',
  email: 'lisa@gmail.com',
  gpa: 3.0,
  campusId: 1
}, {
  firstName: 'Pat',
  lastName: 'Thompson',
  email: 'pat@gmail.com',
  gpa: 2.1,
  campusId: 2
}, {
  firstName: 'Henry',
  lastName: 'Best',
  email: 'henry@gmail.com',
  gpa: 2.5,
  campusId: 3
}, {
  firstName: 'Kyle',
  lastName: 'Apple',
  email: 'little@gmail.com',
  gpa: 2.5,
  campusId: 4
}, {
  firstName: 'Tony',
  lastName: 'Bananas',
  email: 'tony@gmail.com',
  gpa: 2.5,
  campusId: 1
}, {
  firstName: 'Samuel',
  lastName: 'Happy',
  email: 'happy@gmail.com',
  gpa: 2.5,
  campusId: 2
}, {
  firstName: 'Kevin',
  lastName: 'Peanut',
  email: 'peanut@gmail.com',
  gpa: 1.4,
  campusId: 3
}, {
  firstName: 'Lori',
  lastName: 'Cup',
  email: 'cup@gmail.com',
  gpa: 3.0,
  campusId: 4
}, {
  firstName: 'Liam',
  lastName: 'Neeson',
  email: 'liam@gmail.com',
  gpa: 2.0,
  campusId: 1
}, {
  firstName: 'Janet',
  lastName: 'Floor',
  email: 'floor@gmail.com',
  gpa: 4.0,
  campusId: 2
}, {
  firstName: 'Jack',
  lastName: 'Black',
  email: 'jack@gmail.com',
  gpa: 2.1,
  campusId: 3
}, {
  firstName: 'Katie',
  lastName: 'Pup',
  email: 'pup@gmail.com',
  gpa: 3.6,
  campusId: 4
}];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campuses.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Students.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
