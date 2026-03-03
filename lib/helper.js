export function formatCountdown(futureTime) {
    const now = Date.now();
    let diff = Math.max(0, futureTime - now);

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, "0");

    return `${days}d : ${pad(hours)}H : ${pad(minutes)}M : ${pad(seconds)}S`;
}
