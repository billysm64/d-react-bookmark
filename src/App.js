import React, { Component } from "react";

class BookmarkList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
      filter: null
    };

    this.toggle = this.toggle.bind(this);
  };

  componentDidMount() {
    const bookmarks = [
      {
        tag: "food",
        link: "https://www.grubhub.com/restaurant/waffle-house-326-w-butler-rd-mauldin/2129684",
      }, {
        tag: "wiki",
        link: "https://en.wikipedia.org/wiki/Ramona_(1928_film)",
      }, {
        tag: "food",
        link: "https://www.foodlion.com/",
      }, {
        tag: "todo",
        link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-to-do-list-app",
      }, {
        tag: "wiki",
        link: "https://en.wikipedia.org/wiki/D._W._Griffith",
      }
    ];

    this.setState({ bookmarks });
  }

  toggle(tag) {
    // set the filter on state to the tag that was clicked
    // if no tag is passed to the method, then clear the filter by setting the value to null
    tag ? this.setState({filter: tag}) : this.setState({filter: null});
  }

  render() {

    // get a list of all the tags
    let tags = this.state.bookmarks.map(bookmark => bookmark.tag);
    // make the tags list unique
    tags = [...new Set(tags)]
    // generator tags HTML
    const tagsHTML = tags.map((tag, index) => (
      <div key={index}>
        <h2 onClick={() => this.toggle(tag)}>{tag}</h2>
      </div>
    ));


    let bookmarks = this.state.bookmarks
      .filter(bookmark => this.state.filter ? bookmark.tag === this.state.filter : bookmark)
      .map(bookmark => (
        <div>
          <a href={bookmark.link}>{bookmark.link}</a>
        </div>
      ));

    return (
      <main>
        <h1>===YOUR BOOKMARKS===</h1>
        <h2 onClick={() => this.toggle()}>All</h2>
        { tagsHTML }
        { bookmarks }
      </main>
    )
  }
}

export default BookmarkList;
