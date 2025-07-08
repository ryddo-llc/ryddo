import { BikePerformanceData, PerformanceMetric } from '../../types/performance';

// Default Super73 RX performance data
export const super73RXPerformanceData: BikePerformanceData = {
  bikeId: 'super73-rx',
  bikeName: 'Super73 RX',
  metrics: [
    {
      id: 'range',
      label: 'Maximum Range - 45+ Miles (pedal assist*)',
      sublabel: '960 watt-hours, 21700 cells',
      percentage: 85,
      color: '#F92F7B',
      category: 'range',
      order: 1,
    },
    {
      id: 'power',
      label: 'Power - 2,000 Watts',
      sublabel: '48V Motor: 2,000W peak',
      percentage: 100,
      color: '#F92F7B',
      category: 'power',
      order: 2,
    },
    {
      id: 'speed',
      label: 'Top Speed - 28+ mph',
      sublabel: 'Based on ideal conditions',
      percentage: 88,
      color: '#F92F7B',
      category: 'speed',
      order: 3,
    },
    {
      id: 'braking',
      label: 'Braking Power - 90%',
      sublabel: 'Quad Piston Hydraulic',
      percentage: 90,
      color: '#F92F7B',
      category: 'braking',
      order: 4,
    },
    {
      id: 'portability',
      label: 'Portability - 50%',
      sublabel: 'Weight & Portability',
      percentage: 50,
      color: '#F92F7B',
      category: 'portability',
      order: 5,
    },
    {
      id: 'comfort',
      label: 'Comfort - 85%',
      sublabel: 'Suspension + Position + Seat',
      percentage: 85,
      color: '#F92F7B',
      category: 'comfort',
      order: 6,
    },
    {
      id: 'tech',
      label: 'Tech Features - 75%',
      sublabel: 'Apps, Lighting, Navigation, Electrical',
      percentage: 75,
      color: '#F92F7B',
      category: 'tech',
      order: 7,
    },
  ],
};

const bikePerformanceRegistry: Record<string, BikePerformanceData> = {
  'super73-rx': super73RXPerformanceData,
};

export const getPerformanceData = (bikeId: string): BikePerformanceData => {
  const data = bikePerformanceRegistry[bikeId];
  
  if (!data) {
    console.warn(`Performance data not found for bike: ${bikeId}. Using default Super73 RX data.`);
    return super73RXPerformanceData;
  }
  
  return data;
};

export const getSortedMetrics = (metrics: PerformanceMetric[]): PerformanceMetric[] => {
  return [...metrics].sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getMetricsByCategory = (
  metrics: PerformanceMetric[], 
  category: string
): PerformanceMetric[] => {
  return metrics.filter(metric => metric.category === category);
};

// Default animation configuration
export const defaultAnimationConfig = {
  size: 600,
  pulseIntensity: 'normal' as const,
  colors: {
    center: '#FFD600',
    innerRing: '#FFD600',
    middleRing: '#FFD600',
    outerRing: '#FFD600',
  },
}; 