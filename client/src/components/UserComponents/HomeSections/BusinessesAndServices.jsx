import PropTypes from 'prop-types'; // Import PropTypes
import { Ban, CheckCheck, Codesandbox } from "lucide-react";

function BusinessesAndServices({ product }) {
    return (
        <div className={`relative w-full flex flex-wrap ${product?.open ? 'cursor-pointer' : 'cursor-not-allowed '}`}>
            <div className="w-full">
                <img
                    alt={product.title} // Use the product title as alt text for better accessibility
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={product?.images} // Render the single image
                />
                {/* Overlay div for title and description */}
                <div className={`absolute inset-0 flex flex-col justify-center items-start gap-10 bg-secondary rounded-lg transform translate-x-0 translate-y-0 ${product?.open ? 'bg-opacity-50' : 'bg-opacity-90'}`}>
                    <div className="flex flex-col justify-start items-start ml-6">
                        <h3 className="text-3xl font-semibold text-white">{product.title}</h3>
                        <div className="text-xl font-semibold text-white mt-3 flex gap-9">
                            <div className="flex items-center justify-center gap-2 ">
                                {product?.open ? <CheckCheck className="text-green-500" /> : <Ban className="text-red-800" />}
                                <p className={`${product?.open ? "text-green-500" : "text-red-800"}`}>{product?.open ? "Open" : "Close"}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Codesandbox />
                                <p className="">{product?.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Prop Types Validation
BusinessesAndServices.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        category: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired,
        open: PropTypes.bool.isRequired,
        phone: PropTypes.string,
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        whatsapp: PropTypes.string,
        Features: PropTypes.string,
    }).isRequired,
};

export default BusinessesAndServices;
