
import './Home.css'
import flower from '../Assets/Asset 1.svg'
import star from '../Assets/Asset 2.svg'
import bigFlower from '../Assets/Asset 4.svg'
function Home() {
  const skills = [
    { type: 'HTML', detail: 'The HyperText Markup Language.' },
    { type: 'CSS', detail: 'Cascading Style Sheets is a style sheet language.' },
    { type: 'JavaScript', detail: 'Incredible programming language.' },
    { type: 'Vue', detail: 'Amazing JS framework, easy to learn and use to build apps.' },
    { type: 'React', detail: 'Powerful framework for JavaScript, can be used to build big and complicated apps.' },
    { type: 'PHP', detail: 'PHP is a general-purpose scripting language geared towards web development.' },
    { type: 'MySQL', detail: 'MySQL is an open-source relational database management system.' },
    { type: 'Photoshop', detail: 'Adobe Photoshop is a raster graphics editor.' },
    { type: 'Illustrator', detail: 'Adobe Illustrator is a vector graphics editor and design program.' },
  ]
  const skillsRendered = skills.map((x, i) => {
    x.id = i
    return x
  })
  // console.log(skillsRendered)
  return (
    <div>
      <section className="hi">
        <img src={flower} alt="a rotating flower icon" id="flower1" />
        <h2>Hi,<br />my name is</h2>
        <h1>Youfan Huang</h1>
        <img src={star} alt="a rotating star icon" id="star" />
        <p>I am a Frontend developer and a former graphic designer.</p>
      </section>
      <section className="myself">
        <h2>Shortly<br />About<br />Myself</h2>
        <p>
          I majored in graphic design at college, but I found myself more interested in building apps rather than designing them,<br />
          So I signed up for a bootcamp to learn frontend development, and started web development after graduated.<br />
          I am a lifelong learner and have a passionate interest in Computer Science, and technologies about web.
        </p>
        <img src={flower} alt="a rotating icon" id="flower2" />
      </section>
      <section className="skills">
        <p className="marquee">
          <span>My Skills - My Skills -&nbsp;</span>
        </p>
        <p className="marquee marquee2">
          <span>My Skills - My Skills -&nbsp;</span>
        </p>
        <section className="boxes">
          {skillsRendered.map(x => (
            <div className="box" key={x.id}>
              <h3>{x.type}</h3>
              <p>{x.detail}</p>
              {/* <div className="line"></div> */}
            </div>
          ))}
        </section>
      </section>
      <div className="dotted"></div>
      <section className="contact">

        <h2>#OPENTOWORK</h2>
        <div className="middle">
          <img src={bigFlower} alt="a big flower icon" className="big-flower" />
        </div>
        <div className="left">
          <img src={bigFlower} alt="a big flower icon" className="big-flower-left" />

        </div>
        <div className="right">
          <img src={bigFlower} alt="a big flower icon" className="big-flower-right" />

        </div>
        <section className="links">
          <div>
            <h3>Social</h3>
            <a href="https://www.linkedin.com/in/youfan-huang/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Dylan-HYF" target="_blank">Github</a>
          </div>
          <div className="bottom">
            <h3>Contact</h3>
            <a href="mailto:hyf.dylan@gmail.com">Gmail</a>
            <a href="tel:+12899365086" style={{ textDecoration: 'none' }}>2899365086</a>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Home
