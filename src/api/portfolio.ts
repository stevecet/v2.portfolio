import api from './api';

// Description: Get about section data
// Endpoint: GET /api/portfolio/about
// Request: {}
// Response: { description: string[], skills: string[], profileImage: string }
export const getAboutData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        description: [
          "Hello! I'm John, a software engineer based in San Francisco who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.",
          "Shortly after graduating from UC Berkeley in 2018, I joined the engineering team at Airbnb where I work on a wide variety of interesting and meaningful projects on a daily basis.",
          "Here are a few technologies I've been working with recently:"
        ],
        skills: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React",
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Docker",
          "GraphQL",
          "Next.js",
          "Express.js"
        ],
        profileImage: "/profile.jpg"
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/about');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get experience data
// Endpoint: GET /api/portfolio/experience
// Request: {}
// Response: { experiences: Array<{ _id: string, company: string, position: string, location: string, startDate: string, endDate: string, current: boolean, description: string[], technologies: string[], website?: string }> }
export const getExperienceData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        experiences: [
          {
            _id: "1",
            company: "Airbnb",
            position: "Senior Software Engineer",
            location: "San Francisco, CA",
            startDate: "Jan 2022",
            endDate: "",
            current: true,
            description: [
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
              "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
            ],
            technologies: ["JavaScript", "React", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
            website: "https://airbnb.com"
          },
          {
            _id: "2",
            company: "Upstatement",
            position: "Software Engineer",
            location: "Boston, MA",
            startDate: "May 2018",
            endDate: "Dec 2021",
            current: false,
            description: [
              "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
              "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
              "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ],
            technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Sass", "WordPress"],
            website: "https://upstatement.com"
          },
          {
            _id: "3",
            company: "Apple",
            position: "Software Engineer Intern",
            location: "Cupertino, CA",
            startDate: "Jun 2017",
            endDate: "Aug 2017",
            current: false,
            description: [
              "Developed a full-stack web application using React and Node.js to track and visualize UX research",
              "Worked with designers, engineers, and the research team to iterate on the UX research tools",
              "Communicated with multi-disciplinary teams of engineers, designers, and researchers on a daily basis"
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "D3.js"],
            website: "https://apple.com"
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/experience');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get projects data
// Endpoint: GET /api/portfolio/projects
// Request: {}
// Response: { projects: Array<{ _id: string, title: string, description: string, technologies: string[], category: string, image: string, liveUrl?: string, githubUrl?: string, featured: boolean }> }
export const getProjectsData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            _id: "1",
            title: "Spotify Profile",
            description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            technologies: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
            category: "Web App",
            image: "/project1.jpg",
            liveUrl: "https://spotify-profile.herokuapp.com/",
            githubUrl: "https://github.com/johndoe/spotify-profile",
            featured: true
          },
          {
            _id: "2",
            title: "Halcyon Theme",
            description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
            category: "Theme",
            image: "/project2.jpg",
            liveUrl: "https://halcyon-theme.netlify.com/",
            githubUrl: "https://github.com/johndoe/halcyon-theme",
            featured: true
          },
          {
            _id: "3",
            title: "Build a Spotify Connected App",
            description: "Having struggled with understanding how the Spotify Web API works, I decided to create a comprehensive tutorial for fellow developers looking to integrate Spotify's Web API into their applications.",
            technologies: ["React", "Express", "Spotify API", "Heroku"],
            category: "Tutorial",
            image: "/project3.jpg",
            liveUrl: "https://medium.com/@johndoe/build-a-spotify-connected-app",
            githubUrl: "https://github.com/johndoe/spotify-tutorial",
            featured: false
          },
          {
            _id: "4",
            title: "OctoProfile",
            description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
            technologies: ["Next.js", "Chart.js", "GitHub API", "Vercel"],
            category: "Web App",
            image: "/project4.jpg",
            liveUrl: "https://octoprofile.vercel.app/",
            githubUrl: "https://github.com/johndoe/octoprofile",
            featured: true
          },
          {
            _id: "5",
            title: "Google Keep Clone",
            description: "A simple Google Keep clone built with React and Firebase. Features include creating, editing, deleting, and searching notes with real-time synchronization.",
            technologies: ["React", "Firebase", "Material-UI", "Context API"],
            category: "Web App",
            image: "/project5.jpg",
            liveUrl: "https://keep-clone-react.netlify.com/",
            githubUrl: "https://github.com/johndoe/google-keep-clone",
            featured: false
          },
          {
            _id: "6",
            title: "Forkify Recipe App",
            description: "A recipe application with custom recipe uploads and bookmarking functionality. Built with vanilla JavaScript and modern ES6+ features, bundled with Parcel.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Parcel", "MVC Architecture"],
            category: "Web App",
            image: "/project6.jpg",
            liveUrl: "https://forkify-recipe-app.netlify.com/",
            githubUrl: "https://github.com/johndoe/forkify-recipe-app",
            featured: false
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/projects');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Send contact message
// Endpoint: POST /api/portfolio/contact
// Request: { name: string, email: string, message: string }
// Response: { success: boolean, message: string }
export const sendContactMessage = (data: { name: string; email: string; message: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully' });
    }, 1000);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post('/api/portfolio/contact', data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}