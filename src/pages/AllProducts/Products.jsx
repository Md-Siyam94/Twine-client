import { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import CategoryProducts from '../../components/CategoryProducts';
import { Outlet } from 'react-router-dom';




import { Search, Filter, ShoppingBag, Loader } from 'lucide-react';
// import { supabase } from './lib/supabase';
// import { Product } from './types/product';
// import { ProductCard } from './components/ProductCard';

const Products = () => {
    // const [products] = useProducts()

    const [products,refetch, setProducts] = useProducts([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    const categories = ['All', 'Pant', 'Shirt', 'T-shirt', 'Panjabi', 'Sunglass'];
    const priceRanges = [
        { label: 'All', min: 0, max: Infinity },
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $500', min: 100, max: 500 },
        { label: 'Over $500', min: 500, max: Infinity },
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, searchQuery, selectedCategory, priceRange]);

    async function fetchProducts() {
        try {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProducts(data || []);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }


    function filterProducts() {
        let filtered = [...products];

        if (searchQuery) {
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        if (priceRange !== 'All') {
            const range = priceRanges.find((r) => r.label === priceRange);
            if (range) {
                filtered = filtered.filter(
                    (product) => product.price >= range.min && product.price < range.max
                );
            }
        }

        setFilteredProducts(filtered);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">


                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-64 hidden lg:block flex-shrink-1">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Filter size={20} className="text-gray-700" />
                                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Category</h3>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                                                        ? 'bg-teal-600 text-white'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Price Range</h3>
                                    <div className="space-y-2">
                                        {priceRanges.map((range) => (
                                            <button
                                                key={range.label}
                                                onClick={() => setPriceRange(range.label)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${priceRange === range.label
                                                        ? 'bg-teal-600 text-white'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {range.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {(selectedCategory !== 'All' || priceRange !== 'All' || searchQuery) && (
                                    <button
                                        onClick={() => {
                                            setSelectedCategory('All');
                                            setPriceRange('All');
                                            setSearchQuery('');
                                        }}
                                        className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-gray-600">
                                Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center py-20">
                                <Loader className="animate-spin text-teal-600" size={40} />
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
                                <ShoppingBag className="mx-auto text-gray-400 mb-4" size={48} />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600">Try adjusting your filters or search query</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product?._id} refetch={refetch} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;