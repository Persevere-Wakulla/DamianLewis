const jobPostings = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Ruby'],
    tools: ['Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];


const languages = []
const tools = []
const level = []
let filterJobPostings = jobPostings;

const reqTools = jobPostings.map(function (toolsNeeded) {
  tools.push(toolsNeeded)
  return tools
})

let displayArr = []


// console.log(reqTools);


let container = document.querySelector('.container');
const section = document.createElement('section')
const createDiv = document.createElement('div');

const handleFilter = (event) => {
  let filters = []
  displayArr = []
  console.dir(event.target.textContent);
  // console.dir('hello')
  filters.push(event.target.textContent)
  console.log(filters)

  filterJobPostings.filter((job) => {
    if (filters.includes(job.role)) {
      displayArr.push(job)
      console.log(displayArr);
    }
  });
  filterJobPostings.filter((job) => {
    if (filters.includes(job.level)) {
      displayArr.push(job)
      console.log(displayArr);
    }
  });
  filterJobPostings.filter((job) => {
    for (let i = 0; i < job.tools.length; i++) {
      if (filters.includes(job.tools[i])) {
        displayArr.push(job)
      }
    }
    for (let j = 0; j < job.languages.length; j++) {
      if (filters.includes(job.languages[j])) {
        displayArr.push(job)

      }
    }

  })

  container.replaceChildren([])
  displayArr.forEach((job) => {
    createCard(job);
  });


  // filters to appear on top when clicked

  let filterDiv = `
  <div class="filter-container">
  <div class="btns">
  <button type="button" class="filtered-btns">${filters[0]}<img src="./images/icon-remove.svg" id="cross-btn" alt=""></button>
  </div>
  <div>
  <button type="button" id="clear-btn" onclick="handleClear()">Clear</button>
  </div>
  </div>
  `
  createDiv.innerHTML = filterDiv
  container.prepend(createDiv);

};
const handleClear = () => {
  createDiv.innerHTML =  ""
}

const createCard = job => {
  const div1 = document.createElement('div');


  let html = `
  <section id="${job.id}" class="card">

    <!-- Item Start -->
    <div class="avatar">
      <img src="${job.logo}" id="logo-img" alt="photoSnap">
    </div>
    <div class="flex">
      <p class="companies">${job.company}`
  if (job.new === true) {
    html += `
        <span class="new">NEW!</span>`
  }
  if (job.featured === true) {
    html += `
          <span class="featured">FEATURED</span>`
  }
  html += `
          </p>

    </div>

    <h3 class="titles">${job.position}</h3>
    <ul class="flex-ul">
      <li>${job.postedAt}</li>
      <li>${job.contract}</li>
      <li>${job.location}</li>
    </ul>
    <hr>
    <div class="req-languages">

   <!-- Role -->
     <span onclick="handleFilter(event)" id="role" class="requirments">${job.role}</span>
     <!-- Level -->
      <span onclick="handleFilter(event)" id="level" class="requirments">${job.level}</span>

    `
  job.languages.forEach(lang => {
    html += `<span onclick="handleFilter(event)" id="language" class="requirments">${lang}</span>`
  })
  job.tools.forEach(tool => {
    html += `<span onclick="handleFilter(event)" id="tools" class="requirments">${tool}</span>`
  })


  html += `
      </div>
    </section>
`
  div1.innerHTML = html;

  // console.dir(container);
  container.append(div1);
}

const allJobs = () => {
  filterJobPostings.forEach((job) => {
    createCard(job);
  })

}

allJobs();

const displayJobs = () => {

}