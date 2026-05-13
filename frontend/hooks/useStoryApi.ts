import { useState, useEffect } from 'react';
import { API_BASE } from '@/constants/Api';

export interface StoryCard {
  id: number;
  storyId: number;
  cardOrder: number;
  narrativeText: string;
  scienceFact: string;
  parentNote: string;
  hotspotX: number;
  hotspotY: number;
  sceneId: string;
}

export interface StoryLink {
  id: number;
  sourceStoryId: number;
  worldLabel: string;
  storyTitle: string;
  dotColor: string;
  targetStoryId: number | null;
}

export interface Story {
  id: number;
  title: string;
  subtitle: string;
  ageRange: string;
  readTime: string;
  worldTheme: {
    name: string;
    slug: string;
    backgroundColor: string;
    accentColor: string;
  };
  cards: StoryCard[];
  unlocks: StoryLink[];
}

export function useStory(id: number) {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}/stories/${id}`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<Story>;
      })
      .then(setStory)
      .catch(e => setError((e as Error).message))
      .finally(() => setLoading(false));
  }, [id]);

  return { story, loading, error };
}
