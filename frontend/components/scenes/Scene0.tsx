// Card 1 — Cretaceous Forest with Triceratops
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Circle, Defs, Ellipse, G, Line, Path, Polygon, RadialGradient, Rect, Stop,
} from 'react-native-svg';

export default function Scene0() {
  return (
    <Svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="s0sky" cx="50%" cy="30%" r="70%">
          <Stop offset="0%" stopColor="#2d5a1e" />
          <Stop offset="60%" stopColor="#1a3a10" />
          <Stop offset="100%" stopColor="#0a1a06" />
        </RadialGradient>
        <RadialGradient id="s0sun" cx="70%" cy="20%" r="30%">
          <Stop offset="0%" stopColor="#c8860a" stopOpacity={0.35} />
          <Stop offset="100%" stopColor="#c8860a" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="s0gnd" cx="50%" cy="100%" r="60%">
          <Stop offset="0%" stopColor="#1e3a0e" />
          <Stop offset="100%" stopColor="#0d1f08" />
        </RadialGradient>
      </Defs>

      <Rect width={400} height={533} fill="url(#s0sky)" />
      <Ellipse cx={280} cy={100} rx={140} ry={120} fill="url(#s0sun)" />

      {/* Background trees */}
      <Rect x={10} y={60} width={22} height={280} rx={4} fill="#0e2208" opacity={0.8} />
      <Ellipse cx={21} cy={70} rx={40} ry={70} fill="#0d2009" opacity={0.7} />
      <Rect x={55} y={30} width={28} height={320} rx={4} fill="#0f2509" opacity={0.9} />
      <Ellipse cx={69} cy={45} rx={55} ry={85} fill="#0e2409" opacity={0.8} />
      <Rect x={320} y={45} width={24} height={300} rx={4} fill="#0e2208" opacity={0.8} />
      <Ellipse cx={332} cy={58} rx={50} ry={78} fill="#0d2009" opacity={0.75} />
      <Rect x={360} y={70} width={18} height={270} rx={3} fill="#0c1f07" opacity={0.7} />
      <Ellipse cx={369} cy={82} rx={36} ry={60} fill="#0c1f07" opacity={0.65} />

      {/* Mid trees */}
      <Rect x={130} y={100} width={20} height={240} rx={3} fill="#122b0a" />
      <Ellipse cx={140} cy={115} rx={44} ry={68} fill="#132c0b" opacity={0.9} />
      <Rect x={240} y={90} width={22} height={250} rx={3} fill="#112a09" />
      <Ellipse cx={251} cy={103} rx={46} ry={72} fill="#122b0a" opacity={0.9} />

      {/* Ground */}
      <Ellipse cx={200} cy={480} rx={260} ry={80} fill="url(#s0gnd)" />

      {/* Ferns */}
      <Ellipse cx={30} cy={400} rx={55} ry={25} fill="#0f2a08" transform="rotate(-15,30,400)" />
      <Ellipse cx={370} cy={410} rx={50} ry={22} fill="#0e2907" transform="rotate(12,370,410)" />
      <Ellipse cx={150} cy={420} rx={40} ry={18} fill="#102b09" transform="rotate(-8,150,420)" />
      <Ellipse cx={280} cy={415} rx={45} ry={20} fill="#0f2a08" transform="rotate(10,280,415)" />

      {/* Triceratops */}
      <G transform="translate(80,300)">
        <Ellipse cx={120} cy={80} rx={95} ry={55} fill="#3d5a2a" />
        <Ellipse cx={45} cy={55} rx={32} ry={38} fill="#3d5a2a" />
        <Ellipse cx={18} cy={35} rx={38} ry={28} fill="#455e30" />
        <Ellipse cx={30} cy={18} rx={42} ry={22} fill="#4a622e" opacity={0.85} />
        <Polygon points="5,20 -5,5 15,18" fill="#2a3e18" />
        <Polygon points="25,8 18,-8 35,10" fill="#2a3e18" />
        <Polygon points="48,22 45,8 58,20" fill="#2a3e18" />
        <Circle cx={8} cy={32} r={5} fill="#1a2a10" />
        <Circle cx={9} cy={31} r={2} fill="#c8a060" />
        <Rect x={60} y={120} width={28} height={55} rx={8} fill="#354e22" />
        <Rect x={100} y={122} width={26} height={52} rx={8} fill="#354e22" />
        <Rect x={148} y={120} width={28} height={55} rx={8} fill="#354e22" />
        <Rect x={188} y={122} width={26} height={52} rx={8} fill="#354e22" />
        <Path d="M215,80 Q260,70 270,90 Q260,100 215,95Z" fill="#3a5428" />
        <Path d="M80,60 Q120,55 160,65" stroke="#2a3e1a" strokeWidth={1} fill="none" opacity={0.5} />
        <Path d="M70,80 Q110,75 155,82" stroke="#2a3e1a" strokeWidth={1} fill="none" opacity={0.4} />
      </G>

      {/* Light rays */}
      <Line x1={280} y1={0} x2={200} y2={533} stroke="rgba(200,180,100,0.04)" strokeWidth={40} />
      <Line x1={310} y1={0} x2={160} y2={533} stroke="rgba(200,180,100,0.03)" strokeWidth={25} />

      <Ellipse cx={200} cy={490} rx={230} ry={35} fill="rgba(180,220,150,0.06)" />
    </Svg>
  );
}
