import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: ""
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
    console.log(this.menuOpen);
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const {
      items,
      textProperty,
      valueProperty,
      selectedItem,
      onItemSelect
    } = this.props;

    return (
      <React.Fragment>
        <div className="burger-menu">
          <Menu
            width={"60%"}
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            styles={styles}
          >
            <nav className="burger-list">
              {items.map(item => (
                <a
                  onClick={event => {
                    onItemSelect(item);
                    this.closeMenu();
                  }}
                  key={item[valueProperty]}
                  className={
                    item === selectedItem
                      ? "burger-item-list-selected"
                      : "burger-item-list"
                  }
                >
                  {item[textProperty]}
                </a>
              ))}
            </nav>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "30px",
    height: "24px",
    right: "20px",
    top: "15px"
  },
  bmBurgerBars: {
    background: "#485115",
    cursor: "pointer"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#ecdbc6"
  },
  bmMenu: {
    background: "#39364a",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    height: "100%"
  },
  bmMorphShape: {
    fill: "transparent"
  },
  bmItemList: {
    color: "red",
    padding: "0.8em",
    width: "100%"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3"
  }
};

BurgerMenu.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default BurgerMenu;
