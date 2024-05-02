import SearchInput from '../../components/SearchInput/SearchInput';
import './SearchPage.css';
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SlMagnifier } from "react-icons/sl";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ISearch } from '../../types/interface';

export default function SearchPage({ isSearchOpen, closeSearch }: ISearch) {

  const data = useSelector((state: any) => state.counter.data);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<({ id: number; title: string; })[]>([]);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const results = data.filter((item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [data, searchTerm]);


  return (
    <>
      {isSearchOpen && (
        <div className='searchContainer'>
          <RxCross2 onClick={closeSearch} style={{ cursor: 'pointer' }} className='crossIcon' />
          <input
            className='searchInput'
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Enter product name"></input>
          <SlMagnifier className='iconSearch' />



          {searchTerm.length > 0 && (
            <div className='searchResults'>
            {searchResults.map((item: any) => (
              <Link key={item.id} to={`${item.id}`} className='titleSearch'>
                {item.title}
              </Link>
            ))}
          </div>
          )}



        </div>
      )}
    </>
  );
}







