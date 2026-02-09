/**
 * Contact information configuration
 * Centralized location for all contact details
 * Can be moved to environment variables for different environments
 */

export const contactConfig = {
  location: {
    address: "Riara cooperative suites",
    fullAddress: "Riara cooperative suites.\nP. O. Box 13861-00800, Nairobi, Kenya",
    // Coordinates for Google Maps (Riara Road, Nairobi)
    coordinates: {
      lat: -1.2864,
      lng: 36.7814,
    },
    // Google Maps Place ID or search query
    placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", // Riara Road, Nairobi (approximate)
    searchQuery: "Riara cooperative suites Nairobi Kenya",
  },
  contact: {
    phone: "+254 707 660 173",
    phoneAlt: "8587 911 064",
    email: "info@streetvisibility.com",
    emailSales: "sales@streetvisibility.com",
  },
};

/**
 * Generate Google Maps embed URL
 * @param {Object} options - Options for the map
 * @param {number} options.lat - Latitude
 * @param {number} options.lng - Longitude
 * @param {string} options.placeId - Google Place ID
 * @param {string} options.query - Search query
 * @param {number} options.zoom - Zoom level (default: 15)
 * @returns {string} Google Maps embed URL
 */
export function getGoogleMapsEmbedUrl(options = {}) {
  const { lat, lng, placeId, query, zoom = 15 } = options;
  const config = contactConfig.location;

  // Prefer Place ID if available (most accurate)
  if (placeId || config.placeId) {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d-s6U4kR1F3J5E&q=place_id:${placeId || config.placeId}&zoom=${zoom}`;
  }

  // Use coordinates if available
  if ((lat !== undefined && lng !== undefined) || (config.coordinates.lat && config.coordinates.lng)) {
    const finalLat = lat ?? config.coordinates.lat;
    const finalLng = lng ?? config.coordinates.lng;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814284715!2d${finalLng}!3d${finalLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${finalLat}%2C${finalLng}!5e0!3m2!1sen!2ske!4v${Date.now()}`;
  }

  // Fallback to search query
  const searchQuery = query || config.searchQuery;
  return `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d-s6U4kR1F3J5E&q=${encodeURIComponent(searchQuery)}&zoom=${zoom}`;
}

// Default embed URL using coordinates (no API key needed for basic embed)
export const defaultMapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814284715!2d${contactConfig.location.coordinates.lng}!3d${contactConfig.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3b2e1b0a5%3A0x1!2sRiara%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v${Date.now()}`;
