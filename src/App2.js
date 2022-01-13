import logo2 from "./assets/onepunch.jpeg";
import { useState } from "react";
import AddButton from "./Components/AddButton";
import SearchBar from "./Components/SearchBar";
import LinkList from "./Components/LinkList";
import DeleteButton from "./Components/DeleteButton"
import './App2.css';

export default function App2() {
    console.log("on begin")
    const storedLinks = localStorage.getItem("links");
    const parsedLinks =
    storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);

    const [links, setLinks] = useState(
    Array.isArray(parsedLinks) ? parsedLinks : []
    );

    const [search, setSearch] = useState("");
  const onSearchBarChange = (search) => {
    setSearch(search);
  };

  const filteredLinks = (search) => {
      console.log("on filter")
    const lowerSearch = search.toLowerCase();
    return links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return tag.name.toLowerCase().indexOf(lowerSearch) > -1;
          })
          .indexOf(true) > -1
      );
    });
  };

  const onDeleteLink = () => {
      // console.log('hi')
      // console.log(links)
      // console.log(parsedLinks)
      const storedLinks = localStorage.removeItem("links");
      setLinks([])
      
      
  }

  const onAddButtonAddLink = (name, url, tags) => {
  
    const newLinks = links.concat([
      {
        name,
        url,
        tags,
      },
    ]);
    console.log(1, newLinks)
    console.log(2, links)
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    console.log(3, localStorage.getItem("links"))
  };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-5 photo">
                    <img src={logo2} className="logo2" alt="logo2"/>
                </div>
                <div className="col-7 sea">
                    <h1>Link List</h1>
                    <p>Links Shared: <span>{links.length}</span></p>
                    <AddButton  onAddLinkProps={onAddButtonAddLink}/>
                    <h3>You may search here!</h3>
                    <SearchBar onSearchChangeProp={onSearchBarChange} />
                    <LinkList links={filteredLinks(search)} />
                    <DeleteButton onDeleteLink={onDeleteLink}/>
                </div>
            </div>
        </div>
    )
}