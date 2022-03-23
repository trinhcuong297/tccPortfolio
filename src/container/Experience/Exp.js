import React from 'react';
import './Exp.css'

function Exp(props) {
    return (
        <div id='scrollspyExp'>

            <div className='about-header'>
                <h1>My Experience</h1>
                <h5>How you can?</h5>
                <div className='about-header-endline'>.</div>
            </div>

            <div class="wrapper">
                <div class="center-line">
                    <a href="#" class="scroll-icon"><i ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shift-fill" viewBox="0 0 16 16">
                    <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z"/>
                    </svg></i></a>
                </div>
                <div class="row row-1">
                    <section>
                        <i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                        </svg></i>
                        <div class="details">
                        <span class="title">University</span>
                        <span>4th Oct 2021</span>
                        </div>
                        <p>Studied at Ha Noi University of Science and Technology.</p>
                    </section>
                </div>
                <div class="row row-2">
                    <section>
                        <i class="icon fa fa-star"></i>
                        <div class="details">
                        <span class="title">My Portfolio</span>
                        <span>28th Feb 2022</span>
                        </div>
                        <p>My project build with ReactJS and Google Firebase.</p>
                    </section>
                </div>
                {/* <div class="row row-1">
                    <section>
                        <i class="icon fa fa-rocket"></i>
                        <div class="details">
                        <span class="title">My Blog</span>
                        <span>3rd Apr 2022</span>
                        </div>
                        <p>.</p>
                        <div class="bottom">
                        
                        </div>
                    </section>
                </div> */}
    {/* <div class="row row-2">
      <section>
        <i class="icon fa fa-globe"></i>
        <div class="details">
          <span class="title">Title of Section 4</span>
          <span>4th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          
        </div>
      </section>
    </div> */}
  </div>

        </div>
    );
}

export default Exp;