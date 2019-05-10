import React from "react";
import "./timeline.css";
import Header from "../header";

const Timeline = () => {
  return (
    <React.Fragment>
      <div className="containers">
        <Header />
      </div>

      <div class="timeline">
        <div class="timeline-top-circle" />
        <div
          style={{ paddingTop: "120px" }}
          class="timeline-container-left left romania"
        >
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2010 - 2012</h2>
              <h3 class="concerts-header">Romania</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span>
                <span> Massive Attack </span>
                <span>&bull;</span>
                <span> Red Hot Chili Peppers </span>
              </div>
              <div class="concerts-container">
                <p>
                  <span style={{ paddingLeft: 0 }} class="fourstars-concert">
                    The Cranberries
                  </span>
                  <span class="double-bull">&bull;</span>
                  <span class="fourstars-concert">Massive Attack</span>
                  <span class="double-bull">&bull;</span>
                  <span class="fourstars-concert">Red Hot Chili Peppers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-right right rw2013">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2013</h2>
              <h3 class="concerts-header">Rock Werchter</h3>
              <div class="concerts-image">
                <span> Balthazar </span>
                <span>&bull;</span>
                <span> Biffy Clyro </span>
                <span>&bull;</span>
                <span> The National </span>
                <span>&bull;</span>
                <span> Sigur Ros </span>
                <span>&bull;</span>
                <span> Netsky </span>
                <span>&bull;</span>
                <span> The Script</span>
                <span>&bull;</span> <span> John Legend </span>
                <span>&bull;</span> <span> Kings of Leon </span>
                <span>&bull;</span> <span> Blur </span> <span>&bull;</span>
                <span> Tame Impala </span>
                <span>&bull;</span> <span> Nick Cave </span> <span>&bull;</span>
                <span> Rammstein </span>
                <span>&bull;</span> <span> Tame Impala </span>
                <span>&bull;</span> <span> Of Monsters and Men </span>
                <span>&bull;</span> <span> Depeche Mode </span>
                <span>&bull;</span>
                <span> Editors </span>
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="threestars-concert">
                  Balthazar
                </span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Biffy Clyro</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">The National</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Sigur Ros</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Netsky</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">The Script</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">John Legend</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Kings of Leon</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Blur</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Tame Impala</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Nick Cave</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Rammstein</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Band of Horses</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Of Monsters and Men</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Depeche Mode</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Editors</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-left left rw2015">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2015</h2>
              <h3 class="concerts-header">Rock Werchter</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span> Massive Attack
                <span>&bull;</span> Red Hot Chili Peppers
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="threestars-concert">
                  Chet Faker
                </span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Rise Against</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Florence and the Machine</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">The Chemical Brothers</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Of Monsters and Men</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Death Cab for Cutie</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">alt-J</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">Mumford and Sons</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">
                  Noel Gallagher's High Flying Birds
                </span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Lenny Kravitz</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Kasabian</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Muse</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-right right nosalive">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2016</h2>
              <h3 class="concerts-header">Nos Alive</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span> Massive Attack
                <span>&bull;</span> Red Hot Chili Peppers
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="onestar-concert">
                  The 1975
                </span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Biffy Clyro</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Robert Plant and the SSS</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Pixies</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">The Chemical Brothers</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Foals</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Tame Impala</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Radiohead</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Band of Horses</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Arcade Fire</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">M83</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-left left rw2017">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2017</h2>
              <h3 class="concerts-header">Rock Werchter</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span> Massive Attack
                <span>&bull;</span> Red Hot Chili Peppers
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="threestars-concert">
                  Cigarettes After Sex
                </span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Mark Lanegan Band</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Agnes Obel</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">Imagine Dragons</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Lorde</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Arcade Fire</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Kings of Leon</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Slowdive</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Maggie Rogers</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Future Islands</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">James Blake</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Radiohead</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Jimmy Eat World</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Blink-182</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">System of a Down</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Cage the Elephant</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">The Kills</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Warpaint</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">alt-J</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-right right ps2018">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2018</h2>
              <h3 class="concerts-header">Primavera Sound</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span> Massive Attack
                <span>&bull;</span> Red Hot Chili Peppers
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="fourstars-concert">
                  Spiritualized
                </span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Belle &#38; Sebastian</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">O'o</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Ezra Furman</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Warpaint</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">The War on Drugs</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Anna von Hausswolff</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Bjork</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">
                  Nick Cave &#38; The Bad Seeds
                </span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Chvrches</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Cesare Basile</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">John Maus</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Father John Misty</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">The National</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Charlotte Gainsbourg</span>
                <span class="double-bull">&bull;</span>
                <span class="onestar-concert">Cigarettes After Sex</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Confidence Man</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Lift To Experience</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">Ariel Pink</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Slowdive</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Lorde</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Arctic Monkeys</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Deerhunter</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Beach House</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">
                  Public Service Broadcasting
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-container-left left rw2018">
          <div class="content">
            <div class="content-border">
              <h2 class="year-header">2018</h2>
              <h3 class="concerts-header">Rock Werchter</h3>
              <div class="concerts-image">
                The Cranberries <span>&bull;</span> Massive Attack
                <span>&bull;</span> Red Hot Chili Peppers
              </div>
              <div class="concerts-container">
                <span style={{ paddingLeft: 0 }} class="fourstars-concert">
                  Gang of Youths
                </span>
                <span class="threestars-concert">The Vaccines</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Vince Staples</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Queens of the Stone Age</span>
                <span class="double-bull">&bull;</span>
                <span class="fivestars-concert">Gorillaz</span>
                <span class="double-bull">&bull;</span>
                <span class="fourstars-concert">Angus &#38; Julia Stone</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Ben Howard</span>
                <span class="double-bull">&bull;</span>
                <span class="twostars-concert">London Grammar</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">The Killers</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Stereophonics</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Idles</span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Eels</span>
                <span class="double-bull">&bull;</span>
                <br />
                <span style={{ paddingLeft: 0 }} class="twostars-concert">
                  Noel Gallagher's High Flying Birds
                </span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">
                  Nick Cave &#38; The Bad Seeds
                </span>
                <span class="double-bull">&bull;</span>
                <span class="threestars-concert">Arctic Monkeys</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-bottom-circle" />
      </div>
    </React.Fragment>
  );
};

export default Timeline;
