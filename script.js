document.addEventListener('DOMContentLoaded', () => {
      const data = {
        "personalInformation": {
          "name": "Sourabh Soni",
          "email": null,
          "github": null,
          "linkedin": null,
          "portfolio": null
        },
        "education": [
          {
            "university": "Rajasthan Technical University",
            "degree": "Masters in Computer Application(MCA)",
            "location": "Kota, Rajasthan",
            "dates": "May 2023- June 2025",
            "cgpa": "8.34/10",
            "elective": "Artificial Intelligence and Cloud Computing"
          },
          {
            "university": "University of Rajasthan",
            "degree": "Bachelors in Computer Application(BCA)",
            "location": "Jaipur, Rajasthan",
            "dates": "May 2019- June 2022",
            "cgpa": "7.09/10"
          }
        ],
        "workHistory": [
          {
            "title": "Software Developer Intern",
            "company": "Vedhin Technologies",
            "location": "Jaipur, Rajasthan",
            "dates": "Mar 2024 - Oct 2024",
            "description": [
              "Designed and implemented RESTful APIs to support various business operations, ensuring seamless integration with frontend systems.",
              "Developed responsive and dynamic user interfaces using React.js and Material-UI, enhancing the overall user experience.",
              "Collaborated with cross-functional teams to maintain comprehensive technical documentation and adhere to best coding practices through regular code reviews.",
              "Assisted in deploying web applications to production, gaining experience in DevOps workflows and CI/CD pipelines."
            ]
          },
          {
            "title": "Python Developer Intern",
            "company": "NeuroNexus Innovations",
            "location": "Remote",
            "dates": "Dec 2023 - Feb 2024",
            "description": [
              "Improved code reliability and functionality through rigorous unit testing, debugging, and performance optimization.",
              "Designed and built user-centric, accessible interfaces, resulting in a significant boost in user engagement and satisfaction.",
              "Streamlined project collaboration using Git for version control, enhancing team productivity and reducing merge conflicts.",
              "Contributed to the automation of repetitive tasks, saving development time and improving workflow efficiency.",
              "Conducted exploratory research on integrating Python frameworks with real-world applications, gaining valuable hands-on experience."
            ]
          }
        ],
        "projects": [
          {
            "name": "MakeThumb.com - AI-Powered Automation Tool to transform (resume → portfolio website)",
            "technologies": [
              "Node.js",
              "React",
              "AWS",
              "Gemini AI",
              "MongoDB",
              "Express.js"
            ],
            "description": [
              "Developed a PDF-to-JSON parser using Gemini Flash 1.5, reducing data parsing errors by 90%.",
              "Set up a reliable infrastructure with AWS S3 for storage and Render for hosting, achieving 99.9% uptime.",
              "Automated the process of converting resumes into portfolio websites, increasing efficiency by 70% compared to manual workflows.",
              "Implemented user-facing features such as automated email notifications and progress tracking for enhanced user experience.",
              "Conducted thorough testing to minimize bugs, reducing post-deployment issues by 95%."
            ]
          },
          {
            "name": "ChatWithThumb - Real-time Chat Application",
            "technologies": [
              "Socket.IO",
              "Node.js",
              "React",
              "MongoDB",
              "Express.js"
            ],
            "description": [
              "Built a real-time messaging platform with Socket.IO, ensuring smooth bidirectional communication.",
              "Optimized WebSocket implementation, improving chat reliability and scalability by 30%.",
              "Added features like typing indicators and read receipts, enhancing user interactivity by 40%.",
              "Ensured uninterrupted service during peak usage by implementing server load balancing strategies."
            ]
          },
          {
            "name": "GitHorizon",
            "technologies": [
              "vscode api",
              "JavaScript"
            ],
            "description": [
              "Created a VS Code extension to visualize Git commit history directly within the editor.",
              "Integrated seamlessly with VS Code's interface for a smooth user experience.",
              "Processed and displayed over 1,000+ commits from various repositories during testing.",
              "Introduced timeline-based visualizations to simplify version history tracking, improving clarity by 50%.",
              "Designed interactive tooltips and navigation aids to enhance developer productivity"
            ]
          }
        ],
        "achievements": [
          {
            "name": "Python Certification",
            "details": "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"
          },
          {
            "name": "Java Certification",
            "details": "It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc."
          },
          {
            "name": "Excel for Finance (CFI)",
            "details": "Gained expertise in financial modeling techniques, streamlining workflows, and reducing errors in complex calculations by 30%. Applied skills to build data-driven solutions for backend analytics and optimization"
          },
          {
            "name": "Analyzing and Visualizing using R Programming (7 Days Workshop)",
            "details": "Gained hands-on experience in data cleaning, transformation, and ETL processes. Utilized R for effective data visualization, aiding in informed decision-making and backend data analysis for web applications."
          }
        ],
        "technicalSkills": {
          "languages": [
            "C++",
            "JavaScript",
            "Python",
            "Java"
          ],
          "courses": []
        }
      };

      // Technical Skills
      const techSkillsContainer = document.getElementById('techSkills');
      data.technicalSkills.languages.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.classList.add('skill-tag');
        skillTag.textContent = skill;
        techSkillsContainer.appendChild(skillTag);
      });

      // Education
      const educationContainer = document.getElementById('educationContainer');
      data.education.forEach(edu => {
        const eduCard = document.createElement('div');
        eduCard.classList.add('experience-card');
        eduCard.innerHTML = `
          <h3 class="experience-title">${edu.degree}</h3>
          <p>${edu.university}</p>
          <p>${edu.location} | ${edu.dates}</p>
          <p>CGPA: ${edu.cgpa}</p>
        `;
        educationContainer.appendChild(eduCard);
      });

      // Work Experience
      const workExperienceContainer = document.getElementById('workExperienceContainer');
      data.workHistory.forEach(work => {
        const workCard = document.createElement('div');
        workCard.classList.add('experience-card');
        workCard.innerHTML = `
          <h3 class="experience-title">${work.title} at ${work.company}</h3>
          <p>${work.location} | ${work.dates}</p>
          <ul>
            ${work.description.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        `;
        workExperienceContainer.appendChild(workCard);
      });

      // Projects
      const projectsContainer = document.getElementById('projectsContainer');
      data.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
          <h3 class="project-title">${project.name}</h3>
          <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
          <ul>
            ${project.description.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        `;
        projectsContainer.appendChild(projectCard);
      });

      // Achievements
      const achievementsContainer = document.getElementById('achievementsContainer');
      data.achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.classList.add('achievement-card');
        achievementCard.innerHTML = `
          <h3>${achievement.name}</h3>
          <p>${achievement.details}</p>
        `;
        achievementsContainer.appendChild(achievementCard);
      });

      // Initialize AOS
      AOS.init();
    });