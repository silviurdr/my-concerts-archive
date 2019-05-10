import React from "react";
import uuid from "uuid";
import blur2 from "../images/blur2.jpg";
import rammstein2 from "../images/rammstein2.jpg";
import nickCave2 from "../images/nickCave2.jpg";
import balthazar from "../images/balthazar.jpg";
import biffyClyro3 from "../images/biffyClyro3.jpg";
import theNational3 from "../images/theNational3.jpg";
import sigurRos from "../images/sigurRos.jpg";
import netsky from "../images/netsky.jpg";
import theScript from "../images/theScript.jpg";
import johnLegend from "../images/johnLegend.jpg";
import kingsOfLeon from "../images/kingsOfLeon.jpg";
import tameImpala from "../images/tameImpala.jpg";
import bandOfHorses from "../images/bandOfHorses.jpg";
import ofMonstersAndMen from "../images/ofMonstersAndMen.jpg";
import depecheMode from "../images/depecheMode.jpg";
import editors from "../images/editors.jpg";
import theCranberries from "../images/theCranberries.jpg";
import massiveAttack from "../images/massiveAttack.jpg";
import redHotChiliPeppers from "../images/redHotChiliPeppers.jpg";
import chetFaker from "../images/chetFaker.jpg";
import riseAgainst from "../images/riseAgainst.jpg";
import florenceAndTheMachine from "../images/florenceAndTheMachine.jpg";
import theChemicalBrothers from "../images/theChemicalBrothers.jpg";
import ofMonstersAndMen2 from "../images/ofMonstersAndMen2.jpg";
import deathCabForCutie from "../images/deathCabForCutie.jpg";
import altJ from "../images/altJ.jpg";
import mumfordAndSons from "../images/mumfordAndSons.jpg";
import noelGallagherHFB from "../images/noelGallagherHFB.jpg";
import lennyKravitz from "../images/lennyKravitz.jpg";
import kasabian from "../images/kasabian.jpg";
import muse from "../images/muse.jpg";
import the1975 from "../images/the1975.jpg";
import biffyClyro from "../images/biffyClyro.jpg";
import robertPlantAndTheSSS from "../images/robertPlantAndTheSSS.jpg";
import pixies from "../images/pixies.jpg";
import theChemicalBrothers2 from "../images/theChemicalBrothers2.jpg";
import foals from "../images/foals.jpg";
import tameImpala2 from "../images/tameImpala2.jpg";
import radiohead from "../images/radiohead.jpg";
import bandOfHorses2 from "../images/bandOfHorses2.jpg";
import arcadeFire from "../images/arcadeFire.jpg";
import m83 from "../images/m83.jpg";
import cigarettesAfterSex from "../images/cigarettesAfterSex.jpg";
import markLaneganBand from "../images/markLaneganBand.jpg";
import agnesObel from "../images/agnesObel.jpg";
import lorde from "../images/lorde.jpg";
import arcadeFire2 from "../images/arcadeFire2.jpg";
import kingsOfLeon2 from "../images/kingsOfLeon2.jpg";
import slowdive from "../images/slowdive.jpg";
import imagineDragons from "../images/imagineDragons.jpg";
import maggieRogers from "../images/maggieRogers.jpg";
import futureIslands from "../images/futureIslands.jpg";
import jamesBlake from "../images/jamesBlake.jpg";
import radiohead2 from "../images/radiohead2.jpg";
import jimmyEatWorld from "../images/jimmyEatWorld.jpg";
import blink182 from "../images/blink182.jpg";
import systemOfADown from "../images/systemOfADown.jpg";
import cageTheElephant from "../images/cageTheElephant.jpg";
import dropkickMurphys from "../images/dropkickMurphys.jpg";
import theKills from "../images/theKills.jpg";
import warpaint from "../images/warpaint.jpg";
import altJ2 from "../images/altJ2.jpg";
import spiritualized from "../images/spiritualized.jpg";
import belleAndSebastian from "../images/belleAndSebastian.jpg";
import oO from "../images/oO.jpg";
import ezraFurman from "../images/ezraFurman.jpg";
import warpaint3 from "../images/warpaint3.jpg";
import theWarOnDrugs from "../images/theWarOnDrugs.jpg";
import annaVonHausswolff from "../images/annaVonHausswolff.jpg";
import bjork from "../images/bjork.jpg";
import nickCave3 from "../images/nickCave3.jpg";
import chvrches from "../images/chvrches.jpg";
import cesareBasile from "../images/cesareBasile.jpg";
import johnMaus from "../images/johnMaus.jpg";
import fatherJohnMisty from "../images/fatherJohnMisty.jpg";
import theNational2 from "../images/theNational2.jpg";
import charlotteGainsbourg from "../images/charlotteGainsbourg.jpg";
import cigarettesAfterSex2 from "../images/cigarettesAfterSex2.jpg";
import confidenceMan from "../images/confidenceMan.jpg";
import liftToExperience from "../images/liftToExperience.jpg";
import arielPink from "../images/arielPink.jpg";
import slowdive2 from "../images/slowdive2.jpg";
import lorde2 from "../images/lorde2.jpg";
import arcticMonkeys from "../images/arcticMonkeys.jpg";
import deerhunter from "../images/deerhunter.jpg";
import beachHouse from "../images/beachHouse.jpg";
import publicServiceBroadcasting from "../images/publicServiceBroadcasting.jpg";
import gangOfYouths from "../images/gangOfYouths.jpg";
import theVaccines from "../images/theVaccines.jpg";
import vinceStaples from "../images/vinceStaples.jpg";
import queensOfTheStoneAge from "../images/queensOfTheStoneAge.jpg";
import gorillaz from "../images/gorillaz.jpg";
import angusAndJuliaStone from "../images/angusAndJuliaStone.jpg";
import benHoward from "../images/benHoward.jpg";
import londonGrammar from "../images/londonGrammar.jpg";
import theKillers from "../images/theKillers.jpg";
import stereophonics from "../images/stereophonics.jpg";
import idles from "../images/idles.jpg";
import eels from "../images/eels.jpg";
import noelGallagherHFB2 from "../images/noelGallagherHFB2.jpg";
import nickCave4 from "../images/nickCave4.jpg";
import arcticMonkeys2 from "../images/arcticMonkeys2.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar, faStarHalf);

const concerts = [
  {
    _id: uuid.v4(),
    title: "Balthazar",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "IndieRock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Balthazar is a Belgian indie pop and rock group. The band consists of Maarten Devoldere, Jinte Deprez, Simon Casier, Michiel Balcaen and Tijs Delbeke.",
    src: balthazar
  },
  {
    _id: uuid.v4(),
    title: "Biffy Clyro",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Biffy Clyro are a Scottish rock band that formed in Fenwick, East Ayrshire, composed of Simon Neil (guitar, lead vocals), James Johnston (bass, vocals) and Ben Johnston...",
    src: biffyClyro3
  },
  {
    _id: uuid.v4(),
    title: "The National",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "IndieRock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "The National is an American rock band from Cincinnati, Ohio, formed in 1999. The band consists of Matt Berninger (vocals), Aaron Dessner, Bryce Dessner, Scott Devendorf...",
    src: theNational3
  },
  {
    _id: uuid.v4(),
    title: "Sigur Ros",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "IndieRock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Sigur Rós are an Icelandic avant-rock band from Reykjavík, active since 1994. Known for their ethereal sound, frontman Jónsi's falsetto vocals, and the use of bowed guitar...",
    src: sigurRos
  },
  {
    _id: uuid.v4(),
    title: "Netsky",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Boris Daenen (born 24 March 1989) better known by his stage name Netsky is a Belgian drum and bass producer and musician. The name Netsky is based on the...",
    src: netsky
  },
  {
    _id: uuid.v4(),
    title: "The Script",
    genre: { _id: "2z21ca3eeb7f6fbccd471818", name: "Pop-Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 1.5,
    description:
      "The Script is an Irish pop band formed in 2001 in Dublin, Ireland. They first released music in 2008. It consists of lead vocalist and keyboardist Daniel O'Donoghue...",
    src: theScript
  },
  {
    _id: uuid.v4(),
    title: "John Legend",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "John Roger Stephens (born December 28, 1978), known professionally as John Legend, is an American singer, songwriter, record producer, activist, piano player...",
    src: johnLegend
  },
  {
    _id: uuid.v4(),
    title: "Kings of Leon",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Kings of Leon is an American rock band formed in 1999. The band is composed of brothers Caleb, Nathan and Jared Followill with their cousin Matthew Followill.",
    src: kingsOfLeon
  },
  {
    _id: uuid.v4(),
    title: "Blur",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    country: "BE",
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Blur are an English rock band, formed in London in 1988. The group consists of singer/keyboardist Damon Albarn, guitarist/singer Graham Coxon, bassist Alex James and...",
    src: blur2
  },
  {
    _id: uuid.v4(),
    title: "Rammstein",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Rammstein are a German Neue Deutsche Härte band from Berlin, formed in 1994. Throughout their existence, their six-man lineup has remained unchanged...",
    src: rammstein2
  },
  {
    _id: uuid.v4(),
    title: "Nick Cave & The Bad Seeds",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Nick Cave & The Bad Seeds are an Australian rock band formed in Melbourne in 1983 by vocalist Nick Cave, multi-instrumentalist Mick...",
    src: nickCave2
  },
  {
    _id: uuid.v4(),
    title: "Tame Impala",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Tame Impala is an Australian psychedelic music project led by multi-instrumentalist Kevin Parker, who writes, records, performs, and produces the music.",
    src: tameImpala
  },
  {
    _id: uuid.v4(),
    title: "Band of Horses",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Band of Horses is an American rock band formed in 2004 in Seattle by Ben Bridwell. The band has released 5 studio albums, the most successful of which is 2010's Infinite Arms.",
    src: bandOfHorses
  },
  {
    _id: uuid.v4(),
    title: "Of Monsters and Men",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Of Monsters and Men is a band from Reykjavík, Iceland, formed in 2010. The members are lead singer and guitarist Nanna Bryndís Hilmarsdóttir, singer and guitarist Ragnar...",
    src: ofMonstersAndMen
  },
  {
    _id: uuid.v4(),
    title: "Depeche Mode",
    genre: { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Depeche Mode are an English electronic band formed in Basildon, Essex, in 1980. The group currently consists of a trio of Dave Gahan, Martin Gore and Andy Fletcher.",
    src: depecheMode
  },
  {
    _id: uuid.v4(),
    title: "Editors",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2013,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Editors are an English rock band, formed in 2002 in Birmingham. Previously known as Pilot, The Pride and Snowfield, the band currently consists of Tom Smith...",
    src: editors
  },
  {
    _id: uuid.v4(),
    title: "The Cranberries",
    genre: { _id: "2z21ca3eeb7f6fbccd471818", name: "Pop-Rock" },
    year: 2010,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "The Cranberries are an Irish rock band formed in Limerick, in 1989 by Niall Quinn, Noel Hogan, Mike Hogan, Fergal Lawler. Quinn was replaced as lead singer by Dolores O Riordan in...",
    src: theCranberries
  },
  {
    _id: uuid.v4(),
    title: "Massive Attack",
    genre: { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
    year: 2010,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      " Massive Attack are a British musical group formed in 1988 in Bristol, United Kingdom, consisting of Robert Del Naja and Grant Marshall.",
    src: massiveAttack
  },
  {
    _id: uuid.v4(),
    title: "Red Hot Chili Peppers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2012,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The band consists of Anthony Kiedis, bassist Flea, drummer Chad Smith and guitarist...",
    src: redHotChiliPeppers
  },
  {
    _id: uuid.v4(),
    title: "Chet Faker",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Nicholas James Murphy also known as Nick Murphy or most commonly by his former stage name Chet Faker, is an Australian singer and songwriter.",
    src: chetFaker
  },
  {
    _id: uuid.v4(),
    title: "Rise Against",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Rise Against is an American punk rock band from Chicago. The group's current line-up comprises vocalist/guitarist Tim McIlrath, Zach Blair, Joe Principe...",
    src: riseAgainst
  },
  {
    _id: uuid.v4(),
    title: "Florence and the Machine",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Florence and the Machine are an English indie rock band that formed in London in 2007, consisting of vocalist Florence Welch and...",
    src: florenceAndTheMachine
  },
  {
    _id: uuid.v4(),
    title: "The Chemical Brothers",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "The Chemical Brothers are an English electronic music duo composed of Tom Rowlands and Ed Simons, originating in Manchester in 1989.",
    src: theChemicalBrothers
  },
  {
    _id: uuid.v4(),
    title: "Of Monsters and Men",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Of Monsters and Men is a band from Reykjavík, Iceland, formed in 2010. The members are lead singer and guitarist Nanna Bryndís Hilmarsdóttir, singer and guitarist Ragnar...",
    src: ofMonstersAndMen2
  },
  {
    _id: uuid.v4(),
    title: "Death Cab for Cutie",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Death Cab for Cutie is an American alternative rock band, formed in Bellingham, WA, in 1997. The band is composed of Ben Gibbard (vocals, guitar, piano), Nick Harmer (bass)...",
    src: deathCabForCutie
  },
  {
    _id: uuid.v4(),
    title: "Alt-J",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Alt-J is an English indie rock band formed in 2007 in Leeds, by Joe Newman (guitar/lead vocals), Thom Sonny Green (drums), Gus Unger-Hamilton (keyboards/vocals)...",
    src: altJ
  },
  {
    _id: uuid.v4(),
    title: "Mumford and Sons",
    genre: { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 2,
    description:
      "Mumford & Sons are a British band formed in 2007. The band consists of Marcus Mumford (lead vocals, electric guitar, acoustic guitar, drums), Ben Lovett...",
    src: mumfordAndSons
  },
  {
    _id: uuid.v4(),
    title: "Noel Gallagher's High Flying Birds",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Noel Gallagher's High Flying Birds are an English rock band formed in 2010 as the solo moniker of former Oasis lead guitarist and songwriter Noel...",
    src: noelGallagherHFB
  },
  {
    _id: uuid.v4(),
    title: "Lenny Kravitz",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Leonard Albert Kravitz (born May 26, 1964) is an American singer, songwriter, actor, and record producer. His 'retro' style incorporates elements of...",
    src: lennyKravitz
  },
  {
    _id: uuid.v4(),
    title: "Kasabian",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Kasabian are an English rock band formed in Leicester in 1997. The band's original members were vocalist Tom Meighan, guitarist and vocalist Sergio Pizzorno...",
    src: kasabian
  },
  {
    _id: uuid.v4(),
    title: "Muse",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2015,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy, Chris Wolstenholme, and Dominic Howard.",
    src: muse
  },
  {
    _id: uuid.v4(),
    title: "The 1975",
    genre: { _id: "2z21ca3eeb7f6fbccd471818", name: "Pop-Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 2,
    description:
      "The 1975 are an English pop rock band from Manchester, consisting of lead vocalist and rhythm guitarist Matthew Healy, lead guitarist Adam Hann...",
    src: the1975
  },
  {
    _id: uuid.v4(),
    title: "Biffy Clyro",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Biffy Clyro are a Scottish rock band that formed in Fenwick, East Ayrshire, composed of Simon Neil (guitar, lead vocals), James Johnston (bass, vocals) and Ben Johnston...",
    src: biffyClyro
  },
  {
    _id: uuid.v4(),
    title: "Robert Plant and the SSS",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Robert Anthony Plant is an English singer, songwriter, and musician, best known as the lead singer and lyricist of the rock band Led Zeppelin.",
    src: robertPlantAndTheSSS
  },
  {
    _id: uuid.v4(),
    title: "Pixies",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "The Pixies are an American alternative rock band formed in 1986 in Boston, Massachusetts. The original line-up was composed of Black Francis (vocals, guitar)",
    src: pixies
  },
  {
    _id: uuid.v4(),
    title: "The Chemical Brothers",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "The Chemical Brothers are an English electronic music duo composed of Tom Rowlands and Ed Simons, originating in Manchester in 1989.",
    src: theChemicalBrothers2
  },
  {
    _id: uuid.v4(),
    title: "Foals",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Foals are a rock band from Oxford, England formed in 2005, consisting of lead vocalist and lead guitarist Yannis Philippakis, drummer and percussionist Jack Bevan",
    src: foals
  },
  {
    _id: uuid.v4(),
    title: "Tame Impala",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Tame Impala is an Australian psychedelic music project led by multi-instrumentalist Kevin Parker, who writes, records, performs, and produces the music.",
    src: tameImpala2
  },
  {
    _id: uuid.v4(),
    title: "Radiohead",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Radiohead are an English rock band formed in Abingdon-on-Thames in 1985. The band consists of Thom Yorke, brothers Jonny Greenwood and Colin Greenwood ...",
    src: radiohead
  },
  {
    _id: uuid.v4(),
    title: "Band Of Horses",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Band of Horses is an American rock band formed in 2004 in Seattle by Ben Bridwell. The band has released 5 studio albums, the most successful of which is 2010's Infinite Arms.",
    src: bandOfHorses2
  },
  {
    _id: uuid.v4(),
    title: "Arcade Fire",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Arcade Fire is a Canadian indie rock band, consisting of husband and wife Win Butler and Régine Chassagne, along with Win's younger brother William Butler...",
    src: arcadeFire
  },
  {
    _id: uuid.v4(),
    title: "M83",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2016,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "M83 are a French electronic music project currently based in Los Angeles. The band's primary member is vocalist, songwriter and multi-instrumentalist Anthony Gonzalez.",
    src: m83
  },
  {
    _id: uuid.v4(),
    title: "Cigarettes After Sex",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Cigarettes After Sex is an American ambient pop band formed in 2008, from El Paso, Texas, founded by Greg Gonzalez. The band is known for their dream-like musical style",
    src: cigarettesAfterSex
  },
  {
    _id: uuid.v4(),
    title: "Mark Lanegan Band",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Mark William Lanegan is an American alternative rock musician and singer-songwriter. Lanegan has also collaborated with various artists and bands...",
    src: markLaneganBand
  },
  {
    _id: uuid.v4(),
    title: "Agnes Obel",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Agnes Caroline Thaarup Obel is a Danish singer, songwriter, and musician. Obel is influenced by artists such as Roy Orbison and also by composer Claude Debussy...",
    src: agnesObel
  },
  {
    _id: uuid.v4(),
    title: "Imagine Dragons",
    genre: { _id: "2z21ca3eeb7f6fbccd471818", name: "Pop Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 1,
    description:
      "Imagine Dragons is an American rock band from Las Vegas, Nevada, consisting of lead vocalist Dan Reynolds, lead guitarist Wayne Sermon, bassist Ben McKee...",
    src: imagineDragons
  },
  {
    _id: uuid.v4(),
    title: "Lorde",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Ella Marija Lani Yelich-O'Connor (born 7 November 1996), known professionally as Lorde (pronounced 'lord'), is a New Zealand singer, songwriter and record producer.",
    src: lorde
  },
  {
    _id: uuid.v4(),
    title: "Arcade Fire",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Arcade Fire is a Canadian indie rock band, consisting of husband and wife Win Butler and Régine Chassagne, along with Win's younger brother William Butler...",
    src: arcadeFire2
  },
  {
    _id: uuid.v4(),
    title: "Kings Of Leon",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Kings of Leon is an American rock band formed in 1999. The band is composed of brothers Caleb, Nathan and Jared Followill with their cousin Matthew Followill.",
    src: kingsOfLeon2
  },
  {
    _id: uuid.v4(),
    title: "Slowdive",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Slowdive are an English rock band that formed in Reading, Berkshire in 1989. The band consists of Rachel Goswell, Simon Scott, Neil Halstead...",
    src: slowdive
  },
  {
    _id: uuid.v4(),
    title: "Maggie Rogers",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Margaret Debay Rogers is an American musician from Easton, Maryland. She rose to fame after her song 'Alaska' was played to Pharrell Williams during a...",
    src: maggieRogers
  },
  {
    _id: uuid.v4(),
    title: "Future Islands",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Future Islands is an American synthpop band based in Baltimore, Maryland, comprising Gerrit Welmers William Cashion and Samuel T. Herring (lyrics and vocals).",
    src: futureIslands
  },
  {
    _id: uuid.v4(),
    title: "James Blake",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "James Blake Litherland (born 26 September 1988) is an English singer, songwriter, multi-instrumentalist and record producer from London.",
    src: jamesBlake
  },
  {
    _id: uuid.v4(),
    title: "Radiohead",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Radiohead are an English rock band formed in Abingdon-on-Thames in 1985. The band consists of Thom Yorke, brothers Jonny Greenwood and Colin Greenwood ...",
    src: radiohead2
  },
  {
    _id: uuid.v4(),
    title: "Jimmy Eat World",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Jimmy Eat World is an American rock band formed in Mesa, Arizona in 1993. The band is composed of lead guitarist/lead vocalist Jim Adkins, drummer Zach Lind",
    src: jimmyEatWorld
  },
  {
    _id: uuid.v4(),
    title: "Blink-182",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Blink-182 is an American rock band formed in Poway, California in 1992. Founded by guitarist and vocalist Tom DeLonge, Hoppus and drummer Scott Raynor...",
    src: blink182
  },
  {
    _id: uuid.v4(),
    title: "System of A Down",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "System of a Down is an Armenian-American heavy metal band from Glendale, California, formed in 1994. The band currently consists of Serj Tankian, Daron Malakian...",
    src: systemOfADown
  },
  {
    _id: uuid.v4(),
    title: "Cage the Elephant",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Cage the Elephant is an American rock band from Bowling Green, Kentucky, that formed in 2006 and relocated to London, England, in 2008 before...",
    src: cageTheElephant
  },
  {
    _id: uuid.v4(),
    title: "Dropkick Murphys",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Dropkick Murphys are an American Celtic punk band formed in Quincy, Massachusetts, in 1996. The band was initially signed to independent punk record label Hellcat...",
    src: dropkickMurphys
  },
  {
    _id: uuid.v4(),
    title: "The Kills",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "The Kills are a British-American indie rock band formed by American singer Alison Mosshart ('VV') and English guitarist Jamie Hince ('Hotel').",
    src: theKills
  },
  {
    _id: uuid.v4(),
    title: "Warpaint",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Warpaint is an American indie rock band from Los Angeles, California, formed in 2004. The current lineup comprises founders Emily Koka...",
    src: warpaint
  },
  {
    _id: uuid.v4(),
    title: "Alt-J",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2017,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Alt-J is an English indie rock band formed in 2007 in Leeds, by Joe Newman (guitar/lead vocals), Thom Sonny Green (drums), Gus Unger-Hamilton (keyboards/vocals)...",
    src: altJ2
  },
  {
    _id: uuid.v4(),
    title: "Spiritualized",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Spiritualized are an English space rock band formed in 1990 in Rugby, Warwickshire by Jason Pierce (often known as J. Spaceman), formerly of Spacemen 3",
    src: spiritualized
  },
  {
    _id: uuid.v4(),
    title: "Belle & Sebastian",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Belle and Sebastian are a Scottish band formed in Glasgow in January 1996. Led by Stuart Murdoch, the band has released nine albums.",
    src: belleAndSebastian
  },
  {
    _id: uuid.v4(),
    title: "O'o",
    genre: { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "O'o is a French electronic band, currently established in Barcelona. The band consists of Mathieu Daubigné and Victoria Suter.",
    src: oO
  },
  {
    _id: uuid.v4(),
    title: "Ezra Furman",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Ezra Furman is an American musician and songwriter. Furman currently performs solo and tours with his band The Visions.",
    src: ezraFurman
  },
  {
    _id: uuid.v4(),
    title: "Warpaint",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Warpaint is an American indie rock band from Los Angeles, California, formed in 2004. The current lineup comprises founders Emily Koka...",
    src: warpaint3
  },
  {
    _id: uuid.v4(),
    title: "The War on Drugs",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "The War on Drugs is an American indie rock band from Philadelphia, Pennsylvania, formed in 2005. The band consists of Adam Granduciel...",
    src: theWarOnDrugs
  },
  {
    _id: uuid.v4(),
    title: "Anna von Hausswolff",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Anna Michaela Ebba Electra von Hausswolff (born 6 September 1986 in Gothenburg) is a Swedish singer, pianist, organist and songwriter...",
    src: annaVonHausswolff
  },
  {
    _id: uuid.v4(),
    title: "Bjork",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Björk Guðmundsdóttir (born 21 November 1965) is an Icelandic singer, songwriter, composer, actress, record producer, and DJ.",
    src: bjork
  },
  {
    _id: uuid.v4(),
    title: "Nick Cave & The Bad Seeds",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Nick Cave & The Bad Seeds are an Australian rock band formed in Melbourne in 1983 by vocalist Nick Cave, multi-instrumentalist Mick...",
    src: nickCave3
  },
  {
    _id: uuid.v4(),
    title: "Chvrches",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Chvrches is a band from Glasgow, Scotland, formed in September 2011. The band consists of Lauren Mayberry, Iain Cook and Martin Doherty.",
    src: chvrches
  },
  {
    _id: uuid.v4(),
    title: "Cesare Basile",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Cesare Basile is an Italian singer and songwriter. Born in Catania in 1964, he made his debut as a musician in 1987...",
    src: cesareBasile
  },
  {
    _id: uuid.v4(),
    title: "John Maus",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 2,
    description:
      "John Maus is an American musician, composer, singer, and songwriter known for his baritone singing style, vintage synthesizer sounds...",
    src: johnMaus
  },
  {
    _id: uuid.v4(),
    title: "Father John Misty",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Joshua Michael Tillman also known as Father John Misty and previously J. Tillman, is an American singer-songwriter, musician, and record producer.",
    src: fatherJohnMisty
  },
  {
    _id: uuid.v4(),
    title: "The National",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "The National is an American rock band from Cincinnati, Ohio, formed in 1999. The band consists of Matt Berninger (vocals), Aaron Dessner, Bryce Dessner, Scott Devendorf...",
    src: theNational2
  },
  {
    _id: uuid.v4(),
    title: "Charlotte Gainsbourg",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3,
    description:
      "Charlotte Lucy Gainsbourg is a British-French actress and singer. She is the daughter of English actress Jane Birkin and French singer and songwriter Serge Gainsbourg.",
    src: charlotteGainsbourg
  },
  {
    _id: uuid.v4(),
    title: "Cigarettes After Sex",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 2,
    description:
      "Cigarettes After Sex is an American ambient pop band formed in 2008, from El Paso, Texas, founded by Greg Gonzalez. The band is known for their dream-like musical style",
    src: cigarettesAfterSex2
  },
  {
    _id: uuid.v4(),
    title: "Confidence Man",
    genre: { _id: "47x21ca3eeb7f6fbccd471818", name: "{Pop" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Confidence Man are an electro pop band from Brisbane, Australia formed in 2016, who released their debut album 'Confident Music For Confident People' on April 13, 2018.",
    src: confidenceMan
  },
  {
    _id: uuid.v4(),
    title: "Lift To Experience",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Lift to Experience is an American indie rock band from Denton, Texas, that formed in 1996 with vocalist and guitarist Josh T. Pearson, drummer Andy 'The Boy' Young...",
    src: liftToExperience
  },
  {
    _id: uuid.v4(),
    title: "Ariel Pink",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Ariel Marcus Rosenberg, also known as Ariel Pink, is an American multi-instrumentalist, singer, and songwriter whose music draws heavily from 1970s–1980s...",
    src: arielPink
  },
  {
    _id: uuid.v4(),
    title: "Slowdive",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Slowdive are an English rock band that formed in Reading, Berkshire in 1989. The band consists of Rachel Goswell, Simon Scott, Neil Halstead...",
    src: slowdive2
  },
  {
    _id: uuid.v4(),
    title: "Lorde",
    genre: { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Ella Marija Lani Yelich-O'Connor (born 7 November 1996), known professionally as Lorde (pronounced 'lord'), is a New Zealand singer, songwriter and record producer.",
    src: lorde2
  },
  {
    _id: uuid.v4(),
    title: "Arctic Monkeys",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Arctic Monkeys are an English rock band formed in Sheffield in 2002. The band consists of Alex Turner, Matt Helders, Jamie Cook and Nick O'Malley ",
    src: arcticMonkeys
  },
  {
    _id: uuid.v4(),
    title: "Deerhunter",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Deerhunter is an American rock band from Atlanta, Georgia, formed in 2001. The band consists of Bradford Cox (vocals, guitar, keyboards), Moses Archuleta",
    src: deerhunter
  },
  {
    _id: uuid.v4(),
    title: "Beach House",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Beach House is an American dream pop duo formed in Baltimore, Maryland in 2004. The band consists of vocalist and keyboardist Victoria Legrand and guitarist Alex Scally.",
    src: beachHouse
  },
  {
    _id: uuid.v4(),
    title: "Public Service Broadcasting",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Public Service Broadcasting are a London-based pseudonymous musical group consisting of J. Willgoose, Esq. on guitar, banjo...",
    src: publicServiceBroadcasting
  },
  {
    _id: uuid.v4(),
    title: "Gang of Youths",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 4,
    description:
      "Gang of Youths are an Australian indie rock group from Sydney. The band consists of principal songwriter David Le'aupepe, Max Dunn, Jung Kim, Joji Malan...",
    src: gangOfYouths
  },
  {
    _id: uuid.v4(),
    title: "The Vaccines",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "The Vaccines are an English indie rock band, formed in West London in 2010 by Justin Hayward-Young (lead vocals, guitar), Freddie Cowan, Árni Árnason...",
    src: theVaccines
  },
  {
    _id: uuid.v4(),
    title: "Vince Staples",
    genre: { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Vincent Jamal Staples (born July 2, 1993) is an American rapper, singer and actor. He is a member of the hip hop trio Cutthroat Boyz alongside fellow...",
    src: vinceStaples
  },
  {
    _id: uuid.v4(),
    title: "Queens of the Stone Age",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Queens of the Stone Age is an American rock band formed in 1996 in Palm Desert, California. The band's line-up includes founder Josh Homme, Troy Van Leeuwen...",
    src: queensOfTheStoneAge
  },
  {
    _id: uuid.v4(),
    title: "Gorillaz",
    genre: { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 5,
    description:
      "Gorillaz are a British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: 2-D...",
    src: gorillaz
  },
  {
    _id: uuid.v4(),
    title: "Angus & Julia Stone",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 4.5,
    description:
      "Angus & Julia Stone are an Australian folk and indie pop group, formed in 2006 by brother and sister Angus and Julia Stone. They have released four studio albums...",
    src: angusAndJuliaStone
  },
  {
    _id: uuid.v4(),
    title: "Ben Howard",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Benjamin John 'Ben' Howard (born 24 April 1987) is an English singer-songwriter, musician and composer. He self-released his debut EP Games in the Dark (2008)...",
    src: benHoward
  },
  {
    _id: uuid.v4(),
    title: "London Grammar",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "London Grammar are an English indie pop band formed in Nottingham in 2009. The band consists of Hannah Reid, Dan Rothman and Dominic 'Dot' Major...",
    src: londonGrammar
  },
  {
    _id: uuid.v4(),
    title: "The Killers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "The Killers are an American rock band formed in Las Vegas, Nevada, in 2001 by members Brandon Flowers (lead vocals, keyboards, bass) and Dave Keuning.",
    src: theKillers
  },
  {
    _id: uuid.v4(),
    title: "Stereophonics",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Stereophonics are a Welsh rock band that formed in 1992 in the village of Cwmaman in the Cynon Valley. The band consists of Kelly Jones, Richard Jones, Adam Zindani...",
    src: stereophonics
  },
  {
    _id: uuid.v4(),
    title: "Idles",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Idles, stylised as IDLES, are an English Punk rock band formed in Bristol in 2009. Their debut album, Brutalism, was released in 2017 to critical acclaim...",
    src: idles
  },
  {
    _id: uuid.v4(),
    title: "Eels",
    genre: { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Eels is an American rock band, formed in California in 1995 by singer/songwriter and multi-instrumentalist Mark Oliver Everett, known by the stage name E.",
    src: eels
  },
  {
    _id: uuid.v4(),
    title: "Noel Gallagher's High Flying Birds",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 2.5,
    description:
      "Noel Gallagher's High Flying Birds are an English rock band formed in 2010 as the solo moniker of former Oasis lead guitarist and songwriter Noel...",
    src: noelGallagherHFB2
  },
  {
    _id: uuid.v4(),
    title: "Nick Cave & The Bad Seeds",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Nick Cave & The Bad Seeds are an Australian rock band formed in Melbourne in 1983 by vocalist Nick Cave, multi-instrumentalist Mick...",
    src: nickCave4
  },
  {
    _id: uuid.v4(),
    title: "Arctic Monkeys",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    year: 2018,
    rating: (
      <React.Fragment>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </React.Fragment>
    ),
    stars: 3.5,
    description:
      "Arctic Monkeys are an English rock band formed in Sheffield in 2002. The band consists of Alex Turner, Matt Helders, Jamie Cook and Nick O'Malley ",
    src: arcticMonkeys2
  }
];

export function getConcerts() {
  return concerts;
}

export function getConcert(id) {
  return concerts.find(c => c.id === id);
}
