import Scene0 from './Scene0';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';
import React from 'react';

const SCENE_MAP: Record<string, React.ComponentType> = {
  'scene-0': Scene0,
  'scene-1': Scene1,
  'scene-2': Scene2,
  'scene-3': Scene3,
  'scene-4': Scene4,
  'scene-5': Scene5,
};

export function getScene(sceneId: string): React.ReactElement | null {
  const Component = SCENE_MAP[sceneId];
  return Component ? React.createElement(Component) : null;
}
