import React from "react";


function Portfolio() {
  return (
    <div className="card" style={{width: '100%'}}>
    {/*creating the title */}
    <div className="card-body">
      <h1 className="card-title"> My Portfolio:</h1>
      <hr className="my-4" /> 
      {/*My Projects */}
      <div style={{textAlign: 'center'}}>
        <br />
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>Group Project 1: Lyricity</strong><br /> (Lyric Generator)<br /></h3>
          <a className="link" href="https://github.com/mlcohan/team9">https://github.com/mlcohan/team9</a><br />
          <a className="link" href="https://mlcohan.github.io/team9">https://mlcohan.github.io/team9</a><br />
          <img src="./Assets/Images/lyricity.png" className="card-img app" alt="Lyricity App" />
          <br />
          <br />
        </div>
        <br />
        <hr className="my-4" />
        <br /> 
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>Lee's Reptile Emporium</strong><br />(Company Sales Page)<br /></h3>
          <a className="link" href="https://github.com/mlcohan/team2">https://github.com/mlcohan/team2</a><br />
          <a className="link" href="https://mlcohan.github.io/team2">https://mlcohan.github.io/team2</a><br />
          <img src="./Assets/Images/reptileEmporium.png" className="card-img app" alt="Team 2" />
          <br />
          <br />
        </div>
        <br />
        <hr className="my-4" />
        <br /> 
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>Work Day Scheduler</strong><br />(Scheduling App)<br /></h3>
          <a className="link" href="https://github.com/mlcohan/5.WorkDayScheduleMC">https://github.com/mlcohan/5.WorkDayScheduleMC</a><br />
          <a className="link" href="https://mlcohan.github.io/5.WorkDayScheduleMC">https://mlcohan.github.io/5.WorkDayScheduleMC</a><br />
          <img src="./Assets/Images/workDaySchedule.png" className="card-img app" alt="Work Day App" />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
    // <div>
    //   <h1>My Projects</h1>
    //   <div class="wrapper">

  

    //       <div className="col-4">
    //         <img
    //           className="projectimg"
    //           src="https://user-images.githubusercontent.com/38632935/107463775-b29b3980-6b13-11eb-9b84-fd25179457d8.png"
    //           alt="Lyricity"
    //         />
    //         <h3>
    //           <a href="https://mlcohan.github.io/team9/">Lyricity</a>
    //         </h3>
        
    //       </div>


    //       <div className="col-4">
    //         <img
    //           className="projectimg"
    //           src="https://user-images.githubusercontent.com/38632935/107463775-b29b3980-6b13-11eb-9b84-fd25179457d8.png"
    //           alt="Lyricity"
    //         />
    //         <h3>
    //           <a href="https://mlcohan.github.io/team9/">Lyricity</a>
    //         </h3>
        
    //       </div>


    //       <div className="col-4">
    //         <img
    //           className="projectimg col-4"
    //           src="https://user-images.githubusercontent.com/38632935/107463775-b29b3980-6b13-11eb-9b84-fd25179457d8.png"
    //           alt="Lyricity"
    //         />
    //         <h3>
    //           <a href="https://mlcohan.github.io/team9/">Lyricity</a>
    //         </h3>
        
    //       </div>

          
    //   </div>
    // </div>
  );
}

export default Portfolio;