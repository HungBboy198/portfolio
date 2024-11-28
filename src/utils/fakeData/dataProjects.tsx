import project1 from './images/project-1.jpg'
import project3 from './images/project-3.jpg'
import project4 from './images/project-4.jpg'
import project5 from './images/project-5.jpg'
import project6 from './images/project-6.jpg'
import project8 from './images/project-8.jpg'
import project9 from './images/project-9.jpg'
import project12 from './images/project-12.jpg'
import medpro1 from './images/medpro-1.png'
import medpro2 from './images/medpro-v2.png'
import medprobo from './images/medpro-bo.png'
import umc from './images/umc.png'
import cskh from './images/cskh.png'
import FL3 from './images/fl3.jpg'
import FL2 from './images/fl2.png'
import FL1 from './images/fl1.png'
import FL0 from './images/FL0.png'
import FL02 from './images/fl02.webp'
import FL01 from './images/fl01.png'

export const dataProjects = [
  // {
  //   id: '1',
  //   name: 'Rai Chat',
  //   isProject: 'Personal project',
  //   image: project7,
  //   teamSize: 1,
  //   technologies:
  //     'Reactjs hook, React-router-dom v6, React-hook-form, Redux-toolkit, Firebase.',
  //   suchAs:
  //     'Dark-light, message, send image message, notification, add friend, confirm/cancel friend, unfriend, search friend, singup/signin, update profile',
  //   video: '_JbfPfg1osU',
  //   link: 'https://rai-chat.vercel.app/'
  // },
  {
    id: 'md1',
    name: 'Medpro',
    isProject: 'Project while junioer at Medpro company',
    image: medpro1,
    teamSize: 5,
    technologies: 'NextJS, NX, Ant Design, Less, Redux-Toolkit, lodash...',
    suchAs:
      'RESTful API, NX Library, booking clinic at the facility, booking clinic doctor, medical consultation, test registration, health check package, home care, pay hospital fees, responsive mobile,...',
    // video: 'MVnYCse-WPw',
    link: 'https://medpro.vn',
    newPrj: true
  },
  {
    id: 'md2',
    name: 'Medpro Version 2',
    isProject: 'Project while junioer at Medpro company',
    image: medpro2,
    teamSize: 5,
    technologies: 'NextJS, NX, Ant Design, Less, Redux-Toolkit, lodash...',
    suchAs:
      'Update new version from Medpro V1, RESTful API, NX Library, booking clinic at the facility, booking clinic doctor, medical consultation, test registration, health check package, home care, pay hospital fees, Electronic bill, responsive mobile,...',
    // video: 'MVnYCse-WPw',
    link: 'https://medpro.vn',
    newPrj: true
  },
  {
    id: 'freelance',
    name: 'Freelancer projects',
    list: [
      {
        id: 'id1',
        name: 'Catizen',
        link: 'https://catizen-beta.vercel.app',
        image: FL0
      },
      {
        id: 'id2',
        name: 'Vendetta',
        link: 'https://vendetta-sooty.vercel.app',
        image: FL01
      },

      {
        id: 'id3',
        name: 'Lido',
        link: 'https://lido-ruddy.vercel.app',
        image: FL1
      },
      {
        id: 'id4',
        name: 'Sahara',
        link: 'https://sahara-five.vercel.app',
        image: FL2
      },
      {
        id: 'id5',
        name: 'Ventures',
        link: 'https://ventures-ten.vercel.app',
        image: FL3
      },
      {
        id: 'id6',
        name: 'Gelios',
        link: 'https://gelios-mu.vercel.app',
        image: FL02
      }
    ],
    newPrj: true
  },

  {
    id: 'md3',
    name: 'Medpro backoffice',
    isProject: 'Project while junioer at Medpro company',
    image: medprobo,
    teamSize: 5,
    technologies: 'ReactJs, NX, Ant Design, Less, Redux-Toolkit, lodash...',
    suchAs: 'Manager Medpro website, Medpro App, RESTful API...',
    // video: 'MVnYCse-WPw',
    // link: 'medpro.vn'
    newPrj: true
  },
  {
    id: 'md4',
    name: 'Medpro CSKH',
    isProject: 'Project while junioer at Medpro company',
    image: cskh,
    teamSize: 7,
    technologies: 'ReactJs, Ant Design, Less, Redux, lodash...',
    suchAs:
      'Book a clinic through the sales office, monitor medical records, RESTful API...',
    // video: 'MVnYCse-WPw',
    // link: 'medpro.vn'
    newPrj: true
  },
  {
    id: 'md5',
    name: 'Bệnh viện Đại học Y Dược TP.HCM',
    isProject: 'Project while junioer at Medpro company',
    image: umc,
    teamSize: 7,
    technologies: 'NextJS, Ant Design, Less',
    suchAs:
      'RESTful API, booking clinic at the facility, booking clinic doctor, medical consultation, Electronic bill, Responsive,...',
    // video: 'MVnYCse-WPw',
    link: 'https://umc.medpro.com.vn/',
    newPrj: true
  },
  {
    id: '2',
    name: 'Idochine',
    isProject: 'Project while interns at Comma Media company',
    image: project3,
    teamSize: 2,
    technologies: 'HTML/SCSS/JS, Bootstrap, JQuery, Gsap.',
    suchAs: 'Animations, Responsive, ...',
    video: 'UBtFfNU3SvY',
    link: 'https://ninjadev19.github.io/'
  },
  {
    id: '3',
    name: 'Vinasay',
    isProject: 'Project while fresher at Comma Media company',
    image: project1,
    teamSize: 4,
    technologies: 'HTML/CSS/JS, Bootstrap, JQuery, Gsap, Php.',
    suchAs: 'Animations, Responsive,...',
    video: 'MVnYCse-WPw'
  },
  {
    id: '4',
    name: 'Comma Media',
    isProject: 'Project while interns at Comma Media company',
    image: project5,
    teamSize: 3,
    technologies: 'HTML/SCSS/JS, Bootstrap, JQuery, Gsap.',
    suchAs: 'Animations, Responsive, ...',
    video: 'uImOAQrO1SI',
    link: 'https://ninjadev98.github.io/'
  },
  {
    id: '5',
    name: 'My Shopee',
    isProject: 'Personal project',
    image: project8,
    teamSize: 1,
    technologies:
      'Reactjs hook, Redux-toolkit, Material-ui, React-router-dom v6, Axios, EsLint, Prettier,',
    suchAs:
      'Singup/signin, cart, search products, get products, view products, filter products, update profile.',
    video: 'PGOHVitWs7U',
    link: 'https://my-shop-taupe.vercel.app/'
  },
  {
    id: '6',
    name: 'Watsons',
    isProject: 'Freelance project',
    image: project6,
    teamSize: 2,
    technologies: 'HTML/SCSS/JS, Bootstrap, JQuery, gsap, php.',
    suchAs:
      'Singup/signin, cart, search products, sale, filter products, animations, responsive.',
    video: 'SzTuzMKsaAs',
    link: 'https://watsons.vercel.app/'
  },
  // {
  //   id: '7',
  //   name: 'Rai company',
  //   isProject: 'Personal project',
  //   image: project2,
  //   teamSize: 1,
  //   technologies: 'HTML/SCSS/JS, Bootstrap, JQuery, Gsap.',
  //   suchAs: 'Animations, Responsive,...',
  //   video: 'C72X24zcla8',
  //   link: 'https://hungdzit2.github.io/'
  // },
  // {
  //   id: '8',
  //   name: 'Rai Shop',
  //   isProject: 'Personal project',
  //   image: project10,
  //   teamSize: 1,
  //   technologies:
  //     'Reactjs(React-hook, Reduxjs-toolkit, Material-ui, React-router-dom v6, Axios), NodeJs(Express, MongoDb).',
  //   suchAs:
  //     'Singup/signin, cart, search products, get products, view products, filter products, admin page.',
  //   video: 'oTVdao5TZys'
  // },
  {
    id: '9',
    name: 'Shop Design',
    isProject: 'Personal project',
    image: project4,
    teamSize: 1,
    technologies: ' HTML/SCSS/JS, Bootstrap, JQuery, Gsap.',
    suchAs: 'Animations, Responsive, ...',
    video: '4-QNe5W70Ec',
    link: 'https://ninjadev198.github.io/'
  },
  {
    id: '10',
    name: 'Rai Game Page',
    isProject: 'Personal project',
    image: project9,
    teamSize: 1,
    technologies: 'Bootstrap, JQuery, ReacJS, Gsap.',
    suchAs: 'Get data json, Animations, Responsive,...',
    video: 'MoCYTqvfCd8',
    link: 'https://hungdzit.github.io/'
  },
  // {
  //   id: '11',
  //   name: 'Movie WebApp',
  //   isProject: 'Project while learning ReactJs',
  //   image: project11,
  //   teamSize: 1,
  //   technologies: 'Reactjs, React-Router-Dom v6, Axios,...',
  //   suchAs: 'Search movie, Movie trailler, Movie List, Movie details.',
  //   video: 'q0Yyv5HYh4U',
  //   link: 'https://movie-web-app-rho.vercel.app/'
  // },
  {
    id: '12',
    name: 'Rai Coffee',
    isProject: 'Personal project',
    image: project12,
    teamSize: 1,
    technologies:
      'Reactjs hook, React-router-dom v6, React-hook-form, Redux-toolkit, Firebase.',
    suchAs:
      'Singup/signin, cart, search products, get products, filter products, table reservation, admin page.',
    video: 'dhn-DX6DikU'
  }
]
