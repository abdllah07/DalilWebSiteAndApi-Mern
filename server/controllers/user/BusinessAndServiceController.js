const { imageUploadUtil } = require('../../helpers/cloudinary');
const BusinessAndService = require('../../models/BusinessAndService');
const User = require('../../models/User');


const handleImageUpload = async (req , res ) => {
    try {

        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const url = "data:"+req.file.mimetype +";base64," + b64;
        const result = await imageUploadUtil(url);

        res.json({
            success : true,
            result
        })
        
    } catch (error) {
        console.log(error);
        res.json({success : false , message : 'error catch' });
        
    }
};

const createBusiness = async (req, res) => {
    try {
        const { title, description, category, images, open, phone, facebook, instagram, whatsapp, Features, userId } = req.body;

        // Find the user who is creating the business
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new business
        const newBusiness = new BusinessAndService({
            title,
            description,
            category: category || 'services', // Default to 'services' if not provided
            images,
            open: open !== undefined ? open : true, // Default to true if not provided
            phone,
            facebook,
            instagram,
            whatsapp,
            Features,
            owner: user._id // Link the business to the user
        });

        // Save the business
        const savedBusiness = await newBusiness.save();

        // Add the business to the user's list of businesses
        user.businesses.push(savedBusiness._id);
        await user.save();

        res.status(201).json({ message: "Business created successfully", business: savedBusiness });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating business" });
    }
};

const getUserWithBusinesses = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find the user and populate their businesses
        const user = await User.findById(userId).populate('businesses');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user data" });
    }
};

const deleteBusiness = async (req, res) => {
    try {
        const { businessId, userId } = req.params;

        // Find the business
        const business = await BusinessAndService.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: "Business not found" });
        }

        // Check if the business owner is the user
        if (business.owner.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized to delete this business" });
        }

        // Remove the business
        await business.remove();

        // Remove the business from the user's businesses array
        await User.findByIdAndUpdate(userId, { $pull: { businesses: businessId } });

        res.status(200).json({ message: "Business deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting business" });
    }
};


const updateBusiness = async (req, res) => {
    try {
        const { businessId, userId } = req.params;
        const { title, description, category, images, open, phone, facebook, instagram, whatsapp, Features, rating, comment } = req.body;

        // Find the business
        const business = await BusinessAndService.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: "Business not found" });
        }

        // Check if the business owner is the user
        if (business.owner.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized to update this business" });
        }

        // Update the business with the provided data
        business.title = title || business.title;
        business.description = description || business.description;
        business.category = category || business.category;
        business.images = images || business.images;
        business.open = open !== undefined ? open : business.open;
        business.phone = phone || business.phone;
        business.facebook = facebook || business.facebook;
        business.instagram = instagram || business.instagram;
        business.whatsapp = whatsapp || business.whatsapp;
        business.Features = Features || business.Features;

        // Save the updated business
        const updatedBusiness = await business.save();

        res.status(200).json({ message: "Business updated successfully", business: updatedBusiness });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating business" });
    }
};

module.exports = { getUserWithBusinesses, createBusiness , handleImageUpload , deleteBusiness , updateBusiness };
