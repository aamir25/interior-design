const express = require('express');
const router = express.Router();

router.get('/:userId', (request, response, next) => {
    response.status(200).json({
        success: true
    });
});

router.post('/:userId', (request, response, next) => {
    response.status(200).json({
        success: true,
        settings: request.body
    });
});

module.exports = router;
