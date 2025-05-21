import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const productName = searchParams.get('name');
  const productType = searchParams.get('type');

  if (!productName || !productType) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const normalizedName = productName
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-');
    const prefix = `${productType}/${normalizedName}`;
    const { blobs } = await list({ prefix });

    return NextResponse.json({
      url: blobs.length > 0 ? blobs[0].url : null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch image', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
