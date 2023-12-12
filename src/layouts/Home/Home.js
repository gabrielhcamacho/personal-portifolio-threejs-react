import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import loginPage from 'assets/login.jpg';
import dashboard from 'assets/dashboard.jpg';
import kript from 'assets/kript.jpg';
import elpis from 'assets/elpis.jpg';
import ProfileImage from 'assets/profile-gabriel.jpg';
//import homeApp from 'assets/home.jpeg';
//import homeAppLarge from 'assets/home-large.jpeg';
// import sliceTextureLarge from 'assets/slice-app-large.jpg';
// import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceTexture from 'assets/slice-app.jpg';
//import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
//import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import byra from 'assets/byra/clubsfeed-dark.jpg';
import carHome from 'assets/nexuscar/car-home.jpg';
import singUp from 'assets/nexuscar/sign-up.jpg';
import intercityLogin from 'assets/intercity/login.jpg';
import intercityExplore from 'assets/intercity/explore.jpg';

const disciplines = ['Designer', 'Prototyper', 'Mobile', 'Web', 'Beack-end', 'Full-Stack'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer + Designer"
        description="Projects portfolio of Gabriel Camacho — a developer working on web & mobile
          apps with a focus on experience design, and practicality."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Coding the future of tech education"
        description="Platform that changes the way to learn, share and network in the tech world"
        buttonText="View project"
        buttonLink="/projects/byra"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [byra, byra],
              placeholder: byra,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Gym progress tracking"
        description="Design and development for a gym workout tracking app built in React Native"
        buttonText="View code"
        buttonLink="https://github.com/gabrielhcamacho/ignitegym"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [loginPage, loginPage],
              placeholder: loginPage,
            },
            {
              srcSet: [gamestackTexture2Large, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Coding the future of business marketing"
        description="Platform for products tendance analysis, ads and leads management"
        buttonText="View website"
        buttonLink="https://tendenceb.com"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [dashboard, dashboard],
              placeholder: dashboard,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Sending cryptos in a easy funny way"
        description="Designing a platform to transfer Ethereum using React and blockchain development"
        buttonText="View website"
        buttonLink="https://kript.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [kript, kript],
              placeholder: kript,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Car sales and deals tracking"
        description="Crafting and building a React Native app for seamless car sales experience"
        buttonText="View code"
        buttonLink="https://github.com/gabrielhcamacho/nexuscar"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [carHome, carHome],
              placeholder: carHome,
            },
            {
              srcSet: [singUp, singUp],
              placeholder: singUp,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Creative art in tech"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View website"
        buttonLink="https://elpis-website.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'website image',
          textures: [
            {
              srcSet: [elpis, elpis],
              placeholder: elpis,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        alternate
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Redefining leisure"
        description="Unwind and Explore: designed a Figma app for discovering leisure activities in your city"
        buttonText="View design"
        buttonLink="https://dribbble.com/GabrielCamacho"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [intercityLogin, intercityLogin],
              placeholder: intercityLogin,
            },
            {
              srcSet: [intercityExplore, intercityExplore],
              placeholder: intercityExplore,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
        profileImg={ProfileImage}
      />
      <Footer />
    </div>
  );
};
