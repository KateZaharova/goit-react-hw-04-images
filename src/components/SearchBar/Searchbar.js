import {Searchbar, SearchForm, SearchFormBtn, SearchFormInput, SpanBtn} from "./SearchBar.styled";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({onSubmit}) => {
    return (
        <Searchbar className="searchbar">
  <SearchForm className="form" onSubmit={(evt) => {onSubmit(evt)}}>
          <SearchFormBtn type="submit" className="button" >
          <SpanBtn className="button-label"><AiOutlineSearch/></SpanBtn>
        </SearchFormBtn>

    <SearchFormInput
      className="input"
      type="text"
      name="request"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
          />
        </SearchForm>
</Searchbar>
    )
}
