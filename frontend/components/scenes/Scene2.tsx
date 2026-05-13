// Card 3 — Chicxulub Impact
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, Path, RadialGradient, Rect, Stop,
} from 'react-native-svg';

export default function Scene2() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="s2bg" cx="50%" cy="55%" r="70%">
          <Stop offset="0%" stopColor="#5a2008" />
          <Stop offset="40%" stopColor="#3a1005" />
          <Stop offset="100%" stopColor="#0d0804" />
        </RadialGradient>
        <RadialGradient id="s2blast" cx="50%" cy="60%" r="50%">
          <Stop offset="0%" stopColor="#ffcc44" stopOpacity={0.9} />
          <Stop offset="25%" stopColor="#ff6620" stopOpacity={0.7} />
          <Stop offset="60%" stopColor="#cc2200" stopOpacity={0.4} />
          <Stop offset="100%" stopColor="#cc2200" stopOpacity={0} />
        </RadialGradient>
      </Defs>

      <Rect width={400} height={533} fill="url(#s2bg)" />

      {/* Ocean */}
      <Ellipse cx={200} cy={320} rx={320} ry={80} fill="#0a1a2a" opacity={0.6} />

      {/* Shockwave rings */}
      <Circle cx={200} cy={320} r={30} fill="none" stroke="rgba(255,160,40,0.6)" strokeWidth={3} />
      <Circle cx={200} cy={320} r={70} fill="none" stroke="rgba(255,120,20,0.4)" strokeWidth={2.5} />
      <Circle cx={200} cy={320} r={120} fill="none" stroke="rgba(255,80,10,0.25)" strokeWidth={2} />
      <Circle cx={200} cy={320} r={180} fill="none" stroke="rgba(200,60,8,0.15)" strokeWidth={1.5} />

      {/* Blast column */}
      <Path d="M160,320 Q155,200 145,100 Q180,60 200,40 Q220,60 255,100 Q245,200 240,320Z" fill="rgba(255,140,30,0.4)" />
      <Path d="M170,320 Q167,220 162,130 Q185,95 200,80 Q215,95 238,130 Q233,220 230,320Z" fill="rgba(255,180,60,0.5)" />
      <Path d="M180,320 Q178,240 175,160 Q190,130 200,115 Q210,130 225,160 Q222,240 220,320Z" fill="rgba(255,210,90,0.55)" />

      {/* Impact glow */}
      <Ellipse cx={200} cy={320} rx={100} ry={40} fill="url(#s2blast)" />

      {/* Debris arcs */}
      <Path d="M200,300 Q120,200 60,280" stroke="rgba(255,140,40,0.5)" strokeWidth={3} fill="none" />
      <Path d="M200,300 Q280,180 340,260" stroke="rgba(255,140,40,0.5)" strokeWidth={3} fill="none" />
      <Path d="M200,300 Q160,150 100,180" stroke="rgba(255,100,20,0.4)" strokeWidth={2} fill="none" />
      <Path d="M200,300 Q240,140 300,170" stroke="rgba(255,100,20,0.4)" strokeWidth={2} fill="none" />

      {/* Dust clouds */}
      <Ellipse cx={200} cy={130} rx={120} ry={60} fill="rgba(80,50,20,0.6)" />
      <Ellipse cx={140} cy={100} rx={80} ry={45} fill="rgba(70,45,18,0.55)" />
      <Ellipse cx={265} cy={110} rx={75} ry={40} fill="rgba(75,48,20,0.5)" />
      <Ellipse cx={200} cy={80} rx={90} ry={35} fill="rgba(60,40,15,0.45)" />

      {/* Horizon + fire */}
      <Rect x={0} y={430} width={400} height={103} fill="#1a0804" />
      <Path d="M0,430 Q50,400 100,420 Q150,440 200,415 Q250,390 300,410 Q350,430 400,415 L400,430Z" fill="#3a1005" />
      <Path d="M0,430 Q30,410 60,425 Q90,440 120,420 Q150,400 180,418" stroke="rgba(255,80,10,0.4)" strokeWidth={8} fill="none" />
      <Path d="M220,416 Q250,400 280,418 Q310,436 340,420 Q370,404 400,418" stroke="rgba(255,80,10,0.35)" strokeWidth={6} fill="none" />
    </Svg>
  );
}
