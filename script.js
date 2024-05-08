// You can add JavaScript functionality here if needed
 // JavaScript to change the image on click
 const images = ["maaaaa.jpg", "image2.jpg", "image3.jpg"]; // Add your image paths here

 let index = 0;

 function changeImage() {
     index = (index + 1) % images.length;
     document.getElementById("mainImage").src = images[index];
 }

  // JavaScript to filter work samples
  function filterWork(category) {
    const samples = document.getElementsByClassName('project');
    for (let sample of samples) {
        if (category === 'all' || sample.classList.contains(category)) {
            sample.style.display = 'block';
        } else {
            sample.style.display = 'none';
        }
    }
}

// Dummy data for work samples
const workSamplesData = [
    { title: 'Web Project 1', category: 'web', description: 'Description of web project 1', image: 'web-project1.jpg' },
    { title: 'Mobile App Project 1', category: 'mobile', description: 'Description of mobile app project 1', image: 'mobile-project1.jpg' },
    // Add more samples as needed
];

// Dummy data for case studies
const caseStudiesData = [
    { title: 'Case Study 1', description: 'Description of case study 1' },
    { title: 'Case Study 2', description: 'Description of case study 2' },
    // Add more case studies as needed
];

// Populate work samples section
const workSamplesSection = document.getElementById('workSamples');
workSamplesData.forEach(sample => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project', sample.category);
    projectDiv.innerHTML = `
        <h3>${sample.title}</h3>
        <img src="${sample.image}" alt="${sample.title}">
        <p>${sample.description}</p>
    `;
    workSamplesSection.appendChild(projectDiv);
});

// Populate case studies section
const caseStudiesSection = document.getElementById('caseStudies');
caseStudiesData.forEach(caseStudy => {
    const caseStudyDiv = document.createElement('div');
    caseStudyDiv.innerHTML = `
        <h3>${caseStudy.title}</h3>
        <p>${caseStudy.description}</p>
    `;
    caseStudiesSection.appendChild(caseStudyDiv);
});
