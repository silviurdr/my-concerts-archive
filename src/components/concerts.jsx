import React, { Component } from "react";
import { getConcerts } from "../services/ConcertService";
import { getGenres } from "../services/GenreService";
import { paginate } from "./utils/paginate";
import Header from "./header";
import Pagination from "./pagination";
import ConcertsCardDeck from "./concertsCardDeck";
import Filtering from "./filtering";
import BurgerMenu from "./burgerMenu";
import _ from "lodash";

class Concerts extends Component {
  state = {
    genres: [],
    concerts: [],
    currentPage: 1,
    pageSize: 12,
    sortYearRating: { path: "year", order: "desc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ concerts: getConcerts(), genres });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
    window.scrollTo(0, 0);
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleMobileGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  lockScreen = () => {
    this.setState({ bakgroundColor: "red" });
  };

  handleSort = sortYearRating => {
    this.setState({ sortYearRating });
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortYearRating,
      selectedGenre,
      concerts: allConcerts
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allConcerts.filter(c => c.genre._id === selectedGenre._id)
        : allConcerts;

    const sorted = _.orderBy(
      filtered,
      [sortYearRating.path],
      [sortYearRating.order]
    );

    const concerts = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <BurgerMenu
          height={"100%"}
          items={this.state.genres}
          selectedItem={this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
        <div className="containers">
          <Header />
        </div>
        <div className="row">
          <div className="col-2">
            <Filtering
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div className="main-content">
              <ConcertsCardDeck
                concerts={concerts}
                onSort={this.handleSort}
                sortYearRating={sortYearRating}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Concerts;
