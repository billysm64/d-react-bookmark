import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      bookmarks: [
        {
          tag: "food",
          link: "https://www.grubhub.com/restaurant/waffle-house-326-w-butler-rd-mauldin/2129684",
          active: false,
        }, {
          tag: "wiki",
          link: "https://en.wikipedia.org/wiki/Ramona_(1928_film)",
          active: false,
        }, {
          tag: "food",
          link: "https://www.foodlion.com/",
          active: false,
        }, {
          tag: "todo",
          link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-to-do-list-app",
          active: false,
        }, {
          tag: "wiki",
          link: "https://en.wikipedia.org/wiki/D._W._Griffith",
          active: false,
        }
      ]
    }
  };

  toggle(index) {
    let bookmarks = [...this.state.bookmarks]
    console.log(index)
    let bookmark = {...bookmarks[index]};
    bookmark.active = !bookmark.active;
    // bookmarks[index] = bookmark;
    this.setState({ bookmarks })
    // let current = this.state.bookmarks[index]
    // this.setState({this.current:true})
    // console.log(this.state.bookmarks[index])
  }

  render() {
    return (
      <React.Fragment>
        <BookmarkList bookmarks={this.state.bookmarks} toggle={this.toggle} />
      </React.Fragment>
    )
  }
}

class BookmarkList extends Component {
  render() {
    // console.log(this.state)
    // bookmarks = []
    // for index in len(this.props.bookmarks):
    //   bookmark = this.props.bookmarks[index]
    //   myhtml = f"<div key={index} { bookmark.active  } "
    //   bookmarks.append(my_html)

    //get a list of all the tags
    let tags = this.props.bookmarks.map(bookmark => bookmark.tag);
    //make the tags list unique
    tags = [...new Set(tags)]
    console.log(tags)
    //display all the tags
    const tagsHTML = tags.map((tag, index) => (
      <div key={index}>
        <h1 onClick={() => this.props.toggle(index)}>{tag}</h1>
      </div>
    ))

    //if someone clicks on a tag, show only links associated with that tag
    //

    const filteredBookmarks = this.props.bookmarks.filter(bookmark => bookmark.tag === "food")
    console.log(filteredBookmarks)

    // {
    //   bookmark.active
    //   ?
    //   <div><p>{bookmark.link}</p></div>
    //   :
    //   null
    // }

    return (
      <article><h1>===YOUR BOOKMARKS===</h1>{ tagsHTML }</article>
    )
  }
}

export default App;
