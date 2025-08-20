import { NextResponse } from 'next/server';
import { getYouTubeVideos } from '@/lib/youtube';
import { Video } from '@/types/content';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language') || 'en';
  const maxResults = parseInt(searchParams.get('maxResults') || '12');

  try {
    const videos: Video[] = await getYouTubeVideos(
      language as 'en' | 'es', 
      maxResults
    );
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}