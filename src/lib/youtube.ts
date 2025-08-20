import { cache } from 'react';
import { Video } from '@/types/content';

export const getYouTubeVideos = cache(async (language: 'en' | 'es' = 'en', maxResults: number = 12): Promise<Video[]> => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  
  // Select playlist based on language
  const PLAYLIST_ID = language === 'en' 
    ? process.env.NEXT_PUBLIC_YOUTUBE_EN_PLAYLIST_ID 
    : process.env.NEXT_PUBLIC_YOUTUBE_ES_PLAYLIST_ID;

  if (!YOUTUBE_API_KEY || !PLAYLIST_ID) {
    console.warn(`YouTube API key or ${language} playlist ID not configured`);
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet,contentDetails&maxResults=${maxResults}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.items
      .map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.contentDetails.videoPublishedAt,
        thumbnailUrl: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      }));
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
});