import country from '../../static/CountryData'
import Card from './pages/Card'

function RegionFilter({ regionValue }) {
    // Use filter and map together to filter countries by region and map them to Card components
    const filteredCountries = country
        .filter((item) => item.region.includes(regionValue))
        .map((item) => (
            <Card
                key={item.id} // Make sure to add a unique key for each Card component
                img={item.flags.png}
                name={item.name.common}
                population={item.population}
                capital={item.capital}
                region={item.region}
                // data={"sahi hai"}
            />
        ));

    // Return the mapped JSX elements
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
            {filteredCountries}
        </div>
    );
}

export default RegionFilter;
