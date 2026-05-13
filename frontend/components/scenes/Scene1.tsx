// Card 2 — Asteroid approaching through atmosphere
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, Line, Path, RadialGradient, Rect, Stop,
} from 'react-native-svg';

export default function Scene1() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="s1space" cx="50%" cy="40%" r="80%">
          <Stop offset="0%" stopColor="#1a1a2e" />
          <Stop offset="50%" stopColor="#0d0d1a" />
          <Stop offset="100%" stopColor="#050508" />
        </RadialGradient>
        <RadialGradient id="s1ast" cx="40%" cy="35%" r="60%">
          <Stop offset="0%" stopColor="#e8a82a" />
          <Stop offset="40%" stopColor="#c8460a" />
          <Stop offset="100%" stopColor="#8b2a05" />
        </RadialGradient>
      </Defs>

      <Rect width={400} height={533} fill="url(#s1space)" />

      {/* Stars */}
      <Circle cx={40} cy={40} r={1.2} fill="white" opacity={0.7} />
      <Circle cx={90} cy={20} r={0.8} fill="white" opacity={0.5} />
      <Circle cx={150} cy={55} r={1.0} fill="white" opacity={0.6} />
      <Circle cx={220} cy={30} r={1.4} fill="white" opacity={0.8} />
      <Circle cx={300} cy={15} r={0.9} fill="white" opacity={0.5} />
      <Circle cx={350} cy={60} r={1.1} fill="white" opacity={0.7} />
      <Circle cx={380} cy={35} r={0.7} fill="white" opacity={0.4} />
      <Circle cx={60} cy={90} r={0.8} fill="white" opacity={0.4} />
      <Circle cx={310} cy={80} r={1.2} fill="white" opacity={0.6} />

      {/* Earth curve */}
      <Ellipse cx={200} cy={580} rx={280} ry={160} fill="#1a3a10" />
      <Ellipse cx={200} cy={575} rx={270} ry={150} fill="#1e4012" />
      <Ellipse cx={200} cy={540} rx={300} ry={120} fill="rgba(100,180,80,0.12)" />
      <Ellipse cx={200} cy={520} rx={290} ry={100} fill="rgba(80,150,60,0.08)" />

      {/* Asteroid trail */}
      <Line x1={350} y1={30} x2={200} y2={350} stroke="rgba(255,160,30,0.15)" strokeWidth={60} />
      <Line x1={350} y1={30} x2={200} y2={350} stroke="rgba(255,200,80,0.20)" strokeWidth={25} />
      <Line x1={350} y1={30} x2={200} y2={350} stroke="rgba(255,220,120,0.30)" strokeWidth={8} />

      {/* Asteroid */}
      <Circle cx={200} cy={350} r={42} fill="url(#s1ast)" />
      <Circle cx={185} cy={338} r={8} fill="rgba(0,0,0,0.25)" />
      <Circle cx={212} cy={358} r={5} fill="rgba(0,0,0,0.2)" />
      <Circle cx={195} cy={368} r={6} fill="rgba(0,0,0,0.2)" />
      <Circle cx={218} cy={335} r={4} fill="rgba(0,0,0,0.18)" />

      {/* Fire glow */}
      <Circle cx={200} cy={350} r={55} fill="rgba(200,80,10,0.18)" />
      <Circle cx={200} cy={350} r={68} fill="rgba(180,60,8,0.10)" />

      {/* Atmospheric heating */}
      <Path d="M160,350 Q175,380 185,395 Q165,405 155,390 Q145,370 160,350Z" fill="rgba(255,120,20,0.35)" />
      <Path d="M240,350 Q225,380 215,395 Q235,405 245,390 Q255,370 240,350Z" fill="rgba(255,120,20,0.30)" />
    </Svg>
  );
}
