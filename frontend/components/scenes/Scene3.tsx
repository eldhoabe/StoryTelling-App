// Card 4 — Impact Winter / Dark Sky
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, LinearGradient, Line, Path, Rect, Stop,
} from 'react-native-svg';

export default function Scene3() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <LinearGradient id="s3sky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#080808" />
          <Stop offset="50%" stopColor="#141410" />
          <Stop offset="100%" stopColor="#1a1610" />
        </LinearGradient>
      </Defs>

      <Rect width={400} height={533} fill="url(#s3sky)" />

      {/* Dust clouds */}
      <Ellipse cx={200} cy={80} rx={250} ry={100} fill="rgba(50,45,35,0.85)" />
      <Ellipse cx={100} cy={60} rx={180} ry={80} fill="rgba(45,40,30,0.8)" />
      <Ellipse cx={320} cy={70} rx={160} ry={75} fill="rgba(48,43,33,0.82)" />
      <Ellipse cx={200} cy={100} rx={220} ry={90} fill="rgba(42,38,28,0.75)" />

      {/* Ghostly sun */}
      <Circle cx={200} cy={130} r={28} fill="rgba(180,160,100,0.08)" />
      <Circle cx={200} cy={130} r={18} fill="rgba(180,160,100,0.06)" />
      <Circle cx={200} cy={130} r={10} fill="rgba(180,160,100,0.10)" />

      {/* Dead trees */}
      <Rect x={50} y={200} width={12} height={200} rx={3} fill="#1a1810" />
      <Line x1={56} y1={250} x2={20} y2={220} stroke="#1a1810" strokeWidth={5} strokeLinecap="round" />
      <Line x1={56} y1={270} x2={90} y2={245} stroke="#1a1810" strokeWidth={4} strokeLinecap="round" />
      <Line x1={56} y1={290} x2={25} y2={275} stroke="#1a1810" strokeWidth={3} strokeLinecap="round" />
      <Rect x={320} y={190} width={14} height={210} rx={3} fill="#1a1810" />
      <Line x1={327} y1={240} x2={360} y2={215} stroke="#1a1810" strokeWidth={5} strokeLinecap="round" />
      <Line x1={327} y1={260} x2={295} y2={240} stroke="#1a1810" strokeWidth={4} strokeLinecap="round" />
      <Line x1={327} y1={280} x2={355} y2={268} stroke="#1a1810" strokeWidth={3} strokeLinecap="round" />
      <Rect x={165} y={220} width={10} height={180} rx={2} fill="#181610" />
      <Line x1={170} y1={265} x2={140} y2={248} stroke="#181610" strokeWidth={4} strokeLinecap="round" />
      <Line x1={170} y1={285} x2={200} y2={270} stroke="#181610" strokeWidth={3} strokeLinecap="round" />

      {/* Wilted plants */}
      <Path d="M80,400 Q90,380 85,370 Q75,380 80,400Z" fill="#1e1c12" opacity={0.7} />
      <Path d="M110,410 Q125,385 118,372 Q105,385 110,410Z" fill="#1e1c12" opacity={0.6} />
      <Path d="M260,405 Q270,382 265,370 Q255,382 260,405Z" fill="#1e1c12" opacity={0.7} />
      <Path d="M300,412 Q312,388 305,375 Q295,388 300,412Z" fill="#1e1c12" opacity={0.65} />

      {/* Frost ground */}
      <Rect x={0} y={400} width={400} height={133} fill="#131210" />
      <Ellipse cx={80} cy={415} rx={40} ry={8} fill="rgba(200,210,220,0.06)" />
      <Ellipse cx={200} cy={420} rx={55} ry={7} fill="rgba(200,210,220,0.05)" />
      <Ellipse cx={330} cy={418} rx={45} ry={8} fill="rgba(200,210,220,0.06)" />

      {/* Ash/snow falling */}
      <Circle cx={60} cy={180} r={2} fill="rgba(220,215,200,0.35)" />
      <Circle cx={130} cy={160} r={1.5} fill="rgba(220,215,200,0.3)" />
      <Circle cx={200} cy={190} r={2} fill="rgba(220,215,200,0.35)" />
      <Circle cx={280} cy={170} r={1.5} fill="rgba(220,215,200,0.3)" />
      <Circle cx={340} cy={185} r={2} fill="rgba(220,215,200,0.32)" />
      <Circle cx={100} cy={300} r={1.5} fill="rgba(220,215,200,0.25)" />
      <Circle cx={230} cy={310} r={2} fill="rgba(220,215,200,0.28)" />
      <Circle cx={360} cy={295} r={1.5} fill="rgba(220,215,200,0.25)" />
    </Svg>
  );
}
