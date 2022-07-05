import moment from 'moment';

export default function SearchResult(props) {

  const { title, author, type, date } = props;

  const types = {
    '.pdf': '/icons/icon_pdf.svg',
    '.doc': 'icons/icon_doc.svg'
  }

  const extensionImg = types.hasOwnProperty(type) ? types[type] : types['.doc'];

  return (
    <li className='search-result'>
      <a href=''>
        <img src={extensionImg} />{console.log(types[type])}
        <div className='search-result__content'>
          <div className='search-result__title'>{title}</div>
          <div className='search-result__details'>
            {author.slice(0, 28)}...<span>{moment(date).format('MMMM YYYY')}</span>
          </div>
        </div>
      </a>
    </li>
  )
}