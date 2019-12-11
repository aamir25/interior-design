const express = require('express');
const router = express.Router();

router.get('/:id', (request, response, next) => {
    response.status(200).json({
        success: true
    });
});

module.exports = router;
