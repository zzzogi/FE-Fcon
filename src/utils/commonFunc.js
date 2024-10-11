export const convertMinsToHrsMins = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Add leading zero if minutes is less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  return `${formattedHours}h${formattedMinutes}`;
};

export function formatKBToMB(kilobytes) {
  if (kilobytes < 1024) {
    return `${kilobytes} KB`;
  } else {
    let megabytes = kilobytes / 1024;
    return `${megabytes.toFixed(2)} MB`; // Limit to 2 decimal places for better readability
  }
}
