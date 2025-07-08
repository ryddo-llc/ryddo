export type PerformanceCategory = 
  | 'range' 
  | 'power' 
  | 'speed' 
  | 'braking' 
  | 'portability' 
  | 'comfort' 
  | 'tech';

export interface PerformanceMetric {
  id: string;
  label: string;
  sublabel: string;
  percentage: number;
  color: string;
  category: PerformanceCategory;
  order?: number;
}

export interface BikePerformanceData {
  bikeId: string;
  bikeName: string;
  metrics: PerformanceMetric[];
}

export interface PulseAnimationConfig {
  size?: number;
  pulseIntensity?: 'subtle' | 'normal' | 'strong';
  colors?: {
    center: string;
    innerRing: string;
    middleRing: string;
    outerRing: string;
  };
  className?: string;
}

export interface PerformanceComparisonProps {
  bikeId: string;
  bikeImagePerformance: string;
  performanceData?: BikePerformanceData;
  animationConfig?: PulseAnimationConfig;
}

export interface PerformanceMetricsProps {
  metrics: PerformanceMetric[];
  isVisible?: boolean;
  className?: string;
} 