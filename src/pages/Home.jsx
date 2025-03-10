import MeImage from '../assets/Me.jpg';

function MyComponent() {
  return (
    <div
      style={{
        display: 'flex', // Use Flexbox for centering
        justifyContent: 'center', // Center horizontally
      }}
    >
      {/* Image with inline styles */}
      <img
        src={MeImage}
        alt="A picture of me"
        style={{ width: '500px', height: 'auto' }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h2 style={{ padding: '1rem' }}>About Me</h2>
      <p style={{ padding: '1rem' }}>
        I am a passionate career-changer who transitioned from teaching to web development, bringing a unique blend of creativity, problem-solving, and a love for learning to the tech world. My years in education honed my ability to break down complex concepts and communicate effectively, skills that now empower me to craft intuitive, user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I thrive on building dynamic and responsive websites that make a meaningful impact. I’m driven by a commitment to continuous growth, collaboration, and leveraging technology to solve real-world problems.
      </p>
      {/* Render the MyComponent here */}
      <MyComponent />
    </div>
  );
}
