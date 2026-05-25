const writeups = [
  {
    title: "Email Lifecycle Business Logic Bug",
    tag: "Medium",
    text: "A deleted account email remains locked, blocking signup or reinvitation.",
    url: "https://mialmashahreh22.github.io/email-lifecycle-business-logic-bug/",
    action: "Open writeup"
  },
  {
    title: "Password Reset Whitespace Bug",
    tag: "Medium",
    text: "Password reset accepts leading whitespace, but login handles it differently and causes lockout.",
    url: "https://mialmashahreh22.github.io/password-reset-whitespace-bug/",
    action: "Open writeup"
  },
  {
    title: "Unauthorized File Deletion IDOR",
    tag: "High",
    text: "A destructive file action is possible without proper authentication and ownership checks.",
    url: "https://mialmashahreh22.github.io/unauthorized-file-deletion-idor/",
    action: "Open writeup"
  },
  {
    title: "Ticket Reservation Logic Bug",
    tag: "High",
    text: "Unpaid ticket reservations stay locked too long and can block real buyers.",
    url: "https://mialmashahreh22.github.io/ticket-reservation-business-logic-bug/",
    action: "Open writeup"
  },
  {
    title: "Unsubscribe Endpoint IDOR",
    tag: "High",
    text: "Changing a raw mail ID can unsubscribe another user and expose private data.",
    url: "https://mialmashahreh22.github.io/unsubscribe-endpoint-idor/",
    action: "Open writeup"
  },
  {
    title: "Reusable Email Verification Code",
    tag: "Medium",
    text: "Old verification codes remain valid after requesting a new one.",
    url: "https://mialmashahreh22.github.io/reusable-email-verification-code-bug/",
    action: "Open writeup"
  },
  {
    title: "Unauthenticated API Token Exposure",
    tag: "Critical",
    text: "A credentials endpoint returns token-like data to logged-out users.",
    url: "https://mialmashahreh22.github.io/unauthenticated-api-token-exposure/",
    action: "Open writeup"
  },
  {
    title: "Static Analysis Basics",
    tag: "Guide",
    text: "Semgrep, YARA, secret scanning, secure code review, and Code Scanner Quest.",
    url: "https://mialmashahreh22.github.io/static-analysis-basics-for-cybersecurity/",
    action: "Open guide"
  },
  {
    title: "Networking Basics",
    tag: "Guide",
    text: "Networking fundamentals for cybersecurity with Network Quest.",
    url: "https://mialmashahreh22.github.io/networking-basics-for-cybersecurity/",
    action: "Open guide"
  },
  {
    title: "Cloud Security Engineer 10 Essentials",
    tag: "Guide",
    text: "Top 10 things to know before becoming a cloud security engineer.",
    url: "https://mialmashahreh22.github.io/cloud-security-engineer-10-essentials/",
    action: "Open guide"
  },
  {
    title: "Windows Filesystem Guide",
    tag: "Guide",
    text: "Windows directories, permissions, PowerShell, and investigation paths.",
    url: "https://github.com/mialmashahreh22/windows-filesystem-guide",
    action: "Open repo"
  },
  {
    title: "Linux Filesystem Guide",
    tag: "Guide",
    text: "Linux directories, permissions, commands, and admin fundamentals.",
    url: "https://github.com/mialmashahreh22/linux-filesystem-guide",
    action: "Open repo"
  }
];

function writeupCard(item) {
  return `
    <a class="card project-card" href="${item.url}" target="_blank" rel="noreferrer">
      <span class="tag severity">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span class="open-link">${item.action}</span>
    </a>
  `;
}

const writeupCards = document.querySelector("#writeupCards");

if (writeupCards) {
  writeupCards.innerHTML = writeups.map(writeupCard).join("");
}
