import { cache } from 'react';
import { Video } from '@/types/content';

// Define types for YouTube API response
interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string;
    };
    title: string;
    description: string;
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
  contentDetails: {
    videoPublishedAt: string;
  };
}

interface YouTubeApiResponse {
  items: YouTubePlaylistItem[];
}

export const getYouTubeVideos = cache(async (language: 'en' | 'es' = 'en', maxResults: number = 12): Promise<Video[]> => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  
  // Select playlist based on language
  const PLAYLIST_ID = language === 'en' 
    ? process.env.NEXT_PUBLIC_YOUTUBE_EN_PLAYLIST_ID 
    : process.env.NEXT_PUBLIC_YOUTUBE_ES_PLAYLIST_ID;

  console.log(`Fetching videos for language: ${language}, playlist: ${PLAYLIST_ID}`);

  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not configured');
    return [];
  }

  if (!PLAYLIST_ID) {
    console.warn(`${language} playlist ID not configured`);
    return [];
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet,contentDetails&maxResults=${maxResults}`;
    console.log(`Fetching from YouTube API: ${url}`);
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    console.log(`YouTube API response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`YouTube API error: ${response.status} - ${errorText}`);
      throw new Error(`YouTube API error: ${response.status} - ${errorText}`);
    }

    const data: YouTubeApiResponse = await response.json();
    console.log(`YouTube API returned ${data.items.length} items`);
    
    const videos = data.items
      .map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.contentDetails.videoPublishedAt,
        thumbnailUrl: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '',
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      }));
      
    console.log(`Mapped ${videos.length} videos`);
    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
});