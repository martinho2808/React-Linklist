

export default function LinkList(props){
    return (
        <>
          {props.links && props.links.length > 0
            ? props.links.map((link, i) => (
                <div key={i} className="Linklist">
                  <div><a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a> --> {link.url}</div>
                  {link.tags && link.tags.length > 0
                    ? link.tags.map((tag, i) => <div key={i} className="tagbox"> {tag.name} </div>)
                    : " "}
                   
                </div>
                
              ))
            : <h1>Empty</h1>}
        </>
      );
    }
