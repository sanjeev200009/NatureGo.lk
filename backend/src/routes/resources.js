const express = require('express');
const router = express.Router();

// Get all resources
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Eco-tourism resources and guides',
    data: {
      resources: [
        {
          id: '1',
          title: '5 Tips for Building an Effective CI/CD Pipeline',
          content: 'Continuous Integration and Deployment helps ensure code is built, tested, and deployed efficiently...',
          author: 'Sanjeev',
          date: 'April 23, 2025',
          tags: ['CI/CD', 'DevOps', 'GitHub Actions'],
          category: 'Technology'
        },
        {
          id: '2',
          title: 'How to Write Pull Request Templates that Actually Help',
          content: 'Pull request templates can guide contributors to deliver higher quality code...',
          author: 'Sanjeev',
          date: 'April 22, 2025',
          tags: ['GitHub', 'Code Review', 'Best Practices'],
          category: 'Development'
        }
      ],
      total: 2
    }
  });
});

// Get single resource by ID
router.get('/:id', (req, res) => {
  // This will match your frontend resources data structure
  const resources = [
    {
      id: '1',
      title: '5 Tips for Building an Effective CI/CD Pipeline',
      content: `Continuous Integration and Deployment helps ensure code is built, tested, and deployed efficiently. Here are 5 tips:

1. Keep pipelines fast and focused
2. Use caching for dependencies
3. Automate security scans
4. Trigger builds on pull requests, not just merges
5. Monitor failures with alerting tools

Following these steps ensures healthier DevOps practices.`,
      author: 'Sanjeev',
      date: 'April 23, 2025',
      tags: ['CI/CD', 'DevOps', 'GitHub Actions'],
    },
    {
      id: '2',
      title: 'How to Write Pull Request Templates that Actually Help',
      content: `Pull request templates can guide contributors to deliver higher quality code. Include:

- A short description of the change
- Screenshots (if UI-related)
- Steps to reproduce or test
- Checklist (tests added, docs updated, etc.)

This saves reviewers time and improves collaboration.`,
      author: 'Sanjeev',
      date: 'April 22, 2025',
      tags: ['GitHub', 'Code Review', 'Best Practices'],
    }
  ];

  const resource = resources.find(r => r.id === req.params.id);
  
  if (resource) {
    res.json({
      success: true,
      data: resource
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Resource not found'
    });
  }
});

// Create new resource (admin only)
router.post('/', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Create resource endpoint - Coming soon'
  });
});

// Update resource (admin only)
router.put('/:id', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Update resource endpoint - Coming soon'
  });
});

// Delete resource (admin only)
router.delete('/:id', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Delete resource endpoint - Coming soon'
  });
});

module.exports = router;