import React, { createContext, useContext, useState, useEffect } from 'react';

const ContextProvider = createContext();

export const useContextProvider = () => useContext(ContextProvider);

export const AppProvider = ({ children }) => {
  const [pagination, setPagination] = useState(1);
  const [characterData, setCharacterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');

  const fetchCharacterData = async () => {
    try {
      const api = `https://rickandmortyapi.com/api/character/?page=${pagination}&name=${searchTerm}&status=${statusFilter}&gender=${genderFilter}&species=${speciesFilter}`;
      const response = await fetch(api);
      const data = await response.json();
      setCharacterData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchCharacterData();
  }, [pagination, searchTerm, statusFilter, genderFilter, speciesFilter]);

  const contextValue = {
    pagination,
    setPagination,
    characterData,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    genderFilter,
    setGenderFilter,
    speciesFilter,
    setSpeciesFilter,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
};
