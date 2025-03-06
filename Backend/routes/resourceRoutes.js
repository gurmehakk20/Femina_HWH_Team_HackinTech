const express = require('express');
const router = express.Router();
const { getResources, createResource } = require('../controllers/resourceController');

// GET /api/resources - Fetch all resources
router.get('/', getResources);

// POST /api/resources - Create a new resource
router.post('/', createResource);

module.exports = router;