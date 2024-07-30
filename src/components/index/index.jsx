import "./index.css";
import myimage from "../../img/Myavatar.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro_left">
        <div className="left_wrapper">
          <h2 className="name_intro">Hello, My name is</h2>
          <h1 className="main_name">Chibuike Chijioke</h1>
          <div className="skill_title">
            <div className="skill_wrapper">
              <div>
                <p className="skill_items">Software Developer</p>
              </div>
              <div>
                <p className="skill_items">Frontend Developer</p>
              </div>
              <div>
                <p className="skill_items">Backend Developer</p>
              </div>
              <div>
                <p className="skill_items">Fullstack Engineer</p>
              </div>
              <div>
                <p className="skill_items">Web Developer</p>
              </div>
              <div className="skill_items">
                <p>TypeScript | JavaScript</p>
              </div>
              <div className="skill_items">
                <p>NodeJS | NestJS</p>
              </div>
            </div>
          </div>
          <div className="skill_info">
            <p className="skill_desc">
              With every line of code - - Powered by Figma and VS Code, I commit
              to build immersive and beautiful web applications through
              user-centric designs and robust backend development...
            </p>
          </div>
        </div>
        {/* <svg
					width="75"
					height="75"
					viewBox="0 0 75 75"
					fill="none"
					stroke="black"
					className="intro_scroll"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="scroll">
						<path
							id="Vector"
							d="M40.5 15L34.5 9L28.5 15"
							stroke-width="3"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							id="Vector_2"
							d="M28.5 24L34.5 30L40.5 24"
							stroke-width="3"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<g id="Group">
							<path
								id="Vector_3"
								d="M9 37.5H60"
								stroke-width="3"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<path
							id="Vector_4"
							d="M34.5 27V9"
							stroke-width="2.9895"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<g id="Group_2">
							<path
								id="Vector_5"
								d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
								stroke-width="3"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
					</g>
				</svg> */}
      </div>
      <div className="intro_right">
        <div className="img_container"></div>
        {/* <div className="intro_img">
          <img src={myimage} alt="" />
        </div> */}
        <img src={myimage} alt="" className="intro_img" />
      </div>
    </div>
  );
};

export default Intro;
