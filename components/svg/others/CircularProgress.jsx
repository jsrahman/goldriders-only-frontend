const CircularProgress = ({ percent = 75 }) => {
  const text = `${percent}%`;
  const radius = 31.5;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference * (1 - percent / 100);

  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background ring */}
      <circle
        cx="35"
        cy="35"
        r={radius}
        fill="none"
        stroke="#333"
        strokeWidth={stroke}
      />

      {/* Progress ring */}
      <circle
        cx="35"
        cy="35"
        r={radius}
        fill="none"
        stroke="#13BF22"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 35 35)"
      />

      {/* Center Text */}
      <text
        x="35"
        y="40"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="600"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircularProgress;
