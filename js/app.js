let courseList = [
  {
    code: 'COMP 1171',
    name: 'Web Development 1',
  },
  {
    code: 'COMP 1320',
    name: 'Introduction to Software Development',
  },
  {
    code: 'Math 1320',
    name: 'Mathematics for Computing',
  },
];

let theCourse = 'COMP 1171';
for (i = 0; i < courseList.length; i++) {
  if (courseList[i].code === theCourse) {
    console.log('Yes I am taking that course');
  } else {
    console.log(courseList[i].code + ' - ' + courseList[i].name);
  }
}
