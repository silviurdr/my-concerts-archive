import React, { Component } from "react";

class ConcertsCardDeck extends Component {
  raiseSort = path => {
    const sortYearRating = { ...this.props.sortYearRating };
    if (sortYearRating.path === path) {
      sortYearRating.order = sortYearRating.order === "desc" ? "asc" : "desc";
    } else {
      sortYearRating.path = path;
      sortYearRating.order = "desc";
    }

    this.props.onSort(sortYearRating);
  };

  render() {
    const { concerts } = this.props;
    return (
      <div className="card-deck">
        {concerts.map(concert => (
          <div key={concert._id} className="card">
            <img src={concert.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{concert.title}</h5>
              <p className="card-text">{concert.description}</p>
            </div>
            <div className="card-footer">
              <div
                className="year-button"
                onClick={() => this.raiseSort("year")}
              >
                <small className="year">{concert.year}</small>
              </div>
              <div
                onClick={() => this.raiseSort("stars")}
                className="stars-button"
              >
                <div className="rating">{concert.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ConcertsCardDeck;
