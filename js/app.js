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

// Step 1: make an array based off what is currently in html
// Format { code: ”COMP 1171 - Web Development I”, date: ”Fall 2020”}.

const createCourseArray = () => {
  let codes = document.getElementsByClassName('course-code');
  let courseArr = [];
  for (let i = 0; i < codes.length; i++) {
    courseArr.push({
      code: codes[i].text,
      date: document.getElementsByClassName('course-date')[i].innerHTML,
    });
  }
  return courseArr;
};

const findCourse = (courseArr) => {
  // Step 2.1: prompt the user with a pop-up for a course number
  let userInput;
  do {
    userInput = prompt('Please enter a valid 4-digit course code:');
  } while (
    // Step 2.2: Prompt again if invalid input (input is not 4 digit number)
    isNaN(userInput) ||
    userInput.length !== 4
  );
  console.log(userInput);

  // Step 2.3: Compare input to created Course Array
  let isMatch = false;
  for (let i = 0; i < courseList.length; i++) {
    // Step 2.4: If exists, change background-color to green.
    if (courseArr[i].code.includes(userInput)) {
      console.log('Course matches!');
      let match = document.getElementsByClassName('course-card')[i];
      match.classList.add('green');
      isMatch = true;
      break;
    } else {
      console.log('This is not a match.');
      // isMatch = false;
    }
  }
  // If doesn't exist, add new listing
  // (Course code = user input; course desc = N / A; course date = Fall 2020)
  if (!isMatch) {
    const list = document.querySelector('.course-listing');
    let newCourse = document.createElement('li');
    newCourse.innerHTML = `<div class="course-link-term">
                Course Code: ${userInput}
                <p class="course-date">Fall 2020</p>
              </div>
              <div class="course-desc">
                Description: N/A
              </div>`;
    list.appendChild(newCourse);
  }
};
