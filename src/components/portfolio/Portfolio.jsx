import React from 'react';
import './portfolio.css';
import IMG1 from '../../asset/IMG1.jpg'
import IMG2 from '../../asset/IMG2.jpg'
import IMG3 from '../../asset/IMG3.png'
import IMG4 from '../../asset/IMG4.jpg'
import IMG5 from '../../asset/IMG5.jpg'
import IMG6 from '../../asset/IMG6.jpg'

const data = [
  {
id: 1,
image: IMG1,
title: 'Eclipse - Figma dashboard UI kit for data design web apps',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/21345679-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
id: 2,
image: IMG2,
title: 'Orion UI kit – data visualization and charts templates for Figma',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20894932-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
},
{
id: 3,
image: IMG3,
title: 'Eclipse - Figma dashboard UI kit for data design web apps',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20894693-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
id: 4,
image: IMG4,
title: 'Orion UI kit – data visualization and charts templates for Figma',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20894779-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
},
{
id: 5,
image: IMG5,
title: 'Orion UI kit – data visualization and charts templates for Figma',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20790416-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
},
{
id: 6,
image: IMG6,
title: 'Orion UI kit – data visualization and charts templates for Figma',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20895495-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
},
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cat">
                <a href={github} className='btn'>github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;