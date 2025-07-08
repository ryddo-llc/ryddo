// Performance calculation utilities

// Wheel geometry constants for offset calculation
export const WHEEL_GEOMETRY = {
  centerY: 180,
  centerX: 500,
  radius: 170,
  lineSpacing: 48,
  barWidth: 350,
} as const;

// Calculate curve offset for positioning metrics around the wheel
export function getCurveOffset(
  index: number, 
  total: number, 
  yAdjust: number = 0
): number {
  const y = WHEEL_GEOMETRY.centerY - ((total - 1) / 2 - index) * WHEEL_GEOMETRY.lineSpacing + yAdjust;
  const dx = Math.sqrt(Math.max(0, WHEEL_GEOMETRY.radius ** 2 - (y - WHEEL_GEOMETRY.centerY) ** 2));
  return WHEEL_GEOMETRY.centerX + dx - WHEEL_GEOMETRY.barWidth;
}

// Calculate responsive positioning to prevent overflow
export function getResponsiveOffset(
  baseOffset: number,
  screenWidth: number,
  minOffset: number = -50,
  maxOffset: number = 300
): number {
  // Ensure offset doesn't go beyond screen bounds
  const calculatedMax = Math.max(maxOffset, screenWidth - 450);
  return Math.max(minOffset, Math.min(baseOffset, calculatedMax));
}

// Calculate responsive bar width
export function getResponsiveBarWidth(
  screenWidth: number,
  defaultWidth: number = WHEEL_GEOMETRY.barWidth,
  minWidth: number = 200
): number {
  const maxWidth = Math.max(minWidth, screenWidth - 200);
  return Math.min(defaultWidth, maxWidth);
}

// Helper to get animation delay based on index
export function getAnimationDelay(index: number, baseDelay: number = 150): number {
  return index * baseDelay;
} 