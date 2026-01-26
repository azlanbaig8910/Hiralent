// import { Router } from 'express';
// import { 
//   createProfileController,
//   getProfileController,
//   updateProfileController,
//   getCompanyStatsController
// } from '../controller/company/profile.controller';
// import { checkAuth } from '../middlewares/checkAuth.middleware';
// import { validateBody } from '../middlewares/validateBody.middleware';
// import { 
//   createCompanyProfileSchema,
//   updateCompanyProfileSchema 
// } from '../validation/company.schema';

// const router = Router();

// router.get('/health', (req, res) => {
//   res.json({ message: 'Company routes working', timestamp: new Date().toISOString() });
// });
// // router.get('/profile', getProfileController);  // <-- Celle-ci manque !

// router.get('/profile', checkAuth, getProfileController);

// router.use(checkAuth);

// router.post(
//   '/create-profile',
//   checkAuth,
//   validateBody(createCompanyProfileSchema),
//   createProfileController
// );
// router.patch(
//   '/profile',
//   validateBody(updateCompanyProfileSchema),
//   updateProfileController
// );

// router.get('/stats', getCompanyStatsController);

// export default router;


import { Router } from 'express';
import {
  createProfileController,
  getProfileController,
  updateProfileController,
  getCompanyStatsController
} from '../controller/company/profile.controller';
import { checkAuth } from '../middlewares/checkAuth.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import {
  createCompanyProfileSchema,
  updateCompanyProfileSchema
} from '../validation/company.schema';

const router = Router();

/**
 * Health check
 */
router.get('/health', (req, res) => {
  res.json({ message: 'Company routes working' });
});

/**
 * 🔐 ALL ROUTES BELOW REQUIRE LOGIN
 */
router.use(checkAuth);

/**
 * Get company profile
 * IMPORTANT: should NOT fail if profile doesn't exist
 */
router.get('/profile', getProfileController);

/**
 * Create profile
 */
router.post(
  '/create-profile',
  validateBody(createCompanyProfileSchema),
  createProfileController
);

/**
 * Update profile
 */
router.patch(
  '/profile',
  validateBody(updateCompanyProfileSchema),
  updateProfileController
);

/**
 * Dashboard stats
 */
router.get('/stats', getCompanyStatsController);

export default router;