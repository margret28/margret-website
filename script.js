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
    { title: 'Web Project 1', category: 'web', description: 'A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.' }
    ,{ title: 'Mobile App Project 1', category: 'mobile', description: 'A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.' },
    // Add more samples as needed
]; 

// Dummy data for case studies
const caseStudiesData = [
    { title: 'Case Study 1', description: 'Description of case study 1' },
    { title: 'Case Study 2', description: 'Description of case study 2' },
    // Add more case studies as needed
];



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
