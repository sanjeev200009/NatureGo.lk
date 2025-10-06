# How-To: Add a New API Route to Your Express Backend

## Step 1: Open the Route File
Navigate to `routes/api.js` or your main server file.

## Step 2: Add Your Endpoint
```js
app.get('/api/products', (req, res) => {
  res.json([/* your product data */]);
});