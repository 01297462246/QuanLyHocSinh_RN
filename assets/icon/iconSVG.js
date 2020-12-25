import React from 'react'
import { View } from 'react-native'
import Svg, {
  Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask
} from 'react-native-svg'

const AlertIcon = () => (
  <View>
    <Svg viewBox="0 0 25 25" width="21" height="21">
      <Path
        class="st0"
        fill="#000" d="M25.04,20C23.73,20,22,18,22,16.83v-5.52c0-4.06-2.94-7.8-6.98-8.89c-0.01,0-0.03-0.01-0.04-0.01 long long path in a far far away galaxy"
      />
    </Svg>
  </View>
)
const BackgroundLayout1 = () => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <Path fill="#0099ff" fill-opacity="0.6" d="M0,256L30,250.7C60,245,120,235,180,229.3C240,224,300,224,360,197.3C420,171,480,117,540,85.3C600,53,660,43,720,53.3C780,64,840,96,900,133.3C960,171,1020,213,1080,229.3C1140,245,1200,235,1260,240C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></Path>
    </Svg>
  </View>
)

export {
  AlertIcon,
  BackgroundLayout1
}