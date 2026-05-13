// Card 5 — Small survivors in underground burrow
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, G, Line, Path, RadialGradient, Rect, Stop,
} from 'react-native-svg';

export default function Scene4() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="s4earth" cx="50%" cy="100%" r="80%">
          <Stop offset="0%" stopColor="#2a1a08" />
          <Stop offset="50%" stopColor="#1a1006" />
          <Stop offset="100%" stopColor="#0d0803" />
        </RadialGradient>
        <RadialGradient id="s4warm" cx="50%" cy="60%" r="40%">
          <Stop offset="0%" stopColor="#c8660a" stopOpacity={0.25} />
          <Stop offset="100%" stopColor="#c8660a" stopOpacity={0} />
        </RadialGradient>
      </Defs>

      {/* Cold exterior sky */}
      <Rect width={400} height={260} fill="#0a0d0a" />
      <Rect x={0} y={240} width={400} height={30} fill="#1a1510" />

      {/* Burrow interior */}
      <Ellipse cx={200} cy={350} rx={155} ry={120} fill="url(#s4earth)" />
      <Ellipse cx={200} cy={360} rx={100} ry={80} fill="url(#s4warm)" />

      {/* Root system */}
      <Path d="M80,300 Q100,320 90,350" stroke="#2a1808" strokeWidth={2} fill="none" />
      <Path d="M90,350 Q85,380 95,400" stroke="#2a1808" strokeWidth={1.5} fill="none" />
      <Path d="M320,290 Q305,315 315,345" stroke="#2a1808" strokeWidth={2} fill="none" />
      <Path d="M315,345 Q320,375 308,400" stroke="#2a1808" strokeWidth={1.5} fill="none" />

      {/* Feathered dinosaur (proto-bird) */}
      <G transform="translate(115,310)">
        <Ellipse cx={50} cy={55} rx={35} ry={22} fill="#5a4a28" />
        <Path d="M25,48 Q15,40 10,50 Q18,55 25,52Z" fill="#6a5830" />
        <Path d="M20,58 Q8,52 5,62 Q14,66 20,62Z" fill="#6a5830" />
        <Path d="M80,45 Q92,38 96,48 Q88,52 80,49Z" fill="#6a5830" />
        <Path d="M82,58 Q95,53 98,63 Q90,67 82,62Z" fill="#6a5830" />
        <Path d="M85,55 Q105,45 110,55 Q100,62 85,58Z" fill="#7a6838" />
        <Path d="M85,58 Q108,55 112,65 Q102,70 85,62Z" fill="#7a6838" />
        <Ellipse cx={22} cy={35} rx={14} ry={16} fill="#5a4a28" />
        <Ellipse cx={12} cy={22} rx={13} ry={11} fill="#6a5830" />
        <Path d="M2,22 Q-6,20 -8,24 Q-5,27 2,25Z" fill="#8a7840" />
        <Circle cx={8} cy={19} r={4} fill="#1a1408" />
        <Circle cx={9} cy={18} r={1.5} fill="#d4a840" />
        <Line x1={40} y1={75} x2={35} y2={95} stroke="#4a3a20" strokeWidth={3} strokeLinecap="round" />
        <Line x1={60} y1={76} x2={55} y2={96} stroke="#4a3a20" strokeWidth={3} strokeLinecap="round" />
        <Path d="M35,95 Q28,98 24,96" stroke="#4a3a20" strokeWidth={2} fill="none" strokeLinecap="round" />
        <Path d="M55,96 Q48,99 44,97" stroke="#4a3a20" strokeWidth={2} fill="none" strokeLinecap="round" />
      </G>

      {/* Mammal (shrew-like) */}
      <G transform="translate(215,340)">
        <Ellipse cx={40} cy={40} rx={28} ry={14} fill="#3a3028" />
        <Ellipse cx={16} cy={32} rx={14} ry={12} fill="#3a3028" />
        <Path d="M5,32 Q-5,30 -8,34 Q-5,37 5,35Z" fill="#4a3e34" />
        <Ellipse cx={22} cy={22} rx={6} ry={8} fill="#3a3028" />
        <Circle cx={10} cy={30} r={3.5} fill="#0d0a08" />
        <Circle cx={11} cy={29} r={1.5} fill="rgba(180,160,120,0.5)" />
        <Path d="M68,40 Q85,35 88,45 Q82,50 68,44Z" fill="#3a3028" />
        <Line x1={25} y1={52} x2={20} y2={65} stroke="#2a2420" strokeWidth={2.5} strokeLinecap="round" />
        <Line x1={50} y1={53} x2={47} y2={66} stroke="#2a2420" strokeWidth={2.5} strokeLinecap="round" />
      </G>

      {/* Burrow walls */}
      <Path d="M45,350 Q50,250 60,240" stroke="#3a2510" strokeWidth={8} fill="none" strokeLinecap="round" />
      <Path d="M355,350 Q350,250 340,240" stroke="#3a2510" strokeWidth={8} fill="none" strokeLinecap="round" />

      {/* Cold sky over burrow entrance */}
      <Rect x={0} y={0} width={400} height={240} fill="#0a0c0a" />
      <Ellipse cx={200} cy={30} rx={240} ry={60} fill="rgba(30,28,20,0.7)" />

      {/* Cold stars */}
      <Circle cx={80} cy={60} r={1} fill="rgba(200,200,180,0.4)" />
      <Circle cx={160} cy={40} r={1} fill="rgba(200,200,180,0.35)" />
      <Circle cx={300} cy={55} r={1} fill="rgba(200,200,180,0.4)" />
      <Circle cx={350} cy={30} r={1} fill="rgba(200,200,180,0.3)" />

      {/* Entrance glow */}
      <Ellipse cx={200} cy={245} rx={50} ry={12} fill="rgba(200,130,30,0.08)" />
    </Svg>
  );
}
