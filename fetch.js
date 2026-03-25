import https from 'https';

https.get('https://braxton-athens.gr/index.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      images.add(match[1]);
    }
    
    const bgRegex = /background-image:\s*url\(['"]?([^'"]+)['"]?\)/g;
    while ((match = bgRegex.exec(data)) !== null) {
      images.add(match[1]);
    }
    
    console.log(Array.from(images));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
