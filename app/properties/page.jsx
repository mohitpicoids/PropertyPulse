import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import ConnectDb from "@/config/database";
import Property from "@/models/Property";

async function PropertiesPage({ searchParams }) {
    await ConnectDb();

    const pagenumber = await searchParams;
    const page = parseInt(pagenumber?.page || "1");
    const limit = 2;

    const total = await Property.countDocuments();
    const properties = await Property.find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

    const totalPages = Math.ceil(total / limit);

    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? (
                    <p>No properties found</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} />
            </div>
        </section>
    );
}

export default PropertiesPage;
