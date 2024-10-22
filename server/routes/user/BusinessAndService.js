const express = require('express');


const { getUserWithBusinesses, createBusiness , handleImageUpload , deleteBusiness , updateBusiness } = require('../../controllers/user/BusinessAndServiceController');

const {upload} = require('../../helpers/cloudinary')


const router = express.Router();


router.post('/upload-image' , upload.single('my_file') , handleImageUpload);

router.post('/createBusiness', createBusiness);
router.put('/updateBusiness/:businessId:/:userId', updateBusiness);  
router.delete('/deleteBusiness/:businessId/:userId', deleteBusiness);  
router.get('/getUserWithBusinesses', getUserWithBusinesses);  


module.exports = router;