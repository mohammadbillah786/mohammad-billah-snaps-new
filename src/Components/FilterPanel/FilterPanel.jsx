import Tags from "../../data/tags.json";
import "./filterpanel.scss";

export default function FilterPanel({ filterOpen, setSelectedTag, activeTag }) {

  const handleTagClick = (tag) => {
    setSelectedTag(tag === activeTag ? null : tag);
  };

  const listItems = Tags.map((tag, i) => (
    <ul 
      onClick={() => handleTagClick(tag)} 
      className={`tags__item ${tag === activeTag ? 'active' : ''}`} 
      key={i}
    >
      {tag}
    </ul>
  ));

  return (
    <div className="filterpanel">
      {filterOpen && <ul className="tags">{listItems}</ul>}
    </div>
  );
}
