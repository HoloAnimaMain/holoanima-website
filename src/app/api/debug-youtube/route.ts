import { NextResponse } from 'next/server';

interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string;
    };
    title: string;
    thumbnails?: {
      default?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
  };
}

interface YouTubeApiResponse {
  items: YouTubePlaylistItem[];
}

export async function GET() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_EN_PLAYLIST_ID;

  console.log('Debug API route called');
  console.log('YOUTUBE_API_KEY:', YOUTUBE_API_KEY ? 'Set' : 'Not set');
  console.log('NEXT_PUBLIC_YOUTUBE_EN_PLAYLIST_ID:', PLAYLIST_ID);

  if (!YOUTUBE_API_KEY || !PLAYLIST_ID) {
    return NextResponse.json({
      error: 'Missing environment variables',
      YOUTUBE_API_KEY: YOUTUBE_API_KEY ? 'Set' : 'Not set',
      NEXT_PUBLIC_YOUTUBE_EN_PLAYLIST_ID: PLAYLIST_ID ? 'Set' : 'Not set'
    });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet,contentDetails&maxResults=3`;
    console.log(`Fetching from YouTube API: ${url}`);
    
    const response = await fetch(url);

    console.log(`YouTube API response status: ${response.status}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`YouTube API error: ${response.status} - ${errorText}`);
      return NextResponse.json({
        error: `YouTube API error: ${response.status}`,
        statusText: response.statusText,
        errorText: errorText
      });
    }

    const data: YouTubeApiResponse = await response.json();
    console.log(`YouTube API returned ${data.items.length} items`);
    
    // Return just the information we need to debug thumbnails
    const debugData = data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnailUrls: item.snippet.thumbnails,
      hasThumbnails: !!item.snippet.thumbnails
    }));

    return NextResponse.json({
      message: 'Successfully fetched data',
      YOUTUBE_API_KEY: YOUTUBE_API_KEY.substring(0, 5) + '...', // Only show first 5 characters for security
      PLAYLIST_ID,
      videoCount: data.items.length,
      videos: debugData
    });
  } catch (error) {
    console.error('Error in debug API route:', error);
    return NextResponse.json({
      error: 'Failed to fetch from YouTube API',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}