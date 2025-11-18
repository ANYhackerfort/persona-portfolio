import "./TopComponent.css";

const TopComponent = () => {
  return (
    <section className="top-section">
      {/* LEFT: IMAGE + DEGREE */}
      <div className="profile-left">
        <img src="./photo2.png" alt="Profile" className="profile-img" />

        <p className="profile-major">
          B.S. Computer Science & Statistics  
          <br />
          University of California, Santa Barbara
        </p>
      </div>

      {/* RIGHT: NAME + RESEARCH TEXT */}
      <div className="profile-right">
        <h1 className="profile-name">Matthew Zhang</h1>

        <div className="profile-interests">
          <h2>Research Interests</h2>
          <ul>
            <li>Real-Time Networking (DualPI2, L4S, Congestion Control)</li>
            <li>3D Computer Vision & Large-Scale Scene Reconstruction</li>
            <li>Full-Stack Architectures</li>
          </ul>
        </div>

        <p className="profile-desc">
          I am a research assistant in the MOMENT Lab, where I study 
          low-latency congestion control and evaluate L4S and DualPI2 through 
          controlled networking experiments.
        </p>

        <p className="profile-desc">
          In the Computer Vision Lab, I work on reconstructing large-scale 3D 
          environments, including a multi-view reconstruction of the UCSB campus.
        </p>

        <p className="profile-desc">
          I also collaborate with the Mayer Lab to develop remote psychology 
          experimentation tools and lead the development of real-time 3D interfaces 
          that allow students to control physical physics labs from the web.
        </p>

        <p className="profile-desc">
          <strong>Technical Stack:</strong> TypeScript · React · Django (ASGI/WSGI) · Redis · MySQL ·  
          Docker · Nginx · Three.js
        </p>
      </div>


    </section>
  );
};

export default TopComponent;
