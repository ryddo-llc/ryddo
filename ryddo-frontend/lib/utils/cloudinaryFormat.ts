import { getCldImageUrl } from 'next-cloudinary';
export default function cloudinaryFormat(name: string): string {
  if (!name) {
    throw new Error('Invalid Input: name must be non-empty');
  }

  if (name.trim().length === 0) {
    throw new Error('Invalid input: name cannot be empty');
  }
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
