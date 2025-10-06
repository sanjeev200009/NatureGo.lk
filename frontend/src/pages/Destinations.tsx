
import { useState, useEffect } from 'react';
import { DestinationCard } from '@/components/DestinationCard';
import { FilterBar } from '@/components/FilterBar';
import { destinations, Destination } from '@/data/destinations';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [ecoImpactFilter, setEcoImpactFilter] = useState('all');
  const [priceRangeFilter, setPriceRangeFilter] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const destinationsPerPage = 6;

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = [...destinations];
      
      // Apply category filter
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(destination => 
          destination.category.includes(selectedCategory)
        );
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(destination => 
          destination.name.toLowerCase().includes(query) || 
          destination.location.toLowerCase().includes(query) ||
          destination.shortDescription.toLowerCase().includes(query)
        );
      }
      
      // Apply eco impact filter
      if (ecoImpactFilter !== 'all') {
        filtered = filtered.filter(destination => 
          destination.ecoImpactScore === ecoImpactFilter
        );
      }
      
      // Apply price range filter
      if (priceRangeFilter !== 'all') {
        filtered = filtered.filter(destination => 
          destination.priceRange.includes(priceRangeFilter)
        );
      }
      
      setFilteredDestinations(filtered);
      setCurrentPage(1); // Reset to first page when filters change
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, ecoImpactFilter, priceRangeFilter]);

  // Calculate pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleEcoImpactChange = (impact: string) => {
    setEcoImpactFilter(impact);
  };

  const handlePriceRangeChange = (price: string) => {
    setPriceRangeFilter(price);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Eco-Friendly Destinations</h1>
        <p className="text-lg text-gray-600">
          Discover sustainable travel spots across Sri Lanka
        </p>
      </div>
      
      <FilterBar 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        ecoImpactFilter={ecoImpactFilter}
        onEcoImpactChange={handleEcoImpactChange}
        priceRangeFilter={priceRangeFilter}
        onPriceRangeChange={handlePriceRangeChange}
      />
      
      {isLoading ? (
        // Loading skeleton
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow animate-pulse">
              <div className="h-52 bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : currentDestinations.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
          
          <div className="mt-6 text-center text-gray-600">
            Showing {indexOfFirstDestination + 1} - {Math.min(indexOfLastDestination, filteredDestinations.length)} of {filteredDestinations.length} destinations
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No destinations found</h3>
          <p className="text-gray-600">
            There are no destinations matching your selected filters.
            Try adjusting your search criteria or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Destinations;
