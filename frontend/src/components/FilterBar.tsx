
import { useState } from 'react';
import { Filter, Search, X, SlidersHorizontal, DollarSign } from 'lucide-react';
import { categories } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  ecoImpactFilter: string;
  onEcoImpactChange: (impact: string) => void;
  priceRangeFilter: string;
  onPriceRangeChange: (price: string) => void;
}

export function FilterBar({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange,
  ecoImpactFilter,
  onEcoImpactChange,
  priceRangeFilter,
  onPriceRangeChange
}: FilterBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-white py-3 px-4 md:px-6 shadow-sm rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 font-medium">Filter Destinations</h2>
        <Button 
          variant="outline"
          size="sm"
          className="md:hidden flex items-center gap-1"
          onClick={toggleFilters}
        >
          {isFilterOpen ? (
            <>
              <X size={16} />
              <span>Close</span>
            </>
          ) : (
            <>
              <Filter size={16} />
              <span>Filter</span>
            </>
          )}
        </Button>
      </div>

      <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block mt-4 space-y-4`}>
        {/* Search input */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        {/* Category filters */}
        <div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-eco-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced filters */}
        <Collapsible
          open={isAdvancedFilterOpen}
          onOpenChange={setIsAdvancedFilterOpen}
          className="w-full border-t pt-3 mt-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">Advanced Filters</p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1 h-auto">
                <SlidersHorizontal size={16} />
                <span>{isAdvancedFilterOpen ? 'Hide' : 'Show'}</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="mt-3 space-y-4">
            {/* Eco Impact Score Filter */}
            <div>
              <p className="text-sm font-medium mb-2">Eco Impact Score</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onEcoImpactChange('all')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    ecoImpactFilter === 'all'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => onEcoImpactChange('high')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    ecoImpactFilter === 'high'
                      ? 'bg-eco-impact-high text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  High Impact
                </button>
                <button
                  onClick={() => onEcoImpactChange('medium')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    ecoImpactFilter === 'medium'
                      ? 'bg-eco-impact-medium text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Medium Impact
                </button>
                <button
                  onClick={() => onEcoImpactChange('low')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    ecoImpactFilter === 'low'
                      ? 'bg-eco-impact-low text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Low Impact
                </button>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <p className="text-sm font-medium mb-2">Price Range</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onPriceRangeChange('all')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    priceRangeFilter === 'all'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => onPriceRangeChange('$')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center ${
                    priceRangeFilter === '$'
                      ? 'bg-eco-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <DollarSign size={14} className="mr-0.5" />
                  Budget
                </button>
                <button
                  onClick={() => onPriceRangeChange('$$')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center ${
                    priceRangeFilter === '$$'
                      ? 'bg-eco-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <DollarSign size={14} className="mr-0.5" />
                  <DollarSign size={14} className="mr-0.5" />
                  Mid-range
                </button>
                <button
                  onClick={() => onPriceRangeChange('$$$')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center ${
                    priceRangeFilter === '$$$'
                      ? 'bg-eco-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <DollarSign size={14} className="mr-0.5" />
                  <DollarSign size={14} className="mr-0.5" />
                  <DollarSign size={14} className="mr-0.5" />
                  Luxury
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
