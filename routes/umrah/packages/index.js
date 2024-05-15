/**
 * @file /routes/umrah/packages/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 25 April, 2024
 * @update_date 15 May, 2024
 */

// dependencies
const express = require('express');

// express router
const router = express.Router();

// controllers
const {
    getUmrahPackages,
    getUmrahPackage,
    createUmrahPackage,
    updateUmrahPackage,
    deleteUmrahPackage,
} = require('../../../controllers/umrah/packages');

// middlewares
const { isAuthorized, isAllowed } = require('../../../middlewares/auth');
const {
    validateUmrahPackageId,
    validateUmrahPackageThumbnail,
    validateUmrahPackage,
    validateUmrahPackageGallery,
    validateUmrahOutbound,
    validateMakkahHotelTumbnail,
    validateMakkahHotelGallery,
    validateMakkahHotel,
    validateMadinahHotelTumbnail,
    validateMadinahHotelGallery,
    validateMadinahHotel,
    validateUmrahInbound,
    validateUmrahVisa,
    validateUmrahTransportation,
    validateUmrahZiyarah,
    validateDayWiseItineraryThumbnails,
    validateUmrahDayWiseItinerary,
    validateUmrahThumbnail,
    validateUmrah,
    validateTermsAndConditions,
} = require('../../../middlewares/validators/umrah/packages');
const {
    uploadPackageThumbnail,
    uploadPackageGallery,
    uploadMakkahHotelThumbnail,
    uploadMakkahHotelGallery,
    uploadMadinahHotelThumbnail,
    uploadMadinahHotelGallery,
    uploadUmrahDayWiseItineraryThumbnails,
    uploadUmrahThumbnail,
} = require('../../../middlewares/umrah/packages');

/**
 * @description check if user is authorized
 * @param {string} path - /customers
 * @param {function} middleware - ['isAuthorized']
 * @returns {object} - router
 * @method USE
 */
router.use(isAuthorized);

/**
 * @description get all umrah packages packages
 * @param {string} path - /umrah/packages
 * @param {function} middleware - ['isAllowed']
 * @param {function} controller - ['getUmrahPackages']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get('/', isAllowed(['admin']), getUmrahPackages);

/**
 * @description get umrah package package
 * @param {string} path - /umrah/packages/:id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateUmrahPackageId']
 * @param {function} controller - ['getUmrahPackage']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get('/:id', isAllowed(['admin']), validateUmrahPackageId, getUmrahPackage);

/**
 * @description create umrah package package
 * @param {string} path - /umrah/packages
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateUmrahPackageThumbnail', 'validateUmrahPackage']
 * @param {function} validator - ['validateUmrahPackageGallery', 'validateMakkahHotelTumbnail']
 * @param {function} validator - ['validateMakkahHotelGallery', 'validateMadinahHotelTumbnail']
 * @param {function} validator - ['validateMadinahHotelGallery', 'validateUmrahPackageThumbnail']
 * @param {function} middleware - ['uploadPackageThumbnail', 'uploadPackageGallery']
 * @param {function} middleware - ['uploadMakkahHotelThumbnail', 'uploadMakkahHotelGallery']
 * @param {function} middleware - ['uploadMadinahHotelThumbnail', 'uploadMadinahHotelGallery']
 * @param {function} middleware - ['uploadUmrahThumbnail']
 * @param {function} controller - ['createUmrahPackage']
 * @returns {object} - router
 * @access private - ['admin']
 * @method POST
 */
router.post(
    '/',
    isAllowed(['admin']),
    validateUmrahPackageThumbnail,
    validateUmrahPackage,
    validateUmrahPackageGallery,
    validateUmrahOutbound,
    validateMakkahHotelTumbnail,
    validateMakkahHotelGallery,
    validateMakkahHotel,
    validateMadinahHotelTumbnail,
    validateMadinahHotelGallery,
    validateMadinahHotel,
    validateUmrahInbound,
    validateUmrahVisa,
    validateUmrahTransportation,
    validateUmrahZiyarah,
    validateDayWiseItineraryThumbnails,
    validateUmrahDayWiseItinerary,
    validateUmrahThumbnail,
    validateUmrah,
    validateTermsAndConditions,
    uploadPackageThumbnail,
    uploadPackageGallery,
    uploadMakkahHotelThumbnail,
    uploadMakkahHotelGallery,
    uploadMadinahHotelThumbnail,
    uploadMadinahHotelGallery,
    uploadUmrahDayWiseItineraryThumbnails,
    uploadUmrahThumbnail,
    createUmrahPackage
);

/**
 * @description update umrah package package
 * @param {string} path - /umrah/packages/:id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateUmrahPackageThumbnail', 'validateUmrahPackage']
 * @param {function} validator - ['validateUmrahPackageGallery', 'validateMakkahHotelTumbnail']
 * @param {function} validator - ['validateMakkahHotelGallery', 'validateMadinahHotelTumbnail']
 * @param {function} validator - ['validateMadinahHotelGallery', 'validateUmrahPackageThumbnail']
 * @param {function} middleware - ['uploadPackageThumbnail', 'uploadPackageGallery']
 * @param {function} middleware - ['uploadMakkahHotelThumbnail', 'uploadMakkahHotelGallery']
 * @param {function} middleware - ['uploadMadinahHotelThumbnail', 'uploadMadinahHotelGallery']
 * @param {function} middleware - ['uploadUmrahThumbnail']
 * @param {function} controller - ['updateUmrahPackage']
 * @returns {object} - router
 * @access private - ['admin']
 * @method PATCH
 */
router.patch(
    '/:id',
    isAllowed(['admin']),
    validateUmrahPackageId,
    validateUmrahPackageThumbnail,
    validateUmrahPackage,
    validateUmrahPackageGallery,
    validateUmrahOutbound,
    validateMakkahHotelTumbnail,
    validateMakkahHotelGallery,
    validateMakkahHotel,
    validateMadinahHotelTumbnail,
    validateMadinahHotelGallery,
    validateMadinahHotel,
    validateUmrahInbound,
    validateUmrahVisa,
    validateUmrahTransportation,
    validateUmrahZiyarah,
    validateDayWiseItineraryThumbnails,
    validateUmrahDayWiseItinerary,
    validateUmrahThumbnail,
    validateUmrah,
    validateTermsAndConditions,
    uploadPackageThumbnail,
    uploadPackageGallery,
    uploadMakkahHotelThumbnail,
    uploadMakkahHotelGallery,
    uploadMadinahHotelThumbnail,
    uploadMadinahHotelGallery,
    uploadUmrahDayWiseItineraryThumbnails,
    uploadUmrahThumbnail,
    updateUmrahPackage
);

/**
 * @description delete umrah package package
 * @param {string} path - /umrah/packages/:id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateUmrahPackageId']
 * @param {function} controller - ['deleteUmrahPackage']
 * @returns {object} - router
 * @access private - ['admin']
 * @method DELETE
 */
router.delete('/:id', isAllowed(['admin']), validateUmrahPackageId, deleteUmrahPackage);

// export router
module.exports = router;