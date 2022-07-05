import { useCallback, useContext, useState } from 'react';
import clsx from "clsx";

import Search from '../components/Search';
import Loader from '../components/Loader';
import SearchResult from '../components/SearchResult';
import Menu from '../components/Menu'
import { requestSearch } from '../lib/searchApi.js';
import { ThemeContext } from '../lib/themeContext';

export default function Navbar(props) {

  const theme = useContext(ThemeContext);
  const categories = props;

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = useCallback(async term => {
    setLoading(true);
    const documentsArray = await requestSearch(term);
    setLoading(false);
    setDocuments(documentsArray.data);
  })

  const sideNavClasses = clsx({
    sidenav: true
  });

  const clearResults = useCallback(() => setDocuments([]));

  const renderedPapers = documents.map((document) => {
    return (
      <SearchResult
        key={document.id}
        title={document.attributes.Title}
        date={document.attributes.Date}
        author={document.attributes.Author}
        type={(document.attributes.Upload.data !== null) && document.attributes.Upload.data.attributes.ext}
      />
    )
  })

  return (
    <div className={sideNavClasses}>
      <div className='logo'>
        <strong>Criminal</strong> CPD Victoria
      </div>
      <Search onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <div className='sidenav__content'>
        <div className='search-results'>
          {loading && <Loader />}
          <div className='list-category'>
            <div className='list-title'>Papers</div>
            {documents.length === 0 && <div className='list-empty'>No papers found</div>}
            <ul>{renderedPapers}</ul>
          </div>
        </div>
        <div className='menu'>
          <Menu categories={props} />
        </div>
      </div>
    </div>
  )
}