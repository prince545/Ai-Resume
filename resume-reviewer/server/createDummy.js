import fs from 'fs';

// create a dummy pdf
fs.writeFileSync('dummy.pdf', '%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Outlines 2 0 R\n/Pages 3 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Outlines\n/Count 0\n>>\nendobj\n3 0 obj\n<<\n/Type /Pages\n/Count 1\n/Kids [ 4 0 R ]\n>>\nendobj\n4 0 obj\n<<\n/Type /Page\n/Parent 3 0 R\n/MediaBox [ 0 0 612 792 ]\n/Contents 5 0 R\n/Resources <<\n/ProcSet [ /PDF /Text ]\n/Font << /F1 6 0 R >>\n>>\n>>\nendobj\n5 0 obj\n<< /Length 44 >>\nstream\nBT\n/F1 24 Tf\n100 100 Td\n(Hello World) Tj\nET\nendstream\nendobj\n6 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/Name /F1\n/BaseFont /Helvetica\n/Encoding /MacRomanEncoding\n>>\nendobj\nxref\n0 7\n0000000000 65535 f \n0000000009 00000 n \n0000000074 00000 n \n0000000120 00000 n \n0000000179 00000 n \n0000000322 00000 n \n0000000415 00000 n \ntrailer\n<<\n/Size 7\n/Root 1 0 R\n>>\nstartxref\n521\n%%EOF');

console.log('Dummy PDF created.');
