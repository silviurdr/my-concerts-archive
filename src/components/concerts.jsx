import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

class Concerts extends Component {
  render() {
    return (
      <div className="card-deck">
        <div className="card">
          <img
            src={require("../images/blur.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Blur</h5>
            <p className="card-text">
              Blur are an English rock band, formed in London in 1988. The group
              consists of singer/keyboardist Damon Albarn, guitarist/singer
              Graham Coxon, bassist Alex James and drummer Dave Rowntree.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/rammstein.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Rammstein</h5>
            <p className="card-text">
              Rammstein are a German Neue Deutsche Härte band from Berlin,
              formed in 1994. Throughout their existence, their six-man lineup
              has remained unchanged — lead vocalist Till Lindemann...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/nickCave.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Nick Cave &amp; The Bad Seeds</h5>
            <p className="card-text">
              Nick Cave &amp; The Bad Seeds are an Australian rock band formed
              in Melbourne in 1983 by vocalist Nick Cave, multi-instrumentalist
              Mick Harvey and guitarist Blixa Bargeld.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/balthazar.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Balthazar</h5>
            <p className="card-text">
              Balthazar is a Belgian indie pop and rock group. The band consists
              of Maarten Devoldere, Jinte Deprez, Simon Casier, Michiel Balcaen
              and Tijs Delbeke.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/biffyClyro.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Biffy Clyro</h5>
            <p className="card-text">
              Biffy Clyro are a Scottish rock band that formed in Fenwick, East
              Ayrshire, composed of Simon Neil (guitar, lead vocals), James
              Johnston (bass, vocals) and Ben Johnston (drums, vocals).
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/theNational.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">The National</h5>
            <p className="card-text">
              The National is an American rock band from Cincinnati, Ohio,
              formed in 1999. The band consists of Matt Berninger (vocals),
              Aaron Dessner, Bryce Dessner, Scott Devendorf and Bryan Devendorf.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/sigurRos.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sigur Ros</h5>
            <p className="card-text">
              Sigur Rós are an Icelandic avant-rock band from Reykjavík, active
              since 1994. Known for their ethereal sound, frontman Jónsi's
              falsetto vocals, and the use of bowed guitar the band's music
              incorporates classical and minimal aesthetic elements
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/netsky.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Netsky</h5>
            <p className="card-text">
              Boris Daenen (born 24 March 1989) better known by his stage name
              Netsky is a Belgian drum and bass producer and musician. The name
              Netsky is based on the computer virus of the same name.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/theScript.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">The Script</h5>
            <p className="card-text">
              The Script is an Irish pop band formed in 2001 in Dublin, Ireland.
              They first released music in 2008. It consists of lead vocalist
              and keyboardist Daniel O'Donoghue, guitarist Mark Sheehan, and
              drummer and bassist Glen Power.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/johnLegend.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">John Legend</h5>
            <p className="card-text">
              John Roger Stephens (born December 28, 1978), known professionally
              as John Legend, is an American singer, songwriter, record
              producer, activist, piano player, and actor.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/kingsOfLeon.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Kings of Leon</h5>
            <p className="card-text">
              Kings of Leon is an American rock band formed in 1999. The band is
              composed of brothers Caleb, Nathan and Jared Followill with their
              cousin Matthew Followill.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/tameImpala.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Tame Impala</h5>
            <p className="card-text">
              Tame Impala is an Australian psychedelic music project led by
              multi-instrumentalist Kevin Parker, who writes, records, performs,
              and produces the music.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/bandOfHorses.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Band of Horses</h5>
            <p className="card-text">
              Band of Horses is an American rock band formed in 2004 in Seattle
              by Ben Bridwell. The band has released 5 studio albums, the most
              successful of which is 2010's Infinite Arms.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/ofMonstersAndMen.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Of Monsters and Men</h5>
            <p className="card-text">
              Of Monsters and Men is a band from Reykjavík, Iceland, formed in
              2010. The members are lead singer and guitarist Nanna Bryndís
              Hilmarsdóttir, singer and guitarist Ragnar Þórhallsson...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/depecheMode.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Depeche Mode</h5>
            <p className="card-text">
              Depeche Mode are an English electronic band formed in Basildon,
              Essex, in 1980. The group currently consists of a trio of Dave
              Gahan, Martin Gore and Andy Fletcher.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/editors.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Editors</h5>
            <p className="card-text">
              Editors are an English rock band, formed in 2002 in Birmingham.
              Previously known as Pilot, The Pride and Snowfield, the band
              currently consists of Tom Smith...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/theCranberries.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">The Cranberries</h5>
            <p className="card-text">
              The Cranberries are an Irish rock band formed in Limerick, in 1989
              by Niall Quinn, Noel Hogan, Mike Hogan, Fergal Lawler. Quinn was
              replaced as lead singer by Dolores O'Riordan in 1990.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2010
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/massiveAttack.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Massive Attack</h5>
            <p className="card-text">
              Massive Attack are a British musical group formed in 1988 in
              Bristol, United Kingdom, consisting of Robert "3D" Del Naja and
              Grant "Daddy G" Marshall.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2010
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/redHotChiliPeppers.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Red Hot Chili Peppers</h5>
            <p className="card-text">
              Red Hot Chili Peppers are an American rock band formed in Los
              Angeles in 1983. The band consists of Anthony Kiedis, bassist
              Flea, drummer Chad Smith and guitarist Josh Klinghoffer.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/chetFaker.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chet Faker</h5>
            <p className="card-text">
              Nicholas James Murphy also known as Nick Murphy or most commonly
              by his former stage name Chet Faker, is an Australian singer and
              songwriter.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/riseAgainst.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Rise Against</h5>
            <p className="card-text">
              Rise Against is an American punk rock band from Chicago. The
              group's current line-up comprises vocalist/guitarist Tim McIlrath,
              Zach Blair, Joe Principe and Brandon Barnes.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/florenceAndTheMachine.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Florence and the Machine</h5>
            <p className="card-text">
              Florence and the Machine are an English indie rock band that
              formed in London in 2007, consisting of vocalist Florence Welch
              and keyboardist Isabella Summers.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/theChemicalBrothers.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">The Chemical Brothers</h5>
            <p className="card-text">
              The Chemical Brothers are an English electronic music duo composed
              of Tom Rowlands and Ed Simons, originating in Manchester in 1989.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/ofMonstersAndMen2.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Of Monsters and Men</h5>
            <p className="card-text">
              Of Monsters and Men is a band from Reykjavík, Iceland, formed in
              2010. The members are lead singer and guitarist Nanna Bryndís
              Hilmarsdóttir, singer and guitarist Ragnar Þórhallsson...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/deathCabForCutie.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Death Cab for Cutie</h5>
            <p className="card-text">
              Death Cab for Cutie is an American alternative rock band, formed
              in Bellingham, WA, in 1997. The band is composed of Ben Gibbard
              (vocals, guitar, piano), Nick Harmer (bass)...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/altJ.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Alt-J</h5>
            <p className="card-text">
              Alt-J is an English indie rock band formed in 2007 in Leeds, by
              Joe Newman (guitar/lead vocals), Thom Sonny Green (drums), Gus
              Unger-Hamilton (keyboards/vocals)...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/mumfordAndSons.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Mumford &#38; Sons</h5>
            <p className="card-text">
              Mumford &#38; Sons are a British band formed in 2007. The band
              consists of Marcus Mumford (lead vocals, electric guitar, acoustic
              guitar, drums), Ben Lovett...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/noelGallagherHFB.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Noel Gallagher's HFB</h5>
            <p className="card-text">
              Noel Gallagher's High Flying Birds are an English rock band formed
              in 2010 as the solo moniker of former Oasis lead guitarist and
              songwriter Noel Gallagher.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/lennyKravitz.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Lenny Kravitz</h5>
            <p className="card-text">
              Leonard Albert Kravitz (born May 26, 1964) is an American singer,
              songwriter, actor, and record producer. His "retro" style
              incorporates elements of rock, blues, soul, R&#38;B, funk...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/kasabian.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Kasabian</h5>
            <p className="card-text">
              Kasabian are an English rock band formed in Leicester in 1997. The
              band's original members were vocalist Tom Meighan, guitarist and
              vocalist Sergio Pizzorno...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2015
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/muse.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Muse</h5>
            <p className="card-text">
              Muse are an English rock band from Teignmouth, Devon, formed in
              1994. The band consists of Matt Bellamy, Chris Wolstenholme, and
              Dominic Howard.
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStarHalf} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/editors.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Editors</h5>
            <p className="card-text">
              Editors are an English rock band, formed in 2002 in Birmingham.
              Previously known as Pilot, The Pride and Snowfield, the band
              currently consists of Tom Smith...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../images/editors.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Editors</h5>
            <p className="card-text">
              Editors are an English rock band, formed in 2002 in Birmingham.
              Previously known as Pilot, The Pride and Snowfield, the band
              currently consists of Tom Smith...
            </p>
          </div>
          <div className="card-footer">
            <small className="year">
              2013
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
              <FontAwesomeIcon className="rating" icon={faStar} />
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Concerts;
