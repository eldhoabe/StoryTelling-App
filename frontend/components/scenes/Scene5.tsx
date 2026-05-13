// Card 6 — Modern bird on branch + dinosaur fossil
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, G, Line, LinearGradient, Path, RadialGradient, Rect, Stop,
} from 'react-native-svg';

export default function Scene5() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <LinearGradient id="s5dawn" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#0d2a1a" />
          <Stop offset="40%" stopColor="#1a3d20" />
          <Stop offset="70%" stopColor="#2a5a28" />
          <Stop offset="100%" stopColor="#1e4018" />
        </LinearGradient>
        <RadialGradient id="s5rise" cx="50%" cy="65%" r="45%">
          <Stop offset="0%" stopColor="rgba(200,134,10,0.35)" />
          <Stop offset="60%" stopColor="rgba(180,100,8,0.12)" />
          <Stop offset="100%" stopColor="rgba(180,100,8,0)" />
        </RadialGradient>
      </Defs>

      <Rect width={400} height={533} fill="url(#s5dawn)" />
      <Ellipse cx={200} cy={320} rx={200} ry={150} fill="url(#s5rise)" />

      {/* Background forest */}
      <Rect x={0} y={200} width={30} height={280} rx={5} fill="#0e2209" opacity={0.6} />
      <Rect x={350} y={180} width={35} height={300} rx={5} fill="#0e2209" opacity={0.55} />
      <Rect x={15} y={150} width={25} height={320} rx={4} fill="#0d2008" opacity={0.5} />

      {/* Stone slab with fossil */}
      <Rect x={80} y={320} width={240} height={140} rx={8} fill="#2a2418" opacity={0.9} />
      <Rect x={85} y={325} width={230} height={130} rx={6} fill="#252018" />

      {/* Fossil imprint */}
      <G opacity={0.5} transform="translate(120,350)">
        <Ellipse cx={60} cy={40} rx={28} ry={18} fill="none" stroke="#4a4030" strokeWidth={1.5} />
        <Path d="M35,35 Q20,25 15,30 Q18,38 35,40Z" fill="none" stroke="#4a4030" strokeWidth={1.5} />
        <Line x1={88} y1={40} x2={120} y2={35} stroke="#4a4030" strokeWidth={1.5} />
        <Line x1={50} y1={58} x2={40} y2={85} stroke="#4a4030" strokeWidth={2} />
        <Line x1={70} y1={58} x2={62} y2={85} stroke="#4a4030" strokeWidth={2} />
        <Path d="M88,45 Q100,38 115,42 Q108,50 88,50Z" fill="#4a4030" opacity={0.3} />
      </G>

      {/* Stone crack */}
      <Path d="M80,380 Q140,375 200,382 Q260,389 320,378" stroke="rgba(60,50,30,0.4)" strokeWidth={1} fill="none" />

      {/* Branch */}
      <Line x1={120} y1={230} x2={300} y2={215} stroke="#1a3010" strokeWidth={8} strokeLinecap="round" />

      {/* Sparrow */}
      <G transform="translate(185,185)">
        <Ellipse cx={30} cy={32} rx={22} ry={14} fill="#7a5a30" />
        <Path d="M12,30 Q10,22 18,20 Q24,28 12,34Z" fill="#5a4020" />
        <Path d="M46,28 Q50,20 42,18 Q36,26 46,32Z" fill="#5a4020" />
        <Ellipse cx={30} cy={35} rx={12} ry={9} fill="#c8b890" />
        <Circle cx={14} cy={22} r={13} fill="#6a4a28" />
        <Path d="M10,12 Q14,8 18,12 Q16,16 10,14Z" fill="#3a2810" />
        <Circle cx={9} cy={19} r={4.5} fill="#0d0a06" />
        <Circle cx={10} cy={18} r={1.8} fill="rgba(220,200,150,0.6)" />
        <Circle cx={9.5} cy={17.5} r={0.8} fill="white" opacity={0.7} />
        <Path d="M2,20 Q-5,18 -7,22 Q-4,25 2,23Z" fill="#8a7840" />
        <Path d="M2,23 Q-4,25 -6,29 Q-2,30 2,26Z" fill="#7a6830" />
        <Path d="M50,32 Q68,28 70,36 Q62,42 50,38Z" fill="#5a4020" />
        <Line x1={24} y1={46} x2={20} y2={58} stroke="#4a3818" strokeWidth={2} strokeLinecap="round" />
        <Line x1={36} y1={46} x2={33} y2={58} stroke="#4a3818" strokeWidth={2} strokeLinecap="round" />
        <Path d="M20,58 Q12,60 8,57" stroke="#4a3818" strokeWidth={1.5} fill="none" strokeLinecap="round" />
        <Path d="M33,58 Q25,60 21,57" stroke="#4a3818" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      </G>

      {/* Morning light rays */}
      <Line x1={200} y1={290} x2={100} y2={0} stroke="rgba(200,160,40,0.04)" strokeWidth={50} />
      <Line x1={200} y1={290} x2={300} y2={0} stroke="rgba(200,160,40,0.03)" strokeWidth={40} />

      {/* Ground */}
      <Rect x={0} y={460} width={400} height={73} fill="#0d1f08" />
      <Ellipse cx={200} cy={460} rx={240} ry={20} fill="#0f2409" />
    </Svg>
  );
}
