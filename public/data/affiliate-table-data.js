const rewardsTable = {
  header: [
    { key: "copy", label: "Code" },
    { key: "totalReferrals", label: "Total Referrals" },
    { key: "totalRewardAmount", label: "Total Reward Amount" },
    { key: "totalRewards", label: "Total Rewards" },
    { key: "visitCount", label: "Visit Count" },
    { key: "description", label: "Description" },
  ],

  data: [
    [`JGUJIR8Z`, 0, "0.0", "0.0", "12.12.2025", "CLAIM"],
    [`JGUJIR8Z`, 0, "0.0", "0.0", "12.12.2025", "CLAIM"],
  ],
};
const commissionTable = {
  header: [
    { key: "name", label: "Username" },
    { key: "totalReferrals", label: "Prize Name" },
    { key: "totalRewardAmount", label: "Prize Type" },
    { key: "totalRewards", label: "Total Rewards" },
    { key: "actionText", label: "Action" },
    { key: "text", label: "Status" },
    { key: "date", label: "Date" },
  ],

  data: [[`qwerty`, "ytrewq", "-", "-", "-", "-", "01.01.2025"]],
};
const friendsTable = {
  header: [
    { key: "name", label: "Username" },
    { key: "totalReferrals", label: "Full Name" },
    { key: "ballance", label: "Balance" },
    { key: "date", label: "Date" },
  ],

  data: [[`qwerty`, "ytrewq", "-", "01.01.2025"]],
};
export { rewardsTable, commissionTable, friendsTable };
