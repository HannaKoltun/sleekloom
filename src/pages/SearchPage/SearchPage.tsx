import SearchInput from '../../components/SearchInput/SearchInput';
import './SearchPage.css';
import { RxCross2 } from "react-icons/rx";


export default function SearchPage({ isSearchOpen, closeSearch }: any) {
    return (
        <>
            {isSearchOpen && (
                <div className='searchContainer'>

                    <RxCross2 onClick={closeSearch} style={{ cursor: 'pointer' }} className='crossIcon' />
                    <SearchInput></SearchInput>

                    <div className='popularSearches'>Popular searches:</div>
                    <div className='textSearch'></div>
                    <div className='textSearch'></div>
                    <div className='textSearch'></div>
                </div>
            )}
        </>
    );
}

