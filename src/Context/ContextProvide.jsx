import React,{createContext,useContext,useState} from "react";
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    /////////////////////////// filter side bar and search filters logic/////////////////////////
    const [filters,setFilters] = useState([])

    const clearFilters = ()=>{
        setFilters([]);
        window.location.reload()
    }

    // Handle brand change
    const handleBrandChange = (brand) => {
        setFilters((prev) => {
        // Check if the brand is already selected
        const isBrandSelected = prev.brand?.includes(brand);
        return {
            ...prev,
            brand: isBrandSelected
            ? prev.brand.filter((b) => b !== brand) // Unselect the brand if already selected
            : [...(prev.brand || []), brand], // Add the brand if not selected
        };
        });
        console.log('filters: ',filters);
        
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setFilters((prev) => {
        // Check if the category is already selected
        const isCategorySelected = prev.category?.includes(category);
        return {
            ...prev,
            category: isCategorySelected
            ? prev.category.filter((b) => b !== category) // Unselect the category if already selected
            : [...(prev.category || []), category], // Add the category if not selected
        };
        });
        console.log('filters: ',filters);
        
    };

    // Handle Year change
    const handleYearChange = (year) => {
        setFilters((prev) => {
            // Convert year to number
            const yearInt = parseInt(year, 10);

            // Check if the year is already selected
            const isYearSelected = prev.year?.includes(yearInt);
            return {
                ...prev,
                year: isYearSelected
                    ? prev.year.filter((b) => b !== yearInt) // Unselect the year if already selected
                    : [...(prev.year || []), yearInt], // Add the year if not selected
            };
        });
        console.log('filters: ',filters);
    };


    const handlePriceRangeChange = (priceRange) => {
        setFilters((prev) => ({ ...prev, priceRange: priceRange }));
      };

    const [isUsed,setIsUsed] = useState('')

    const setUnused = ()=>{
        setIsUsed('unused')
    }
    const setUsed = ()=>{
        setIsUsed('used')
    }

    return(
        <StateContext.Provider value={{isUsed,setUsed,setUnused,filters,clearFilters,handleBrandChange,handleCategoryChange,handleYearChange}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)