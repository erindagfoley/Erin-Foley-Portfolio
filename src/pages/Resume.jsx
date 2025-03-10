import CodeImage from '../assets/close-up-of-programming-code-on-screen.jpg';

export default function Blog({ imagePosition = 'right' }) {
  return (
    <div>
      {/* Flex container for Resume section and image */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start', // Align items at the top
          gap: '2rem', // Space between Resume section and image
          marginTop: '2rem', // Add some top margin
        }}
      >
        {/* Resume section */}
        <div>
          <h2 style={{ paddingTop: '3.5rem' }}>Resume</h2>
          <a
            className="resume-link"
            style={{ paddingLeft: '4.4rem', fontSize: '22px' }}
            href="/Erin Foley Resume (soon to change).pdf"
            download
          >
            Click here to download
          </a>
          <br />
          <br />
        </div>

        {/* Image to the right of the Resume section */}
        <img
          src={CodeImage}
          alt="Programming code"
          style={{ width: '600px', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      {/* Technical Languages section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '25rem',
          width: '2000px',
          margin-top: '0rem',
          flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row', // Control image position
        }}
      >
        <div>
          <h2>Technical Languages</h2>
          <ul>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>JavaScript</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>TypeScript</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>SQL</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>NoSQL</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>HTML</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>CSS</li>
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>Python</li>
          </ul>
        </div>
      </div>

      {/* Applications section */}
      <h2>Applications</h2>
      <ul>
        <li className="application" style={{ paddingLeft: '4rem' }}>PostgreSQL</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>MongoDB</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>Node.js</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>Express.js</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>React.js</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>Sequelize</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>Mongoose</li>
        <li className="application" style={{ paddingLeft: '4rem' }}>Inquirer.js</li>
      </ul>
      <br />
    </div>
  );
}
