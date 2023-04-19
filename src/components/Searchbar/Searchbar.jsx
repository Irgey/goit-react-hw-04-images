import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
export const Searchbar = ({ formSubmitHandler }) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={formSubmitHandler}>
        <StyledSearchFormButton type="submit">
          <IconContext.Provider value={{ size: '18px' }}>
            {' '}
            <AiOutlineSearch />
          </IconContext.Provider>
        </StyledSearchFormButton>

        <StyledSearchFormInput
          name="searchInput"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>{' '}
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  formSubmitHandler: PropTypes.func,
};
const StyledSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`;

// const StyledSearchFormButtonLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

const StyledSearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const StyledSearchFormButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-style: none;
  display: flex;
`;
