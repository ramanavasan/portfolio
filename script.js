const skills = [
  ["💻","HTML / CSS","Responsive UI"],
  ["⚡","JavaScript","Interactive web apps"],
  ["🐍","Python","Automation & AI"],
  ["☕","Java","OOP & applications"],
  ["🗄️","SQL / DBMS","Database development"],
  ["🤖","AI / ML","Machine learning"],
  ["🌐","Flask","Python web apps"],
  ["📊","Power BI","Data visualization"]
];

const projects = [
  ["01","Aptitude Practice Platform","Interactive aptitude practice application with questions, scoring and explanations.",["HTML","CSS","JavaScript"]],
  ["02","AI Portfolio Assistant","Portfolio website with an interactive assistant for answering questions about the developer.",["JavaScript","AI","UI/UX"]],
  ["03","Full-Stack Web App","Responsive application architecture connecting a frontend, backend and database.",["Node.js","Database","REST API"]]
];

const experiences = [
  ["Jul 2026 – Aug 2026","Deep Learning Intern","Scion Research and Development","Worked on deep-learning related tasks during a mandatory internship."],
  ["Aug 2025 – Oct 2025","Java Full Stack Intern","Imaggar Technologies","Worked with Java full-stack development concepts and practical application development."]
];

document.getElementById("skillsContainer").innerHTML = skills.map(s => `
  <div class="skill-card"><div class="skill-icon">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("");

document.getElementById("projectsContainer").innerHTML = projects.map(p => `
  <article class="project-card"><span class="project-number">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p>
  <div class="tags">${p[3].map(t => `<span class="tag">${t}</span>`).join("")}</div></article>`).join("");

document.getElementById("experienceContainer").innerHTML = experiences.map(e => `
  <article class="experience-item"><span class="date">${e[0]}</span><h3>${e[1]}</h3><strong>${e[2]}</strong><p>${e[3]}</p></article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const suggestions = ["What are your skills?","Tell me about your projects","What experience do you have?"];
const suggested = document.getElementById("suggestedQuestions");
suggested.innerHTML = suggestions.map(q => `<button>${q}</button>`).join("");

const input = document.getElementById("chatInput");
const send = document.getElementById("chatSend");
const messages = document.getElementById("chatMessages");

function botReply(text){
  const q = text.toLowerCase();
  if(q.includes("skill")) return "My skills include HTML, CSS, JavaScript, Python, Java, SQL/DBMS, Flask, AI/ML and Power BI.";
  if(q.includes("project")) return "My featured projects include an aptitude practice platform, an AI portfolio assistant and full-stack web applications.";
  if(q.includes("experience") || q.includes("intern")) return "I have internship experience in deep learning and Java full-stack development.";
  if(q.includes("education") || q.includes("study")) return "I am pursuing a B.E. in Computer Science and Engineering.";
  if(q.includes("hello") || q.includes("hi")) return "Hello! 👋 Ask me about my skills, projects, education or experience.";
  return "I can answer questions about my skills, projects, education and experience. Try one of the suggested questions above.";
}

function sendMessage(text=input.value.trim()){
  if(!text) return;
  messages.innerHTML += `<div class="message user-message"><p>${text.replace(/[<>]/g,"")}</p></div>`;
  input.value = "";
  setTimeout(() => {
    messages.innerHTML += `<div class="message bot-message"><p>${botReply(text)}</p></div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 300);
}
send.addEventListener("click", () => sendMessage());
input.addEventListener("keydown", e => { if(e.key === "Enter") sendMessage(); });
suggested.addEventListener("click", e => { if(e.target.tagName === "BUTTON") sendMessage(e.target.textContent); });

document.addEventListener("mousemove", e => {
  const visual = document.getElementById("heroVisual");
  if(!visual) return;
  const x = (window.innerWidth/2 - e.clientX) / 80;
  const y = (window.innerHeight/2 - e.clientY) / 80;
  visual.style.transform = `translate(${x}px,${y}px)`;
});
