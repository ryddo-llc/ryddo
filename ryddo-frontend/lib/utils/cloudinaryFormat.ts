import { getCldImageUrl } from 'next-cloudinary';
export default function cloudinaryFormat(name: string): string {
  //making sure name matches the same format its in the cloudinary CDN
  const cloudinaryFormattedName = name
    .replace(/\s+/g, '-')
    .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
    .toLowerCase();

  const imageUrl = getCldImageUrl({
    src: cloudinaryFormattedName,
  });

  return imageUrl;
}
