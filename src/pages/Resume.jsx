export default function Blog({ imagePosition = 'right' }) {
  return (
    <div>
      {/* Resume section */}
      <div>
        <h2 style={{ paddingTop: '3.5rem' }}>Resume</h2>
        <a
          className="resume-link"
          style={{ paddingLeft: '4.4rem', fontSize: '22px' }}
          href="/E Foley Resume.pdf" // Ensure this path points to the correct PDF file
          download="E Foley Resume.pdf" // Specify the filename for the downloaded file
        >
          Click here to download
        </a>
        <br />
        <br />
      </div>

      {/* Technical Languages section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '25rem',
          marginTop: '0rem',
          width: '2000px',
          flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row', // Control text position
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
            <li className="tech-language" style={{ paddingLeft: '4rem' }}>Java</li>
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
